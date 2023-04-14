import { Container } from 'react-bootstrap'
import MemberRow from './MemberRow'

function Board({ members, votes, shades, setFilter, controlOptions }){

    const memberRows = members?.map((member)=>{
        return <MemberRow member={member} key={member.id} votes={votes} shades={shades} setFilter={setFilter} controlOptions={controlOptions}/>
    })

    return(
        <>
            <Container className="Board sm-col-10 md-col-8 col-lg-5 xl-col-4 my-3">
                {memberRows}
            </Container>
        </>
    )
}
export default Board