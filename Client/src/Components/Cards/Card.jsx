import { Card, CardActions, CardActionArea,CardMedia } from "@mui/material";


const Tarjeta = ({children}) => {

  

    return (
      <>
              
        <Card sx={{ maxWidth: 345,
         mt:5, 
         transition:"0.2s",
         "&:hover":{
            transform:"scale(1.05)"
         } }}>
          {children}
            {/* <CardActionArea>
              
                 <CardMedia 
                 component="img"
                 image="/src/assets/img/docentes.jpg" alt= "image" />

                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Registrate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Numquam repellat similique earum cupiditate aspernatur autem. 
                    Veniam assumenda qui laudantium mollitia corporis hic distinctio consectetur. 
                    Dolore nostrum id ea cum impedit.
                    </Typography>
                </CardContent>  */}
            {/* </CardActionArea>
       
        <CardActions> */}
        
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
      {/* </CardActions> */} 
            </Card>
    
      </>
    )
  }
  
  export {Tarjeta,CardActionArea,CardMedia, CardActions}