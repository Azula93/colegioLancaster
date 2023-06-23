import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { white } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const {  ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, mt:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            <img src="/src/assets/react.svg" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Quienes Somos"
        subheader="Mayo 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="/src/assets/img/Personas.jpg"
        alt="Quienes Somos"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregrar a Favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver más"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Dolores temporibus optio tempora dolorem, fuga, 
            iure debitis consectetur sapiente accusantium dicta nemo autem aut tenetur ipsa voluptas. 
            Fugit aut consequuntur beatae.
          </Typography>
          <Typography paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Dolores temporibus optio tempora dolorem, fuga, 
            iure debitis consectetur sapiente accusantium dicta nemo autem aut tenetur ipsa voluptas. 
            Fugit aut consequuntur beatae.
          </Typography>
          <Typography paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Dolores temporibus optio tempora dolorem, fuga, 
            iure debitis consectetur sapiente accusantium dicta nemo autem aut tenetur ipsa voluptas. 
            Fugit aut consequuntur beatae.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

