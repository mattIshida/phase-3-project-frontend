import Popover from 'react-bootstrap/Popover';
import { Button, Overlay } from 'react-bootstrap';
import { useState, useRef } from 'react'

function PositionTile({ position, vote, shade, member, idx, setFilter }){
    
    const positionClass = position.vote_position.replaceAll(' ','')
    const partySummary = vote?.summary[member.party]
    const alignmentWithParty = partySummary[position.vote_position]/partySummary.Total
    const alignmentWithChamber = vote?.summary.Total[position.vote_position]/vote.summary.Total.Total
    const [showPopover, setShowPopover] = useState(false);
    const target = useRef(null);

    const handlePopoverClick = () => {
        console.log('handlePopoverClick triggered')
        setShowPopover(true);
    };

    const handlePopoverClose = () => {
        setShowPopover(false);
    };

    return(
        <>
        <div className={`shade${shade}`}>
            <div ref={target}
                onMouseEnter={handlePopoverClick} 
                onMouseLeave={handlePopoverClose} 
                className={`positionTile Fill${positionClass}`} style={{opacity: 1-alignmentWithParty}}>
            </div>
        </div>    
        <Overlay target={target.current} show={showPopover} flip='true' placement="top" >
            <Popover className='popover-placement-top' onMouseLeave={handlePopoverClose} onMouseEnter={handlePopoverClick}>
                <Popover.Header>{member.first_name} {member.last_name}'s {position.vote_position} on {vote?.votable_id.toUpperCase()}</Popover.Header>
                <Popover.Body>
                    {vote.question} <br/>
                    <strong>{vote.description}</strong> <br/>
                    {`${Math.round(alignmentWithParty*100)}%`} aligned with party<br/>
                    {`${Math.round(alignmentWithChamber*100)}%`} aligned with chamber<br/>
                    Result: {vote?.result}<br/>
                    <Button variant="primary" onClick={() => {
                        setFilter({positionFilter: [position.vote_position], partyFilter: [member.party], voteFilter: idx})}}
                    >
                        See similar votes
                    </Button>
                </Popover.Body>
            </Popover>
      </Overlay>
        
        
    </>
    )
}

export default PositionTile