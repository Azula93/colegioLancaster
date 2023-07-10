import { Container  } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
// import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import "./index.css"


// este array hace que los botones home, register, login sean dinamicos, es decir van a la ubicacion cambian de nombre y tiene icono segun sea el caso
const navArrayLinks =[
  { title:"Inicio",
   path: "/home",
   icon: <HomeIcon/>},

   { title:"Login",
   path: "/login",
   icon:<LoginIcon/> },

   { title:"Register",
   path: "/register",
   icon:<AppRegistrationIcon/>}
]


export default function App () {

  
  return(

    <>
        <NavBar navArrayLinks={navArrayLinks} />
        
         <Container maxWidth="md">

          <Routes>

              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              {/* <Route path="/profile" element={<Profile/>} /> */}

            </Routes>

          </Container>
    </>
  )
}

