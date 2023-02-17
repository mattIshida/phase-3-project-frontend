import { useState, useEffect } from 'react'
import LegislatorListItem from './LegislatorListItem'
import Container from 'react-bootstrap/Container'

function LegislatorList( { legislators, userData, onFollow }) {

    const legislatorItems = legislators?.map((leg)=> {
        return <LegislatorListItem 
            key={leg.id} 
            legislator={leg} 
            userData={userData}
            onFollow={onFollow}
        />
    })

    return (
        <Container className="d-flex flex-wrap flex-md-row align-items-start">
            {legislatorItems}
        </Container>
    )
}

export default LegislatorList;