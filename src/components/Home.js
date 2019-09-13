import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Card, Divider, Header } from 'semantic-ui-react'
import '../Home.css'

class Home extends React.Component {


    handleClick = (e) => {
        e.persist()
        console.log(e.target.name)
    }


    render(){
        return(
            <div name="home">
                <Header as='h1' textAlign="center">Sign In To Your Fantasy Football Provider</Header>
                <Divider vertical></Divider>

                <Container textAlign="justified" padding="25px" top-margin='100px'>
                    <Card.Group centered >
                        <Card raised={true} centered={true}>
                            <Button onClick={e => this.handleClick(e)} name="yahoo">Yahoo Sign In</Button>
                        </Card>
                        <Card raised={true} centered={true}>
                            <Button name="yahoo">ESPN Sign In</Button>
                        </Card>
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

export default Home;