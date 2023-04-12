import PositionTile from './PositionTile'

function MemberRow({ member, votes, shades, setFilter }){

    const positionTiles = member?.positions?.map((positionObj, i) => {
        return <PositionTile 
                key={positionObj.id} 
                position={positionObj} 
                vote={votes?.at(i)} 
                shade={shades.at(i)} 
                member={member} 
                idx={i}
                setFilter={setFilter}
                />
    })

    return(
        <div className='memberRow'>
            <div className='memberRowLabel'>
                    {`${member.first_name} ${member.last_name} (${member.party})`}
            </div>
            {/* <div className='memberStateLabel'>
                {`${member.state}`}
            </div> */}
            <div className="tileRow">
                {positionTiles}
            </div>
        </div>
    )
}
export default MemberRow