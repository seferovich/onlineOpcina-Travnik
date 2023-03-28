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
      <Typography fontWeight={600} id={id} fontSize={{md: '25px', xs: '22px'}}>{typographyText}</Typography>
    </Button>
  )
}

export default function Start() {
  const navigate = useNavigate()

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    navigate(`/uslugePolicije/${target.id}`)
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
              
                <Grid mt='30px' item md={4} sm={6} xs={8}>
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='uvjerenja' />
                  <MyButton onClick={onClick} id='izvodi' typographyText='izvodi' />    
                </Grid>
            </Grid>

          </Box>
        

        </Container>
      </Fade>
  )
}

