/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import logo from '../../src/logo.svg';
import { useParams } from 'react-router-dom';
import './styles/blog.css'

function Blog() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [content, setContent] = React.useState('');
  const [commented, setCommented] = React.useState('');
  var moment = require('moment');

  let { id } = useParams();

  //get blog data from blog-api
  React.useEffect(() => {
    const url = `https://limitless-peak-99704.herokuapp.com/blog/${id}`;
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => {
        setData(json['result']);
        setCommented('');
      })
      .catch((error) => console.log(error));
  }, [commented]);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postComment = { username, content };
    const url = `https://limitless-peak-99704.herokuapp.com/blog/${id}`;
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postComment)
    }).then(() => {
      console.log('comment added');
      setUsername('');
      setContent('');
      setCommented('this is set so the page shows a new comment immediately');
    })
  }

  return (
    <div className='container'>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className='App-logo' alt='logo' />
          <p>try refreshing if nothing happens</p>
        </>
      ) : (
        <div key={data._id}>
          <div className='blog-wrapper'>
            <h1 className='blog-title'>{data.title}</h1>
            <p className='blog-content'>{data.content}</p>
            <p>{moment(data.date).format("MMMM Do YYYY")}</p>
          </div>

          <hr/>

          <div className='comments-wrapper'>
            <form onSubmit={handleSubmit}>
              <legend>Add a comment</legend>
              <div className='mui-textfield'>
                <input
                  type='text'
                  required
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mui-textfield'>
                <input
                  type='textArea'
                  placeholder='Comment'
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <button type='submit' className='mui-btn mui-btn--raised'>Submit</button>
            </form>

            <h3>Comments ({data.comments.length})</h3>
            {data.comments.map(comment => (
              <div key={comment._id}>
                <p><b>{comment.username}</b></p>
                <p>{comment.content}</p>
                <i>{moment(comment.date).format("MMM Do YYYY")}</i>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog;
