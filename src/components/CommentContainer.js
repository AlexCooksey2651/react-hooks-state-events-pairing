import React from "react";
import Comment from "./Comment"

function CommentContainer({ comments }) {
    const commentArray = comments.map(comment => {
        return (
            <Comment key={comment.id} comment={comment} />
        )
    })
    return (
        <div class="commentContainer">
            <h2>{comments.length} Comments</h2>
            <div className="comments">
                {commentArray}
            </div>
        </div>
    )
}

export default CommentContainer;