import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import '../Home.css'

class Home extends React.Component {


    render(){
        return(
            <div name="home">
                <Container textAlign="justified" padding="25px" top-margin='100px'>
                    <Card.Group centered >
                        <Card raised={true} centered={true}>
                            <Button>Yahoo Sign In</Button>
                        </Card>
                        <Card raised={true} centered={true}>
                            <Button>ESPN Sign In</Button>
                        </Card>
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

export default Home;