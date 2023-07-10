import { Grid, TextField, Typography, Button, Box } from "@mui/material";
import "./register.css";
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerRequest } from "../../api/auth";
import {useForm} from "react-hook-form"


const RegisterForm = () => {

  const {handleSubmit} = useForm();
  
  const onSubmit = handleSubmit(async(values) =>{
    const res = await registerRequest(values)
    console.log(res)
  })

  let valoresIniciales={
      nombre:"",
      apellido:"",
      email:"",
      password:""
    }

  const enviarFormulario = (data) =>{
    console.log(data)
  }
      
  const {handleChange,values, errors} = useFormik({

    initialValues: valoresIniciales,

     onSubmit: enviarFormulario,

    //  (data)=>{
    //   console.log(data)
    //  }, 

      validationSchema: Yup.object({
        nombre:Yup.string().required("Debes ingresar tu Nombre").min(4, "La contraseña debe tener al menos 4 caracteres"),

        apellido:Yup.string().required("Debes ingresar tu Apellido").min(4, "La contraseña debe tener al menos 4 caracteres"),

        email:Yup.string().required("Debes ingresar un Email Valido").email("El email no es valido"),

        password:Yup.string().required("Debes ingresar una contraseña").min(6, "La contraseña debe tener al menos 6 caracteres"),

    })
  })

  return(
  <Box x={{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"400px",
    justifyContent: "space-evenly",
    alignItems:"center"
    }}>

    <Typography color="primary" 
    variant="h2" 
    align="center" 
    margin={10} 
    className="title" 
    spacing={2}>Formulario de Registro</Typography>

    <form  className="formContainer" 
    onSubmit={onSubmit}
    >

  
      <Grid container 
      justifyContent="space-evenly" 
      spacing={2}
      sx={{width:"100%"}}>

        <Grid item xs={12} md={7}>

        <TextField 
          type="text" 
          label="Nombre" 
          variant="outlined"  
          fullWidth 
          name="nombre" 
          onChange={handleChange}
          value={values.nombre}
          error={!!errors.nombre}
          helperText={errors.nombre}
        />
        </Grid>

        <Grid item xs={12} md={7}>
        <TextField type="text" 
          label="Apellido" 
          variant="outlined" 
          fullWidth 
          name="apellido" 
          onChange={handleChange}
          value={values.apellido}
          error={!!errors.apellido}
          helperText={errors.apellido}
        />
        </Grid>

        <Grid item xs={12} md={7}>
        <TextField type="email" 
          label="Email" 
          variant="outlined"  
          fullWidth 
          name="email" 
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helperText={errors.email}
        />
        </Grid>

        <Grid item xs={12} md={7}>
        <TextField type="password" 
          label="Contraseña" 
          variant="outlined"  
          fullWidth 
          name="password" 
          onChange={handleChange}
          value={values.password}
          error={!!errors.password}
          helperText={errors.password}
        />

        </Grid>

        <Grid item xs={12} md={7}>

        <Button 
        // className={classes.btnRegister}
        startIcon={<SendIcon />}
        type="submit" 
        variant="contained"
        > Registrarse</Button>

        </Grid>

      </Grid>

    

    </form>
  </Box>
)}

export default RegisterForm