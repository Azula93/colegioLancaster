/* eslint-disable react/prop-types */
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import {Box} from '@mui/system'
import { NavLink } from "react-router-dom";
// el navlink hace que la pagina no se recargue y por lo tanto mejora la navegacion por la web



export default function NavBar ({navArrayLinks}){

  
    const [open, setOpen] = useState(false)

    return (
        <>

            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    size="large"
                    variant="contained" onClick={() => setOpen(true)}
                    sx={{ display:{xs: "flex", sm:"none"}}}
                    // este display lo que hace es que en pantallas pequeñas se vea el icono del menu lateral y en pantallas mas grandes desaparezca
                    >
                    <MenuIcon/>

                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow:1}}>Colegio Lancaster</Typography>

                    <Box sx={{ display:{xs: "none", sm:"block"}}}>
                        {/* // este display lo que hace es que en pantallas pequeñas NO se vean los botones del navbar y en pantallas mas grandes aparezca */}
                        {
                        navArrayLinks.map(item => (<Button 
                            color="inherit" 
                            key={item.title}
                            component={NavLink}
                            to={item.path}>{item.title}</Button>))
                        }
                    </Box>

                </Toolbar>
            </AppBar>

           
            {/*  Drawer es es menu lateral que aparece en dispositivos moviles*/}
            <Drawer open={open}
            anchor="left"
            // anchor indica hacia donde se abre el menu
            onClose={() => setOpen(false)}
            // onlcose hace que se cierre el menu cuando se hace click en otra parte
            sx={{ display:{xs: "flex", sm:"none"}}}
            // se coloca tambien este display para que en pantallas intermedias como tablets no aparezca el menu lateral
            >
                <NavListDrawer navArrayLinks={navArrayLinks} 
                NavLink={NavLink} 
                setOpen={setOpen}
                />
            </Drawer>
           
        </>
    )
}