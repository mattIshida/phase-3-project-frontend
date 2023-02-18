import { useState, useEffect } from 'react'
import CommentItem from './CommentItem';
import Container from 'react-bootstrap/Container'

function CommentList({ comments, onClickDelete, onSubmitEdit, userId }) {

    // const comments = billDetails.comments
    console.log("comments", comments)
    const commentItems = comments.sort((a,b) => a.created_at<b.created_at? 1 : -1).map((comment) => {
        return <CommentItem 
        key={comment.id} 
        comment={comment}
        onClickDelete={onClickDelete} 
        onSubmitEdit={onSubmitEdit}
        userId={userId}
        />
    })

    return (
        <Container className="w-75">
            <h2>Comments</h2>
            {commentItems}
        </Container>
    )
}

export default CommentList;