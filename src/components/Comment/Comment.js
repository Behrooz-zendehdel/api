import './Comment.css'
const Comment = ({name,email}) => {
    return (
        <div className="comment">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Comment;