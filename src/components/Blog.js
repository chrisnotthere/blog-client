import React from 'react'
import logo from '../../src/logo.svg';
import { useParams } from "react-router-dom";

function Blog() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  let { id } = useParams();

  //get blog data from blog-api
  React.useEffect(() => {
    const url = `https://limitless-peak-99704.herokuapp.com/blog/${id}`;
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json['result']))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className='container'>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      ) : (
        <div key={data._id}>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <p>by: {data.author}</p>
          <p>{data.date}</p>
          <hr></hr>
          <form className="mui-form">
            <legend>Add a comment</legend>
            <div className="mui-textfield">
              <input type="text" placeholder="Username" />
            </div>
            <div className="mui-textfield">
              <textarea placeholder="Comment"></textarea>
            </div>
            <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
          </form>
          <h3>Comments({data.comments.length})</h3>
          {data.comments.map(comment => (
            <>
              <p>{comment.content}</p>
              <p>{comment.username}</p>
              <p>{comment.date}</p>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Blog;
