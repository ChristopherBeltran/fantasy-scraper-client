import React from 'react';
import { Button, Container, Card, Divider, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { myClient } from '../actions/Login'



class DashboardContainer extends React.Component {

   espnLeagueFetch = () => {
        myClient.getLeagueInfo()
        .then(function(result) {
          console.log(result)
        })
      }

    handleClick = () => {
        this.espnLeagueFetch(); 
    }

    render(){
        return(
            <div name="dashboard">
                <p>logged IN !</p>
                <Link to={'/'}>Home</Link>
                <Button onClick={e => this.handleClick()}></Button>
            </div>
        )
    }
}

export default DashboardContainer;
