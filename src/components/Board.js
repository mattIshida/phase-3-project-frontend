import { Container } from 'react-bootstrap'
import MemberRow from './MemberRow'
import BoardHeader from './BoardHeader'

function Board({ members, votes, shades }){

    const memberRows = members?.map((member)=>{
        return <MemberRow member={member} key={member.id} votes={votes} shades={shades} />
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