import { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


function BillListItem({ bill, userData, onFollow }) {
    const match = useRouteMatch()

    const tagItems = bill.subjects.length == 0 ? <p>{`(No issues tagged)`}</p> : bill.subjects.map((subj) => {
        return <Button key={subj.id} className="tagLink" variant="link" as={Link} to={`/issues/${subj.id}`}>{subj.name}</Button>
    })

    const loaded = Object.keys(userData).length > 0
    const found = loaded ? userData.follows.find((f) => f.followable_type=="Bill" && f.followable_id==bill.id) : undefined
    const followId = found ? found.id : null
    const followed = !!followId 

    return (
        <Card className = "p-10 billCard">
            <Card.Header>{`${bill.bill}`}</Card.Header>
            <Card.Body>
                <Card.Title>{`${bill.title}`}</Card.Title>
            <Card.Text>{`${bill.summary}`}</Card.Text>
                {tagItems}
                
            </Card.Body>
            <ButtonGroup className='detailsButton'>
                    <Button as={Link} to={`/bills/${bill.id}`}>See details</Button>
            </ButtonGroup>
            <Button variant = {followed ? "primary": "outline-primary"} onClick={()=>{
                onFollow(
                    {
                        follow: !followed,
                        follow_id: followId,
                        followable_type: "Bill",
                        followable_id: bill.id,
                        user_id: userData.id
                    }

                )
            }}>{followed ? "Unfollow" : "Follow"}</Button>
        </Card>
    )
}

export default BillListItem;