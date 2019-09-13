import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Card, Divider, Header } from 'semantic-ui-react'
import '../Home.css'
import { connect } from 'react-redux'
import { yahooLogin } from '../actions/Login.js'

class Home extends React.Component {


    handleClick = (e) => {
        e.persist()
        if(e.target.name === 'yahoo'){
            this.props.yahooLogin(this.props.history);
        } else if(e.target.name === 'espn'){
            console.log('espn')
        }
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

export default connect(null, { yahooLogin })(Home);