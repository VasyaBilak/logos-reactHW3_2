import { useEffect, useState } from "react";
import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent';

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect( ()=> {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');

            let data = await response.json();
            setPosts(data);
        } catch {}
    }

    const handleShowPosts = (userId) => {
      setSelectedUserId(userId);
    };

    const filteredPosts = posts.filter(post => post.userId === selectedUserId);

  return (
    <div className='app'>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <UsersComponent posts={posts} onShowPostsClick={handleShowPosts}/>
        {selectedUserId && (
        <div>
          <h2>Posts for selected user:</h2>
          {filteredPosts.map(post => 
            <p key={post.id}>{post.body}</p> 
          )}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
