import { Box, Container, Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import '../App.css'


export default function Footer()  {
  return (
    <Box
      sx={{
        display: 'flex',
        height: "auto",
        bottom: '20px',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
      component='div'
      className="footBox"
    >
      <Container maxWidth="xs">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' flexDirection='row'>
              <img width='80px' src="https://live.staticflickr.com/65535/52779656306_d536985eba_o.png" crossOrigin="anonymous" alt="travnik"/>
              <Divider flexItem orientation="vertical" sx={{ml: '32px', mr: '17px'}} />
              <Typography fontSize='16px' sx={{letterSpacing: '0px'}} fontWeight={600} ml={1} color="black" variant="h6">
                Općina Travnik, 2035. 
              </Typography> 
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
