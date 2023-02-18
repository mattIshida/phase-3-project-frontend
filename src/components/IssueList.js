import { useState, useEffect } from 'react'
import IssueListItem from "./IssueListItem"
import Container from 'react-bootstrap/Container'


function IssueList({ issues, userData, onFollow }) {

    const issueListItems = issues?.map((i) => {
        return <IssueListItem 
            key={i.id} 
            issue={i}
            userData={userData}
            onFollow={onFollow}
        />
    }) 

    return (
        <Container className="d-flex flex-wrap flex-md-row align-items-start">
            {issueListItems}
        </Container>
    )
}

export default IssueList;