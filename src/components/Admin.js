/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCredentials = { username, password };
    // console.log(loginCredentials);
    const url = `https://limitless-peak-99704.herokuapp.com/admin/login`;
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('response', json)
        if (json.message === 'Auth Passed'){
          //save to token to local storage
          localStorage.setItem("SavedToken", 'Bearer ' + json.token);
          //setResponse(json);
          navigate("/admin/dashboard");
        } 
      })
      .then(() => {
        setUsername('');
        setPassword('');
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <legend>Login to admin account</legend>
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
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='mui-btn mui-btn--raised'>Submit</button>
      </form>
    </div>
  )
}

export default Admin;
