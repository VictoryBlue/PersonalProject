import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
  const [name, setName] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  });

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]); // [initialValue ChangeValueFun]

  return (
    <div className="home">
      {isPending && <div>Loading</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'}></BlogList>}
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
