import React from 'react';
import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom';
import './styles/home.css'

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  var moment = require('moment');

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
      <h2>Hello and welcome to my blog!</h2>
      <p>Check back later for more blogs.</p>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>try refreshing if nothing happens</p>
        </>
      ) : (
        <div className='cardGrid'>
          {data.map((post) => (
            <Link to={`/blog-client/blog/${post._id}`} key={post._id} >
              <div className='blogCard'>
                <img src={post.img} alt={post.title}></img>
                <div className='card-bottom'>
                  <h2>{post.title}</h2>
                  <p>Posted: {moment(post.date).format("MMM Do YYYY")}</p>
                  <p>Comments: {post.comments.length}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
