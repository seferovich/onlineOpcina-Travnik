import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './app/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#213458',
      contrastText: "#fff",  
    },
    secondary: {
      main: '#213458',
      contrastText: "#fff"  
    },
    text: {
      primary: '#011446',
      // secondary: '#011446'
    },
    background:{
      default: '#DDDDDD'
    }
  },
  typography: {
    fontFamily: 'Poppins',
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Router>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
    
  </Router>
  
)
