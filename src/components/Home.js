import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo from '../../src/logo.svg';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  //get blog data from blog-api
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
            <>
              <Grid item xs={3}>

                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea href="/blog">
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="150"
                        image={post.img}
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
                  </CardActionArea>
                </Card>

              </Grid>
            </>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Home
