import http from '../../Services/httpServices'
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import './discussion.css'
const Discussion = () => {
    const [comments, setComments] = useState(null)
    const [selectedId, setSelectedId] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            try {
                const { data } = await http.get(
                    'http://localhost:3001/comments'
                );
                setComments(data)

            } catch (error) {
                // console.log(error)
                setError(true)
            }
        }

        getComments();
    }, [])

    // const postCommentHandler = (comment) => {
    //     axios
    //         .post('http://localhost:3001/comments', {
    //             ...comment,
    //             postId: 10,
    //         })
    //         .then((res) => axios.get("http://localhost:3001/comments"))
    //         .then((res) => setComments(res.data))
    //         .catch()
    // }







    const selectCommentHandler = (id) => {
        setSelectedId(id)
    }

    const renderedComment = () => {
        let renderedValue = <p>loading ...</p>;
        if (error) renderedValue = <p>fetching data ....</p>
        if (comments && !error) {
            renderedValue = comments.map((c) => (
                <Comment key={c.id}
                    name={c.name}
                    email={c.email}
                    onclick={() => selectCommentHandler(c.id)}
                />
            ))
        }
        return renderedValue;
    }

    return (
        <main>
            <section >
                {renderedComment()}
            </section>
            <section>
                <FullComment commentId={selectedId} setComments={setComments} setSelectedId={setSelectedId} />
            </section>
            <section>
                <NewComment setComments={setComments} />
            </section>
        </main>
    );
}

export default Discussion;