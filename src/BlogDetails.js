import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const deleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(history.push('/'));
  };
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>error</div>}
      {blog && (
        <article>
          <h2>blog.title</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button
            onClick={() => {
              deleteBlog();
            }}
          >
            delete
          </button>
    </div>
  );
};

export default BlogDetails;
