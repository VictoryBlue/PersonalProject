import { useEffect, useState } from 'react';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yoshi');
  // useEffect(,[title])
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};
export default Create;
