import React from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditBlog() {
  const token = localStorage.getItem('SavedToken')
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState('');
  const [img, setImg] = React.useState('');
  const [data, setData] = React.useState('');
  const navigate = useNavigate()
  let { id } = useParams();

  //get blog data from blog-api to display inside input fields
  React.useEffect(() => {
    const url = `https://limitless-peak-99704.herokuapp.com/blog/${id}`;
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => {
        setData(json['result']);
        setTitle(data.title);
        setContent(data.content);
        setImg(data.img);       
      })
      .catch((error) => console.log(error));
  }, [id]);

  //submit request to edit/update the blog
  const handleSubmit = (e) => {
    e.preventDefault();
    const postBlog = { title, content, img };
    const url = `https://limitless-peak-99704.herokuapp.com/admin/edit/${id}`;
    fetch(url, {
      method: 'PUT',
      credentials: 'include',
      headers: { 
        "Content-Type": "application/json", 
        'Authorization': `${token}` 
      },
      body: JSON.stringify(postBlog),
    }).then(() => {
      console.log('Blog updated!!');
      navigate(`/blog/${id}`);
    })
  }

  //submit request to delete blog
  const handleDelete = (e) => {
    console.log('DELETE IT!!!!!!');
    const url = `https://limitless-peak-99704.herokuapp.com/admin/delete/${id}`;
    fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 
        "Content-Type": "application/json", 
        'Authorization': `${token}` 
      }
    }).then(() => {
      console.log('Blog deleted!!');
      navigate(`/admin/dashboard`);
    })
  }

  return (
    <div className="container">
      <h2>Edit a blog!</h2>

      <form onSubmit={handleSubmit}>
        <legend>Make changes to the blog.</legend>
        <div className='mui-textfield'>
          <input
            type='text'
            required
            placeholder='Title'
            defaultValue={data.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mui-textfield'>
          <textarea
            placeholder='Content'
            required
            defaultValue={data.content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='mui-textfield'>
          <input
            type='text'
            placeholder='Image'
            required
            defaultValue={data.img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button type='submit' className='mui-btn mui-btn--raised'>Submit Changes</button>
      </form>
      <button style={{backgroundColor:'crimson'}}type='button' className='mui-btn mui-btn--raised' onClick={handleDelete}>Delete blog!</button>

    </div>
  )
}

export default EditBlog
