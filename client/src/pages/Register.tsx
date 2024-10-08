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
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { register } from '../features/auth/authSlice';
import validator from 'validator';
import { toast } from 'react-toastify';




export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    jmbg: 0
  })
  const [isError, setIsError] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const jwt = localStorage.getItem('jwt')
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(validator.isEmpty(formData.email, { ignore_whitespace: false }) || validator.isEmpty(formData.password, { ignore_whitespace: false }) || validator.isEmpty(formData.password2, { ignore_whitespace: false }) || formData.jmbg === 0){
      toast.error('Sva polja moraju biti popunjena!')
      setIsError(true)
    }else{
      if(formData.password === formData.password2){
        dispatch(register(formData))
      }else{
        toast.error('Lozinke se ne podudaraju!')
        setIsError(true)
      }
    
    }}


  useEffect(() => {
    if(jwt){
      navigate('/home')
    }
  }, [])
  
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    setFormData(prevState => ({
      ...prevState,
      [target.name]: target.value 
    }))
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
            Registrirajte se
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    onChange={onChange}
                    required
                    fullWidth
                    autoFocus
                    error={isError}
                    id="email"
                    type='email'
                    label="Email Adresa"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={onChange}
                    required
                    error={isError}
                    fullWidth
                    name="password"
                    label="Lozinka"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={onChange}
                    required
                    fullWidth
                    error={isError}
                    name="password2"
                    
                    label="Potvrdite Lozinku"
                    type="password"
                    id="password2"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={onChange}
                    type='number'
                    name="jmbg"
                    error={isError}
                    required
                    fullWidth
                    label="JMBG"
                  />
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrirajte se
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to='/login' >
                  <Typography color='text.primary' variant="body2">Već imate račun? Prijavite se</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>

      </Box>
   
  )
}