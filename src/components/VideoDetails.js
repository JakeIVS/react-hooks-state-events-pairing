import Buttons from "./Buttons";

function VideoDetails({ title, views, createdAt, upvotes, downvotes, onHideComments, commentsHidden }) {
    return (
        <div className="video-details" >
            <h2>{title}</h2>
            <p>{views} Views | Uploaded {createdAt} </p>
            <Buttons upvotes={upvotes} downvotes={downvotes} onHideComments={onHideComments} commentsHidden={commentsHidden} />
        </div>
    )
}

export default VideoDetails