import React, { useState } from 'react'
import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button, { ButtonProps } from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { sendIzvod, sendUvjerenje } from '../../features/user/userSlice';
import { toast } from 'react-toastify';

interface MyButtonProps extends ButtonProps {
  id: string,
  typographyText: string
}

function MyButton({id, typographyText, ...props}: MyButtonProps){
  const EndIcon = ({ typographyId }: { typographyId: string }) => (
    <ArrowForwardIosIcon id={id} fontSize='large' />
  )
  return (
    <Button {...props} id={id} endIcon={<EndIcon typographyId={id} />} fullWidth sx={{height: {md: '90px', xs: '80px'}, mt: '20px'}} variant="contained">
      <Typography fontWeight={600} id={id} fontSize={{md: '22px', xs: '18px'}}>{typographyText}</Typography>
    </Button>
  )
}

export default function Uvjerenja() {
  const [open, setOpen] = useState(false)
  const [currId, setCurrId] = useState('')
  const name = useAppSelector(state => state.user.jmbgData?.[0]?.name)
  const dispatch = useAppDispatch()

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(sendUvjerenje({
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
    setOpen(false);
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
                <Typography fontSize={{xs: '45px', sm: '55px'}} color='text.primary' fontWeight={600} align='center'>Usluge Općine</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography mt='-20px' fontSize={{xs: '25px', sm: '35px'}} color='text.primary' fontWeight={500} align='center'>Uvjerenja</Typography>
              </Grid>
              
                <Grid  item md={4} sm={6} xs={8}>
                  <MyButton onClick={handleClickOpen} id='o bračnom statusu' typographyText='bračni status' />
                  <MyButton onClick={handleClickOpen} id='o zajedničkom domaćinstvu' typographyText='zajedničko domaćinstvo' />
                  <MyButton onClick={handleClickOpen} id='o upisu u matične knjige' typographyText='upis u matične knjige' />
                  
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
          Uvjerenje {currId}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pritiskom na dugme "Pošalji", vaš uvjerenje će biti poslan na vaš email.
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

