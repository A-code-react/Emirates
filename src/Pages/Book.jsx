import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import Taj from '../Images/Taj.jpeg'
import"../Styles/BookStyles.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';





const DeparcherAirPort = [
  { title: 'Mumbai', year: 1994 },
  { title: 'Masco', year: 1972 },
  { title: 'Landon', year: 1974 },
  { title: 'Japan', year: 2008 },
  { title: 'Tokyo', year: 1957 },
  { title: "Abu Dhabi", year: 1993 },
  { title: 'Beijing', year: 1994 },
  {
    title: 'Maxico',
    year: 2003,
  }]
const Book = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Layout spacing={4}>
     <div className="home" style={{backgroundImage:`url(${Taj})`}}>
      <div className="headerContainer">
        <h1>FLIGHTS FROM INDIA(IN)</h1>
        <p>We offer flights to most exciting cities, connecting you to your ideal destination for work or leisure.</p>
        <Link to='Manage'>
        <button className='button1'>
       Search Flights
        </button>
        </Link>
   
      </div>
     </div>
     <Divider/>
    <div className='field'>
    <Grid container spacing={1} sx={{width: 200}}>
    <Box className ='airport'>
     <Stack spacing={2} sx={{ width: 400 }}>
    
     <Autocomplete
       
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={DeparcherAirPort.map((option) => option.title)}
        renderInput={(params) => (
          
          <TextField
            {...params}
            label="DeparcherAirPort"
            placeholder="Please enter your deparcher airport"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        
      />
 <Divider/>
    </Stack>
    <Stack spacing={2} sx={{ width:400}}>
   
   <Autocomplete

      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={DeparcherAirPort.map((option) => option.title)}
      renderInput={(params) => (
        
        <TextField
          {...params}
          label="ArrivelAirPort"
          placeholder="Please enter an arrival airport"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      
    />

  </Stack>
 <br />
 
 <LocalizationProvider

      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Departing', end: 'returning' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps}   className='date' />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps}   className='date'/>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  
    </Box>
  
  </Grid>
  </div >
  <Divider/>
 <div >
  <div>
 
   
    <Box
    display="flex" justifyContent="center" alignItems="center"
      sx={{
        textAlign:'center',
        height: 250,
        backgroundColor: 'white',
        overflow:'scroll',
       
        '&:hover': {
          backgroundColor: 'whitesmoke',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h2>   Emirates flights from India</h2><br />
      <Divider/>
 <p>
 
Find all flights departing from India on emirates.com. Searching for flights from India to any destination is easy. Browse the list of cities we fly to from India and select your chosen destination city to see our flight schedules and destination guides.

Book flights from India to your destination quickly and securely on emirates.com. Our Best Price Guarantee means you can rest assured that you’ll get the best fare for your flights when you see the symbol.

Our destination guides offer expert tips from our cabin crew on what to do and the best places to visit – as well as recommendations for the best hotels, activities and eateries in town.

Book your flights from India today and look forward to gourmet dining, award-winning inflight entertainment and exceptional service – no matter which cabin class you’re travelling in.

We look forward to welcoming you on board.
    </p>
    </Box>
   
  </div>
  <br />
  <Divider/>
  <div>
    <Grid container>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/AMD/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/BLR/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/MAA/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/DEL/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/HYD/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/COK/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/CCU/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/BOM/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/TRV/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/DEL/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.ekstatic.net/shared/images/destination/v1/airports/AMD/624x300.jpg"
          alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
       width='259'
       image="https://c.ekstatic.net/shared/images/destination/v1/airports/CCU/624x300.jpg"
       alt="Ahamdabad city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmedabad
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Flights from India

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Flights from Ahmedabad
        </Button>
      </CardActions>
    </Card>
    </Grid>
  </div>
 </div>
    </Layout>
  );
}

export default Book;
