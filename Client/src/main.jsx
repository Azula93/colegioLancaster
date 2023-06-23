import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';
// snackbarprovider muestra alertas 




// este theme hace que se pueda cambiar los colores tanto del tema como de los errores o los success, es para personalizar el tema de la pag
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1AC8ED',
    },
    secondary: {
      main: '#AF7595',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ec6d04',
    },
    success: {
      main: '#2f7f33',
    },
  },
})

import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ThemeProvider theme={theme}>

    <BrowserRouter>

    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>

      <Container sx={{mt:5}}>
        {/* MT = MARGIN TOP
        sx pertmite dar algunas propiedades */}
        <App />
          {/* <CardOne/> */}
            {/* CardOne= Exportacion del card */}
          {/* <RecipeReviewCard /> */}

        <CssBaseline/>
        {/*  CssBaseline resetea los estilos css es como ponerle el *{} en css normal */}
      
      </Container>

    </SnackbarProvider>

    </BrowserRouter>
    
  </ThemeProvider>
 
  </React.StrictMode>,
)
