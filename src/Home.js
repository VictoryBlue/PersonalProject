import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // const [blogs, setBlogs] = useState(null); // [initialValue ChangeValueFun]
  let {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'}></BlogList>}
    </div>
  );
};

export default Home;
