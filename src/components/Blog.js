import React from 'react'
import logo from '../../src/logo.svg';

function Blog() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  //get blog data from blog-api
  React.useEffect(() => {
    const url = "https://limitless-peak-99704.herokuapp.com/blog/61d72fb15412c185dbce6913";
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json['result']))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div className='container'>
      <p>I will be the individual Blog Page with comments and form to POST a new comment</p>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      ) : (
        <>
          <h1>Title {data.title}</h1>
          <p>{data.content}</p>
          <p>published by: {data.author}</p>
          <p>{data.date}</p>
          <hr></hr>
          <form class="mui-form">
            <legend>Add a comment</legend>
            <div class="mui-textfield">
              <input type="text" placeholder="Username" />
            </div>
            <div class="mui-textfield">
              <textarea placeholder="Comment"></textarea>
            </div>
            <button type="submit" class="mui-btn mui-btn--raised">Submit</button>
          </form>
          <h3>Comments({data.comments.length})</h3>
          {data.comments.map(comment => (
            <>
              <p>{comment.content}</p>
              <p>{comment.username}</p>
              <p>{comment.date}</p>
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default Blog
