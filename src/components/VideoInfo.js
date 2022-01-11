import React, { useState }from "react";
import CommentContainer from "./CommentContainer"

function VideoInfo({ dataObj }) {
    const [videoData, setVideoData] = useState(dataObj)
    const [showComments, setShowComments] = useState(true)

    function handleUpvotes() {
        setVideoData({...videoData, upvotes: parseInt(videoData.upvotes) +1})
    }

    function handleDownvotes() {
        setVideoData({...videoData, downvotes: parseInt(videoData.downvotes) +1})
    }

    function toggleComments() {
        setShowComments(!showComments)
    }
    return (
        <div>
            <div className="videoInfo">
                <iframe
                width="919"
                height="525"
                src={dataObj.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={dataObj.title}
                />
                <h1>{dataObj.title}</h1>
                <span>{dataObj.views} views | Uploaded {dataObj.createdAt}</span>
                <br />
                <br />
                <button onClick={handleUpvotes}>{videoData.upvotes} 👍 </button>
                <button onClick={handleDownvotes}>{videoData.downvotes} 👎 </button>
                <br />
                <button onClick={toggleComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            </div>
            <br />
            <hr />
            {showComments ? <CommentContainer comments={dataObj.comments}/> : null}
        </div>
    )
}

export default VideoInfo;