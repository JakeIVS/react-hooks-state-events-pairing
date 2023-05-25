import React, { useState } from "react";

function CommentCard(props) {
    const [liveUpvotes, setLiveUpvotes] = useState(0)
    const [liveDownvotes, setLiveDownvotes] = useState(0)

    function handleNewUpvote() {
        setLiveUpvotes(liveUpvotes + 1)
    }
    function handleNewDownvote() {
        setLiveDownvotes(liveDownvotes + 1)
    }

    return(
        <div>
            <h4>{props.user}</h4>
            <div>
                <p>{props.comment}</p>
                <button onClick={handleNewUpvote} >{liveUpvotes} 👍</button>
                <button onClick={handleNewDownvote} >{liveDownvotes} 👎</button>
            </div>
        </div>
    )
}

export default CommentCard