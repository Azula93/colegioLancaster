import { Grid, TextField, Typography,Button, Box } from "@mui/material";
import "./Login.css"
import LoginIcon from '@mui/icons-material/Login';
import * as Yup from "yup"
import { useFormik } from "formik";



const LoginForm = () =>{

  let initialValues={
    email:"",
    password:"",
  }

  const enviarFormulario = (data) =>{
    console.log(data);
  }


  const {handleSubmit,handleChange,values, errors} = useFormik({
    initialValues,
     onSubmit:enviarFormulario, 

    validationSchema: Yup.object({
      
      email:Yup.string().required("Debes ingresar un Email Valido"),

      password:Yup.string().required("Debes ingresar una contraseña valida"),
    })

  })

  return(
    <Box sx={{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"400px",
    justifyContent: "space-evenly",
    alignItems:"center"}}>
      
      <Typography 
      color="primary" 
      variant="h2" 
      align="center" 
      margin={6} 
      className="title" 
      >Inicio de Sesion</Typography>

      
      <form className="login-form" onSubmit={handleSubmit} >

        <Grid container
          justifyContent="space-evenly" 
          spacing={3}
          sx={{width:"100%"}}
        >

         <Grid item xs={12} md={7}  >

            <TextField 
              
              className="emailInput"
              type="email" 
              label="Email" 
              variant="outlined"  
              fullWidth 
              name="email" 
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}>
            </TextField>

          </Grid> 

          <Grid item xs={12} md={7}>

          <TextField type="password" 
            label="Contraseña" 
            variant="outlined"  
            fullWidth 
            name="password" 
            onChange={handleChange}
            value={values.password}
            error={errors.password}
            helperText={errors.password}>
          </TextField>

          </Grid>

    
          <Grid item xs={12} md={7}>
            <Button 
              endIcon={<LoginIcon/>}
              className="btnLogin"
              type="submit" 
              variant="contained"> Ingresar</Button>
          </Grid>

        </Grid>
         
      </form>
      
    
    </Box>
)} 

export default LoginForm