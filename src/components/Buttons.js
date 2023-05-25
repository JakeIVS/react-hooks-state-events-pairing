import React, { useState } from "react";

function Buttons({ upvotes, downvotes, onHideComments, commentsHidden }) {
    const [liveUpvotes, setLiveUpvotes] = useState(upvotes)
    const [liveDownvotes, setLiveDownvotes] = useState(downvotes)

    function handleNewUpvote() {
        setLiveUpvotes(liveUpvotes + 1)
    }
    function handleNewDownvote() {
        setLiveDownvotes(liveDownvotes + 1)
    }

    let commentButton = (commentsHidden) ? 'Show Comments' : 'Hide Comments'

    return(
        <div className="buttons">
            <div className="Votes">
                <button onClick={handleNewUpvote} >{liveUpvotes} 👍</button>
                <button onClick={handleNewDownvote} >{liveDownvotes} 👎</button>
            </div>
            <button onClick={onHideComments} >{commentButton}</button>
        </div>
    )
}

export default Buttons