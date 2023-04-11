import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Button, Overlay } from 'react-bootstrap';
import { useState, useRef } from 'react'

function PositionTile({ position, vote, shade }){
    
    const positionClass = position.vote_position.replaceAll(' ','')

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
        // <OverlayTrigger trigger='focus' placement='auto'
        //     overlay = {<Popover className='popover-placement-top'>
        //         <Popover.Header>{vote?.votable_id.toUpperCase()}</Popover.Header>
        //         <Popover.Body>
        //             Question: {vote.question} <br/>
        //             Result: {vote?.result}
        //             <Button variant="primary" onClick={() => alert('You clicked the button!')}>
        //   Click me!
        // </Button>
        //         </Popover.Body>
        //     </Popover>}
        //     >
        //     <div className={`shade${shade}`}>
        //         <div 
        //             onMouseEnter={handlePopoverClick} 
        //             onMouseLeave={handlePopoverClose} 
        //             className={`positionTile Fill${positionClass}`}>
        //         </div>
        //     </div>    
            
            
        // </OverlayTrigger>
        //sh={`${String(showPopover)}`}
        <>
        <div className={`shade${shade}`}>
            <div ref={target}
                onMouseEnter={handlePopoverClick} 
                onMouseLeave={handlePopoverClose} 
                className={`positionTile Fill${positionClass}`}>
            </div>
        </div>    


        <Overlay target={target.current} show={showPopover} flip='true' placement="auto" >

        <Popover className='popover-placement-top' onMouseLeave={handlePopoverClose} onMouseEnter={handlePopoverClick}>
            <Popover.Header>{vote?.votable_id.toUpperCase()}</Popover.Header>
            <Popover.Body>
                <strong>{vote.description}</strong> <br/>
                Question: {vote.question} <br/>
                Result: {vote?.result}
                <Button variant="primary" onClick={() => alert('You clicked the button!')}>
      Click me!
    </Button>
            </Popover.Body>
        </Popover>


        {/* {({
        //   placement: _placement,
        //   arrowProps: _arrowProps,
        //   show: _show,
        //   popper: _popper,
        //   hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
            <Popover className='popover-placement-top' onMouseLeave={handlePopoverClose}>
            <Popover.Header>{vote?.votable_id.toUpperCase()}</Popover.Header>
            <Popover.Body>
                Question: {vote.question} <br/>
                Result: {vote?.result}
                <Button variant="primary" onClick={() => alert('You clicked the button!')}>
      Click me!
    </Button>
            </Popover.Body>
        </Popover> 
        )}*/}
      </Overlay>
        
        
    </>
    )
}

export default PositionTile