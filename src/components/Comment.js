import React from "react";

function Comment({ comment }) {
    return (
        <div className="comment">
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment;