import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function IssueListItem({ issue, userData, onFollow }) {
    
    const loaded = Object.keys(userData).length > 0
    const found = loaded ? userData.follows.find((f) => f.followable_type=="Subject" && f.followable_id==issue.id) : undefined
    const followId = found ? found.id : null
    const followed =  !!followId 
    
    return (
        <Card className="issueCard">
            <Card.Body>
                <Card.Title>{issue.name}</Card.Title>
                <Card.Text>{`${issue.bills.length} bill${issue.bills.length==1 ? "" : "s"}`}</Card.Text>
            </Card.Body>
            
            <ul>            
                {/* {issue.bills.map((billObj)=> <li>{billObj.name}<li/> } */}
            </ul>
            <Button variant = {followed ? "primary": "outline-primary"} onClick={()=>{
                onFollow(
                    {
                        follow: !followed,
                        follow_id: followId,
                        followable_type: "Subject",
                        followable_id: issue.id,
                        user_id: userData.id
                    }

                )
            }}>{followed ? "Unfollow" : "Follow"}</Button>
        </Card>
    )
}

export default IssueListItem;