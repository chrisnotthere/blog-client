import React from 'react'

function Admin() {
  //const [data, setData] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCredentials = { username, password };
    console.log(loginCredentials);
    const url = `https://limitless-peak-99704.herokuapp.com/admin/login`;
    fetch(url, {
      //mode: 'cors',
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials)
    })
      .then((response) => response.json())
      .then((json) => {
        //setData(json);
        console.log('response', json)
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

export default Admin
