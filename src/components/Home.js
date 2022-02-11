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
      <h1>Coming Soon...</h1>
      {/* {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      ) : ( */}
        <div className='cardGrid'>
          {data.map((post) => (
            <Link to={`/blog/${post._id}`}>
              <div key={post._id} className='blogCard'>
                <img src={`../../images/${post.img}`} alt={post.title}></img>
                <h2>{post.title}</h2>
                <p>published by {post.author}</p>
              </div>
            </Link>
          ))}
        </div>
      {/* )} */}
    </div>
  )
}

export default Home
