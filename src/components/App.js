import React, { useState } from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments";


function App() {
  console.log("Here's your data:", video);
  const [commentsHidden, setCommentsHidden] = useState(false)
  function handleHideComments() {
    setCommentsHidden(!commentsHidden)
  }
  let comments = commentsHidden ? null :  <Comments comments={video.comments} />
  return (
    <div className="App">
      <VideoPlayer url={video.embedUrl}/>
      <VideoDetails 
      title={video.title} 
      views={video.views} 
      createdAt={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      onHideComments={handleHideComments} 
      commentsHidden={commentsHidden} />
      {comments}
    </div>
  );
}
export default App;



/*
App
|_VideoDetails
|  |_VideoInfo
|  |_Buttons
|
|_Comments
.   |_CommentCard
*/




