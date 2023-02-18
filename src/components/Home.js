import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container className="md">
            <Container className='col-10'>
                <h1>Welcome to VoteTracker!</h1>
                <p>Data provided by the <a href="https://projects.propublica.org/api-docs/congress-api/">Pro Publica Congress API</a></p>
            </Container>
        </Container>
    )
}

export default Home;
