import { useState, useEffect } from 'react'
import LegislatorList from './LegislatorList';

function UserFollowsLegislators({ userData,  }) {
    
    return (
        <div>
            <LegislatorList userData={ userData }/>
        </div>
    )
}

export default UserFollowsLegislators;