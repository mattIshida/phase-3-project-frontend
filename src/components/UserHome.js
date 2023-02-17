import { useState, useEffect } from 'react'
import LegislatorList from './LegislatorList';
import BillList from './BillList';
import IssueList from './IssueList';
import Container from 'react-bootstrap/Container'

function UserHome({ userData, legislatorsFollowed, billsFollowed, issuesFollowed, onFollow }) {
    console.log('issuesFollowed', issuesFollowed)

    return (
        <Container className="d-flex flex-wrap flex-md-row align-items-start">
            <h3>Legislators</h3>
            <LegislatorList legislators={legislatorsFollowed} userData={userData} onFollow={onFollow} />
            <h3>Issues</h3>
            <IssueList issues={issuesFollowed} userData={userData} onFollow={onFollow} />
            <h3>Bills</h3>
            <BillList bills={billsFollowed} userData={userData} onFollow={onFollow} />
        </Container>
    )
}

export default UserHome;