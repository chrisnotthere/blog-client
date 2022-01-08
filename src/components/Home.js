import React from 'react'

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = "https://limitless-peak-99704.herokuapp.com/blog";
    fetch(url,{mode: 'cors'})
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
    <div>
      <p>I am the home component, hello</p>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((post) => (
          <>
            <p>
              Title: {post.title}
            </p>
            <p>
              {post.content}
            </p>
            <p>
              published by:{post.author.firstname} {post.author.lastname}
            </p>
          </>
        ))
      )}

    </div>
  )
}

export default Home
