import React from 'react';
import { postLogin } from '../actions/Login.js'



class DashboardContainer extends React.Component {

componentDidMount() {
    postLogin()
}

    render(){
        return(
            <div name="dashboard">
                <p>logged IN !</p>
            </div>
        )
    }
}

export default DashboardContainer;
