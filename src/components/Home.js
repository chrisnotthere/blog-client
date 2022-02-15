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
      <div className='intro'>
        <h2 className='intro-title'>Chris' Blog.</h2>
        <p className='intro-sub' >Thoughts, ideas, insights, rambles, and that kind of thing.</p>
        <p className='intro-text' >This blog was made using React for the <a href='https://github.com/chrisnotthere/blog-client' target='blank' >frontend</a> and Express on the <a href='https://github.com/chrisnotthere/blog-api' target='blank' >back</a> (API). Read <a href='https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api' target='blank' >here</a> for more info.</p>
        
      </div>

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
                  <h2 className='post-title' >{post.title}</h2>
                  <p>{moment(post.date).format("MMM Do YYYY")}</p>
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
