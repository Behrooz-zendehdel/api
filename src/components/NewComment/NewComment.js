import { useState } from 'react';
import './newComment.css'
import { addNewComment } from '../../Services/addNewComment'
import { getAllComments } from '../../Services/getAllCommentsServices';
const NewComment = ({ setComments }) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        content: "",
    })
    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    const postCommentHandler = async () => {
        try {
            await addNewComment({
                ...comment,
                postId: 10,
            })

            const { data } = await getAllComments();
            setComments(data)
        } catch (error) {

        }

    }




    return (
        <div className="newComment">
            <h2>add new comment</h2>
            <div>
                <label>name </label>
                <input type="text" onChange={changeHandler} name="name" />
            </div>
            <div>
                <label>email </label>
                <input type="email" onChange={changeHandler} name="email" />
            </div>
            <div>
                <label>content </label>
                <textarea type="textarea" onChange={changeHandler} name="content" />
            </div>
            <button onClick={postCommentHandler} className='add'>add new comment</button>
        </div>

    );
}

export default NewComment;