import React from 'react';
import { Button, Container, Card, Divider, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class DashboardContainer extends React.Component {



    render(){
        return(
            <div name="dashboard">
                <p>logged IN !</p>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}

export default DashboardContainer;
