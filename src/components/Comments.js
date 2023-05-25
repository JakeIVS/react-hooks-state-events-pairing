import React, { useState } from "react"
import CommentCard from "./CommentCard"


function Comments({ comments }) {
    const [search, setSearch] = useState('')
    const [currentComments, setCurrentComments] = useState(comments)
    function deleteComment(comText){
        setCurrentComments(currentComments.filter(comment=>comment.comment !== comText))
    }
    function onSearchChange(e) {
        setSearch(e.target.value)
    }
    let filteredComments = currentComments.filter(comment=>comment.user.includes(search))
    return(
        <>
            <form >
                <label>Search Comments:  </label>
                <input type='text' onChange={onSearchChange} ></input>
            </form>
            <h3>{filteredComments.length} Comments</h3>
            {filteredComments.map(comment=>(<CommentCard user={comment.user} comment={comment.comment} key={comment.id} onDelete={deleteComment} />))}
        </>
    )
}
export default Comments