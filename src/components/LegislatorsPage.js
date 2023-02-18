import { useState, useEffect } from 'react'
import LegislatorList from './LegislatorList';

function LegislatorsPage( { legislators, userData, onFollow }) {
    console.log("userData", userData)
    return (
        <div>
            <LegislatorList 
                legislators={legislators} 
                userData={userData}
                onFollow={onFollow}
            />
        </div>
    )
}

export default LegislatorsPage;