import PositionTile from './PositionTile'

function MemberRow({ member, votes, shades }){

    const positionTiles = member?.positions?.map((positionObj, i) => {
        return <PositionTile key={positionObj.id} position={positionObj} vote={votes?.at(i)} shade={shades.at(i)}/>
    })


    return(
        <div className='memberRow'>
            <div className='memberRowLabel'>
                <div style={{width: '9rem', fontSize: '10pt'}}>
                    {`${member.first_name} ${member.last_name} (${member.party})`}
                </div>
            </div>
            <div className="tileRow">
                {positionTiles}
            </div>
        </div>
    )
}
export default MemberRow