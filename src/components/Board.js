import { Container } from 'react-bootstrap'
import MemberRow from './MemberRow'

function Board({ members, votes, shades, setFilter }){

    const memberRows = members?.map((member)=>{
        return <MemberRow member={member} key={member.id} votes={votes} shades={shades} setFilter={setFilter}/>
    })

    return(
        <>
            <Container className="Board col-8 my-3">
                {memberRows}
            </Container>
        </>
    )
}
export default Board