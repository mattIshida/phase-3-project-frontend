import PositionTile from './PositionTile'

function MemberRow({ member }){

    const positionTiles = member?.positions?.map((positionObj) => {
        return <PositionTile key={positionObj.id} position={positionObj}/>
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