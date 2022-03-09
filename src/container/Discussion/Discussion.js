import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import './discussion.css'
const Discussion = () => {
    const [comments, setComments] = useState(null)



    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setComments(response.data.slice(0, 4))
            }).catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <main>
            <section >
                {comments ? comments.map(c => <Comment key={c.id} name={c.name} email={c.email}  />
                ) : (
                    <p>loding ...</p>
                )}
            </section>
            <section>
                <FullComment />
            </section>
            <section>
                <NewComment />
            </section>
        </main>
    );
}

export default Discussion;