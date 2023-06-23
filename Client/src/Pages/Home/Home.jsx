import {SlideShow, Slide, TextoSlide} from "../../Components/SlideShow/SlideShow";
import {   CardContent, Typography, Button, Grid } from "@mui/material";


import img1 from "./../../assets/img/banner1.png";
import img2 from "./../../assets/img/banner2.png";
import img3 from "./../../assets/img/banner3.png";
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Tarjeta,CardActionArea,CardMedia, CardActions} from "../../Components/Cards/Card";
import "../../index.css";

const HomePage =() =>{


    return(
        
        <main>
            
            {/* SLIDER INICIO */}
            <SlideShow autoplay={false}>
                <Slide>
                    <a href="#">
                        <img src={img1} />
                    </a>
                <TextoSlide  colortexto="#fff">
                    <p>Matriculate YA!</p>
                </TextoSlide>
                </Slide>

                <Slide>
                    <a href="#">
                        <img src={img2} />
                    </a>
                <TextoSlide colortexto="#fff">
                    <p>Contactanos</p>
                </TextoSlide>
                </Slide>

                <Slide>
                    <a href="#">
                        <img src={img3} />
                    </a>
                    <TextoSlide colortexto="#fff">
                        <p>Nuestro Colegio</p>
                    </TextoSlide>
                </Slide>
  
            </SlideShow>
             {/* SLIDER FIN */}

         {/* TARJETAS PRINCIPALES INICIO */}
            <Tarjeta>
                <CardActionArea>
                
                <CardMedia 
                component="img"
                image="/src/assets/img/docentes.jpg" alt= "image" />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Reseña Historica
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    El Colegio Lancaster es una institución educativa con una rica historia que ha dejado una marca duradera en la comunidad educativa. Fundado en [1980], el colegio ha sido un pilar en la educación de la región durante décadas...
                    </Typography>
                </CardContent> 
            </CardActionArea>
    
            <CardActions>
                
                    <Button href="#" size="small" startIcon={<ShareIcon/>}>Compartir</Button>
                    <Button href="#" size="small" startIcon={<VisibilityIcon/>}>Ver Más</Button>
               
        </CardActions>
        </Tarjeta>
        {/* TARJETAS PRINCIPALES FIN */}

        {/* NUESTRO PROGRAMA INICIO */}
            <Typography 
            variant="h4"
            mt={4}
            align="center"
            color="primary" 
            > Nuestros Programas
            </Typography>


        <Grid 
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            
            >
                {/* TARJETA 1 INICIO */}
                <Grid item>
                <Tarjeta>
                    <CardActionArea>
                    
                    <CardMedia 
                    component="img"
                    image="/src/assets/img/Personas.jpg" alt= "deportes" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Estudios Personalizados
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Creemos en la importancia de brindar una educación inclusiva y personalizada para estudiantes con
                        discapacidades y necesidades especiales...
                        </Typography>
                    </CardContent> 
                </CardActionArea>
        
                <CardActions>
                    <Button href="#" size="small" startIcon={<ShareIcon/>}>Compartir</Button>
                    <Button href="#" size="small" startIcon={<VisibilityIcon/>}>Ver Más</Button>
            </CardActions>
            </Tarjeta>
            </Grid>
            {/* TARJETA 1 FIN */}

            {/* TARJETA 2 INICIO */}
            <Grid item>
            <Tarjeta>
                    <CardActionArea>
                    
                    <CardMedia 
                    component="img"
                    image="/src/assets/img/deportes.png" alt= "image" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Disciplinas Deportivas
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Sumérgete en el mundo de las disciplinas deportivas en nuestro colegio. Descubre el equilibrio perfecto entre el
                        rendimiento académico y el desarrollo físico...
                        </Typography>
                    </CardContent> 
                </CardActionArea>
        
                <CardActions>
                    <Button href="#" size="small" startIcon={<ShareIcon/>}>Compartir</Button>
                    <Button href="#" size="small" startIcon={<VisibilityIcon/>}>Ver Más</Button>
            </CardActions>
            </Tarjeta>
            </Grid>
            {/* TARJETA 2 FIN */}

            {/* TARJETA 3 INICIO */}
            <Grid item>
            <Tarjeta>
                    <CardActionArea>
                    
                    <CardMedia 
                    component="img"
                    image="/src/assets/img/grados.jpg" alt= "image" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Convenios
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Abre las puertas hacia un futuro brillante en nuestro colegio. Más allá de una educación de calidad, ofrecemos convenios con prestigiosas universidades después de la graduación...
                        </Typography>
                    </CardContent> 
                </CardActionArea>
        
                <CardActions>
                    <Button href="#" size="small" startIcon={<ShareIcon/>}>Compartir</Button>
                    <Button href="#" size="small" startIcon={<VisibilityIcon/>}>Ver Más</Button>
            </CardActions>
            </Tarjeta>
            </Grid>
            {/* TARJETA 3 FIN */}
        </Grid>
        {/* NUESTRO PROGRAMA FIN */}
        
    </main> 
     
     
    )
}


export default HomePage
