import { useState, useEffect } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const URL = "http://localhost:9292"

function CommentItem({ comment, onClickDelete, onSubmitEdit, userId }) {

    const [showForm, toggleShowForm] = useState(false) 
    const [formData, setFormData] = useState({content: comment.content})
    const ownComment = Number(userId) == Number(comment?.user_id)

    function onFormChange(e){
        const newComment = {...comment, content: e.target.value}
        setFormData(newComment)
    }

    function formatDateString(dateStr){
        const date = new Date(dateStr)
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    }

    return (
        <Card className="w-100 commentCard" border={ownComment ? "primary": null}>
            <Card.Header>{comment?.user?.name}</Card.Header>
            <Card.Body>
                {!showForm ? <p>{comment.content}</p> : 
                
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    onSubmitEdit(formData)
                    toggleShowForm(false)
                }}>
                    <input type='text' value={formData.content} onChange={onFormChange}></input>
                    <Button type="submit">Submit</Button>
                    <Button onClick={()=>toggleShowForm(false)}>Cancel</Button>
                </form>

                }
                {ownComment ? <FaEdit onClick={()=>toggleShowForm(true)}/> : null}
                {ownComment ? <FaTrashAlt onClick={() => onClickDelete(comment)}/> : null}
            </Card.Body>
            <Card.Footer className='text-muted'>{`${formatDateString(comment.created_at)} ${comment.updated_at != comment.created_at ? `(Edited at: ${formatDateString(comment.updated_at)})`: ''}`}</Card.Footer>
        </Card>
    )
}

export default CommentItem;