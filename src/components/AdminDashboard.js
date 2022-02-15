import React from 'react'
import Button from '@mui/material/Button';
import logo from '../../src/logo.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const token = localStorage.getItem('SavedToken')
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

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
        {/* <Button style={{ backgroundColor: 'green' }} onClick={() => window.location.replace('/blog-client/admin/create')} color="inherit">Create new blog</Button> */}
        <Button style={{ backgroundColor: 'green' }} color="inherit">Create new blog</Button>
      </Link>
      <hr />
      <p>Current blogs</p>
      <hr />
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      ) : (
        <div className='cardGrid'>
          {data.map((post) => (
            <Link to={`/blog-client/admin/edit/${post._id}`}>
              <div key={post._id} className='blogCard'>
                <img src={`../../images/${post.img}`} alt={post.title}></img>
                <h2>{post.title}</h2>
                <p>Posted: {post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
