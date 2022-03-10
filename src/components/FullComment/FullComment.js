import http from '../../Services/httpServices'
import { useEffect, useState } from 'react';
import './FullComment.css'
import { deleteComment } from '../../Services/deleteCommentSrevice';
import { getAllComments } from '../../Services/getAllCommentsServices';
import { getOneComment } from '../../Services/getOneCommentServices';
const FullComment = ({ commentId, setComments, setSelectedId }) => {
    const [comment, setComment] = useState(null)



    useEffect(() => {
        if (commentId) {
            getOneComment(commentId)
                .then((res) => setComment(res.data))
                .catch();
        }
    }, [commentId]);


    // const deleteHandler = () => {
    //     axios
    //         .delete(`/comments/${commentId}`)
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    // }
    const deleteHandler = async () => {
        try {
            await deleteComment(commentId)
            const { data } = await getAllComments();
            setComments(data)
            setSelectedId(null)
            setComment(null)
        } catch (error) {

        }
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