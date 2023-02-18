import { useState, useEffect } from 'react'
import BillListItem from './BillListItem'
import Container from 'react-bootstrap/Container'

function BillList( { bills, userData, onFollow }) {

    const billItems = bills.map((bill)=> {
        return <BillListItem key={bill.id} bill={bill} userData={userData} onFollow={onFollow}/>
    })

    return (
        <Container className="d-flex flex-wrap flex-md-row align-items-start">
            {billItems}
        </Container>
        // <div className="d-flex flex-wrap flex-md-row billContainer">
        //     {billItems}
        // </div>
    )
}

export default BillList;