import { useState, useEffect } from 'react'
import BillList from './BillList'
import Container from 'react-bootstrap/Container'

function BillsPage({ bills, userData, onFollow }) {
    return (
        <div>
            <BillList 
                bills={bills}
                userData={userData}
                onFollow={onFollow}
            />
        </div>
    )
}

export default BillsPage;