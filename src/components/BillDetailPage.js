import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CommentList from './CommentList';
import NewCommentForm from './NewCommentForm';
import Container from 'react-bootstrap/Container'

const URL = "http://localhost:9292"
const DEFAULT = [{id:0, content: "comments loading", created_at: null}]

function BillDetailPage({ userId, userData }) {

    const params = useParams();
    //console.log(params.id);

    const [billDetails, setBillDetails] = useState([])

    useEffect(()=>{
        console.log('hello from useEffect')
        fetch(`${URL}/bills/${params.id}`)
        .then(res => res.json())
        .then(setBillDetails)
    },[])

    //console.log('billDetails', billDetails)
    

    function handleDelete(comment){
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${URL}/comments/${comment.id}`, config)
        .then(res => res.json)
        .then(()=> {
            const newComments = billDetails.comments.filter((com) => com.id !== comment.id)
            setBillDetails({...billDetails, comments: newComments})  
        })
    }

    function handleSubmitEdit(comment){
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content: comment.content})
        }

        fetch(`${URL}/comments/${comment.id}`, config)
        .then(res => res.json())
        .then((json)=> {
            console.log('patch response', json)
            json.user= {name: userData.name}
            const newComments = billDetails.comments.map((com) => com.id == comment.id ? json : com)
            console.log(newComments)
            setBillDetails({...billDetails, comments: newComments})    
        })
    }

    function handleSubmitNew(comment){
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: comment.content,
                commentable_type: "Bill",
                commentable_id: billDetails.id,
                user_id: userId
            })
        }

        fetch(`${URL}/comments`, config)
        .then(res => res.json())
        .then((json)=> {
            console.log('post response', json)
            json.user= {name: userData.name}
            const newComments = [...billDetails.comments, json]
            console.log(newComments)
            setBillDetails({...billDetails, comments: newComments})    
        })
    }

    return (
        <Container className="md">
            <h2>{billDetails.bill}</h2>
            <h3>{billDetails.title}</h3>
            <Container className="md col-6">
            <p>Summary: {billDetails.summary == [] ? "(no summary provided)" : billDetails.summary}</p>
            </Container>
            <Container className="col-10">
                <NewCommentForm onSubmitNew={handleSubmitNew} />
                <CommentList 
                    comments={billDetails.length==0 ?  DEFAULT : billDetails.comments } 
                    onClickDelete={handleDelete}
                    onSubmitEdit={handleSubmitEdit}
                    userId={userId}
                />
            </Container>
        </Container>
    )
}

export default BillDetailPage;