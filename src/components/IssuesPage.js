import { useState, useEffect } from 'react'
import IssueList from './IssueList';

function IssuesPage({ issues, userData, onFollow }) {
    return (
        <div>
            <IssueList issues={issues} userData={userData} onFollow={onFollow}/>
        </div>
    )
}

export default IssuesPage;