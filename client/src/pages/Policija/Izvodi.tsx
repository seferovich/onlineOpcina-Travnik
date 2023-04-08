import React, { useState } from 'react'
import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { sendIzvod } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import MyButton from '../../components/MyButton';


export default function Izvodi() {
  const [open, setOpen] = useState(false)
  const [currId, setCurrId] = useState('')
  const name = useAppSelector(state => state.user.jmbgData?.[0]?.name)
  const dispatch = useAppDispatch()


  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(sendIzvod({
      name: name,
      sendName: currId
    }))

    setOpen(false)
    toast.success('Poslano')
  }

  const handleClickOpen = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    setOpen(true)
    setCurrId(target.id)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Fade in={true} timeout={400}>
        <Container maxWidth='lg'>
          <CssBaseline />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Grid container justifyContent='center' spacing='20px'>
              <Grid item mt='85px' xs={12}>
                <Typography fontSize={{xs: '45px', sm: '55px'}} color='text.primary' fontWeight={600} align='center'>Usluge Policije</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography mt='-20px' fontSize={{xs: '25px', sm: '35px'}} color='text.primary' fontWeight={500} align='center'>Izvodi</Typography>
              </Grid>
              
                <Grid item md={4} sm={6} xs={8}>
                <MyButton onClick={handleClickOpen} id='iz prekršajne evidencije' typographyText='prekršajna evidencija' />
                <MyButton onClick={handleClickOpen} id='iz kaznene evidencije' typographyText='kaznena evidencija' />
                </Grid>
            </Grid>

          </Box>
        

        </Container>
      </Fade>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Izvod {currId}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pritiskom na dugme "Pošalji", vaš izvod će biti poslan na vaš email.
            Molimo vas provjerite vaš spam folder u email-u.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Zatvori</Button>
          <Button onClick={onClick} autoFocus>
            Pošalji
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

