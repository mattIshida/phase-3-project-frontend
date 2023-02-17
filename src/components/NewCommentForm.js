import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const DEFAULT = {content: ""}

function Home({ onSubmitNew}) {
    const [formData, setFormData] = useState(DEFAULT)

    function updateForm(e){
        setFormData({...formData, content: e.target.value})
    }


    return (
        <Container className="w-75 justify-content-center" border='primary'>

            <Form className='commentForm' onSubmit={(e)=>{
                e.preventDefault()
                if (formData.content.length>0) {
                    onSubmitNew(formData)
                    setFormData(DEFAULT)
                }
            }}>
                <Form.Label>Add a comment!</Form.Label>
                <Form.Control as="textarea" rows="3" value={formData.content} onChange={updateForm}></Form.Control>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default Home;