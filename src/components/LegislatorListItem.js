import { useState, useEffect } from 'react'
import { FaRepublican, FaDemocrat, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function LegislatorListItem({ legislator, userData, onFollow }) {
    
    const loaded = Object.keys(userData).length > 0
    const found = loaded ? userData.follows.find((f) => f.followable_type=="Legislator" && f.followable_id==legislator.id) : undefined
    const followId = found ? found.id : null
    const followed = !!followId 

    const icons = {D: <FaDemocrat style={{color: 'blue', fontSize: '24pt'}} />, R: <FaRepublican style={{color: 'red', fontSize: '24pt'}} />}

    return (
        <Card className='legislatorCard'>
            
            <Card.Header>{icons[legislator.party]}</Card.Header>
            <Card.Body>
                <Card.Title>{`${legislator.short_title} ${legislator.first_name} ${legislator.last_name}`}</Card.Title>
                <Card.Text>{`${legislator.party}-${legislator.state}`}</Card.Text>
                <Card.Text><a href={legislator.url}>Official website</a></Card.Text>
                {/* <Card.Text>{`${legislator?.summary_stats?.follower_count} followers`}</Card.Text> */}
                {legislator.facebook_account ? <a href={legislator.facebook_account} ><FaFacebook /></a> : null}
                {legislator.twitter_account ? <a href={legislator.twitter_account} ><FaTwitter /></a> : null}
                {legislator?.youtube_account && legislator.youtube_account?.length>0 ? <a href={legislator.youtube_account} ><FaYoutube /></a> : null}

            </Card.Body>
            <Button variant = {followed ? "primary": "outline-primary"} onClick={()=>{
                onFollow(
                    {
                        follow: !followed,
                        follow_id: followId,
                        followable_type: "Legislator",
                        followable_id: legislator.id,
                        user_id: userData.id
                    }

                )
            }}>{followed ? "Unfollow" : "Follow"}</Button>
        </Card>
    )
}

export default LegislatorListItem;