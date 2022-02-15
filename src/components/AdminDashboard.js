import React from 'react'
import Button from '@mui/material/Button';
import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const token = localStorage.getItem('SavedToken')
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  var moment = require('moment');

  //get data from blog-api
  React.useEffect(() => {
    console.log(`${token}`);
    const url = `https://limitless-peak-99704.herokuapp.com/admin/`;
    fetch(url, {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: { 'Authorization': `${token}` },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response['results']);
        console.log(typeof (data), data);
      })
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
      <h2>Admin Dashboard</h2>
      <p>You are logged in as an admin.You may create, read, update, and delete blogs.</p>
      <Link to='/blog-client/admin/create'>
        <Button style={{ backgroundColor: 'green', color: 'white' }} >Create new blog</Button>
      </Link>
      <hr />
      <p>Current blogs</p>
      <hr />
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>try refreshing if nothing happens</p>
        </>
      ) : (
        <div className='cardGrid'>
          {data.map((post) => (
            <Link to={`/blog-client/admin/edit/${post._id}`} key={post._id} >
              <div className='blogCard'>
                <img src={post.img} alt={post.title}></img>
                <h2 className='post-title' >{post.title}</h2>
                <p>{moment(post.date).format("MMM Do YYYY")}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
