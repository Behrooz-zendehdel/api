import axios from 'axios';
import { useEffect, useState } from 'react';
import './FullComment.css'
const FullComment = ({ commentId }) => {
    const [comment, setComment] = useState(null)



    useEffect(() => {
        if (commentId) {
            axios
                .get(`http://localhost:3001/comments/${commentId}`)
                .then((res) => setComment(res.data))
                .catch();
        }
    }, [commentId]);
    const deleteHandler = () => {
        axios
            .delete(`http://localhost:3001/comments/${commentId}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    let commentDetail = <p>please select a comment ! </p>;


    if (commentId) commentDetail = <p>loading ... </p>


    if (comment) {
        commentDetail =
            <div className="fullcomment">
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
                <button onClick={deleteHandler} className='delete'>Delete</button>
            </div>
    }
    return commentDetail;
}

export default FullComment;