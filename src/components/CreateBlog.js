import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const token = localStorage.getItem('SavedToken')
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const postBlog = { title, content, image };
    const url = 'https://limitless-peak-99704.herokuapp.com/admin/create/';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 
        "Content-Type": "application/json", 
        'Authorization': `${token}` 
      },
      body: JSON.stringify(postBlog),

    }).then(() => {

      console.log('Blog created!!');
      navigate("/admin/dashboard");
    })
  }

  return (
    <div className="container">
      <h2>Create a new blog here</h2>

      <form onSubmit={handleSubmit}>
        <legend>Create and publish a new blog!</legend>
        <div className='mui-textfield'>
          <input
            type='text'
            required
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mui-textfield'>
          <textarea
            placeholder='Content'
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='mui-textfield'>
          <input
            type='text'
            placeholder='Image'
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type='submit' className='mui-btn mui-btn--raised'>Submit</button>
      </form>

    </div>
  )
}

export default CreateBlog
