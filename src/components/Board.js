import MemberRow from './MemberRow'

function Board({ members, votes, shades }){

    const memberRows = members?.map((member)=>{
        return <MemberRow member={member} key={member.id} votes={votes} shades={shades} />
    })

    return(
        <>
            {memberRows}
        </>
    )
}
export default Board