import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={1}>
         <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/AMD/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Ahmedabad </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

       
        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/BLR/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Bengaluru </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/MAA/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Chennai </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/DEL/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Delhi </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/HYD/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Hyderabad </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/COK/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Kochi </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/CCU/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From kolkata </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/BOM/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Mumbai </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c.ekstatic.net/shared/images/destination/v1/airports/TRV/624x300.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Flights from India
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Flights From Thiruvananthapuram </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

       
      </Grid>
    </Box>
  );
}