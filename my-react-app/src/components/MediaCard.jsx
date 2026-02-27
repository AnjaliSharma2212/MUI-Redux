import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {

  return (
    <div className='p-3 m-3 flex flex-wrap justify-center gap-6'>
      {/* // first card */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="data:image/jpeg;base64,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"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small"> <a href="https://en.wikipedia.org/wiki/Lizard">Learn More</a></Button>
        </CardActions>
      </Card>
      {/* second  card*/}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSXPYYd8DTMOmUorKMPmRuWV1KeIzy0buXw&s' title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Peacock
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The peacock, specifically the Indian peafowl (Pavo cristatus), is a large,
            colorful, and widely admired bird, recognized as India's national bird. Only males,
            known for their iridescent blue-green, eye-spotted, and 5-foot-long tail "train,"
            possess this stunning display for mating
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small"> <a href="https://en.wikipedia.org/wiki/Peafowl">Learn More</a></Button>
        </CardActions>
      </Card>
      {/* third */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSXPYYd8DTMOmUorKMPmRuWV1KeIzy0buXw&s' title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Peacock
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The peacock, specifically the Indian peafowl (Pavo cristatus), is a large, colorful, and widely admired bird,
            recognized as India's national bird. Only males, known for
            their iridescent blue-green, eye-spotted, and 5-foot-long tail "train," possess this stunning display for mating
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small"> <a href="https://en.wikipedia.org/wiki/Peafowl">Learn More</a></Button>
        </CardActions>
      </Card>
      {/* fourth */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSXPYYd8DTMOmUorKMPmRuWV1KeIzy0buXw&s' title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Peacock
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The peacock, specifically the Indian peafowl (Pavo cristatus), is a large,
            colorful, and widely admired bird, recognized as India's national bird. Only males,
            known for their iridescent blue-green, eye-spotted, and 5-foot-long tail "train," possess this stunning display for mating

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small"> <a href="https://en.wikipedia.org/wiki/Peafowl">Learn More</a></Button>
        </CardActions>
      </Card>
    </div>

  );
}
