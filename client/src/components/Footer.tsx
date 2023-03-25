import { Box, Container, Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import '../App.css'


export default function Footer()  {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bottom: '20px',
        position: 'absolute' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' flexDirection='row'>
              <img className="foot" width='40px' alt="" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Coat_of_Arms_of_Travnik.png" />
              <Divider flexItem orientation="vertical" sx={{ml: '10px'}} />
              <Typography fontSize='16px' ml={1} color="black" variant="h6">
                Općina Travnik, 2035  
              </Typography> 
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
