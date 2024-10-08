import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react';
import { ILoginData } from '../globals/interfaces';
import { useAppDispatch } from '../hooks/hooks';
import { login } from '../features/auth/authSlice';
import validator from 'validator';
import { toast } from 'react-toastify';


export default function Login() {
  const [formData, setFormData] = useState<ILoginData>({
    email: '',
    password: ''
  })
  const [isError, setIsError] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const jwt = localStorage.getItem('jwt')
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    setFormData(prevState => ({
      ...prevState,
      [target.name]: target.value 
    }))
  }

  useEffect(() => {
    if(jwt){
      navigate('/home')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(validator.isEmpty(formData.email, { ignore_whitespace: false }) || validator.isEmpty(formData.password, { ignore_whitespace: false })){
      toast.error('Sva polja moraju biti popunjena!')
      setIsError(true)
    }else{
      dispatch(login(formData))
    }
    
  }

  return (
    <Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
            <PersonIcon fontSize='large' />
          </Avatar>
          <Typography component="h1" variant="h5">
            Prijavite se
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              onChange={onChange}
              fullWidth
              id="email"
              error={isError}
              label="Email Adresa"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              error={isError}
              onChange={onChange}
              fullWidth
              name="password"
              label="Lozinka"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Prijavi se
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link to='/register'>
                  <Typography color='text.primary' variant="body2">Nemate račun? Registrirajte se</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}