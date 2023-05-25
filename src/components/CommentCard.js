import React, { useState } from "react";


function CommentCard({ user, comment, onDelete }) {
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
            <h4>{user}</h4>
            <p>{comment}</p>
            <div>
                <button onClick={handleNewUpvote} >{liveUpvotes} 👍</button>
                <button onClick={handleNewDownvote} >{liveDownvotes} 👎</button>
            </div>
            <button onClick={()=>onDelete(comment)} >Delete</button>
        </div>
    )
}
export default CommentCard