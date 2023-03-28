import React from 'react'
import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button, { ButtonProps } from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


interface MyButtonProps extends ButtonProps {
  id: string,
  typographyText: string
}

function MyButton({id, typographyText, ...props}: MyButtonProps){
  const EndIcon = ({ typographyId }: { typographyId: string }) => (
    <ArrowForwardIosIcon id={id} fontSize='large' />
  )
  return (
    <Button {...props} id={id} endIcon={<EndIcon typographyId={id} />} fullWidth sx={{height: {md: '90px', xs: '70px'}, mt: '20px'}} variant="contained">
      <Typography fontWeight={600} id={id} fontSize={{md: '24px', sm: '20px', xs: '16.5px'}}>{typographyText}</Typography>
    </Button>
  )
}

export default function Uvjerenja() {
  const navigate = useNavigate()

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    navigate(`/uslugeOpcine/${target.id}`)
  }
  return (
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
                <Typography mt='-20px' fontSize={{xs: '25px', sm: '35px'}} color='text.primary' fontWeight={500} align='center'>Uvjerenja</Typography>
              </Grid>
              
                <Grid  item md={4} sm={6} xs={8}>
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='o nekažnjavanju' />
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='o prebivalištu' />
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='o kretanju' />
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='o kaznama' />
                  
                </Grid>
            </Grid>

          </Box>
        

        </Container>
      </Fade>
  )
}

