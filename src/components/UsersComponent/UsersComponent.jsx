import { useEffect, useState } from 'react';
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = ({ onShowPostsClick }) => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])
  
    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
  
            let data = await response.json();
            setUsers(data);
        } catch {}
    }
    
    return (
        <div style={{width: '45%'}}>           
            {users?.map((user) => <UserComponent key={user.id} user={user} onShowPostsClick={onShowPostsClick} />)}
        </div>
    )
    
}

export default UsersComponent;