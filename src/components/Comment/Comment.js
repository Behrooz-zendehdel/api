import './Comment.css'
const Comment = ({name,email,onclick}) => {
    return (
        <div className="comment" onClick={onclick}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Comment;