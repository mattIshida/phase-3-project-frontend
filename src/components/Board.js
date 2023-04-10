import MemberRow from './MemberRow'

function Board({ members }){

    const memberRows = members?.map((member)=>{
        return <MemberRow member={member} key={member.id} />
    })

    return(
        <>
            {memberRows}
        </>
    )
}
export default Board