import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  //const token = localStorage.getItem('SavedToken')
  //console.log('token: ', token);
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  //get data from blog-api
  React.useEffect(() => {
    const url = "https://limitless-peak-99704.herokuapp.com/blog";
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      ) : (
        <Grid container spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center">
          {data.map((post) => (
            <div key={post._id}>
              <Grid item xs={11}>
                <Card sx={{ maxWidth: 450 }}>
                  <Link to={`/blog/${post._id}`}>
                      <CardContent className='card'>
                        <CardMedia
                          component="img"
                          height="150"
                          image={`../../images/${post.img}`}
                          alt={post.img}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          {post.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          author {post.author}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {post.date}
                        </Typography>
                      </CardContent>
                  </Link>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Home
