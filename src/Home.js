import {useState} from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState([
   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);// [initialValue ChangeValueFun]
 
 
 //  const handleClickAgain = (name, e) =>{
 //   console.log('hello ' + name , e.target)
 //  }
 return ( 
   <div className="home">
     
     {blogs.map((blog)=>(
       <div className="blog-preview" key={blog.id}>
         <h2 >{blog.title}</h2>
         <p>written by {blog.author}</p>
         <p>{blog.body}</p>
       </div>
     ))}
     {/* Note:将事件作为参数传入 */}
     {/* <button onClick = {(e)=>{
       handleClickAgain('willow',e)
     }}>Click me again</button> */}
   </div>
  );
}

export default Home;
