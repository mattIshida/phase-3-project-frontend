import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container className="md">
            <Container className='col-10'>
                <p>VoteTracker created by <a href="https://github.com/mattIshida">Matt Ishida</a></p>
            </Container>
        </Container>
    )
}

export default Home;