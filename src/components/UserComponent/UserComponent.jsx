const UserComponent = (props) => {
    const { user, onShowPostsClick } = props;

        return (
            <div>
                <h1>{user.name}</h1>
                <button onClick={() => onShowPostsClick(user.id)}>show posts</button>  
            </div>
        )
}

export default UserComponent;