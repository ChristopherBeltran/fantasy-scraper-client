import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import DashboardContainer from "./components/DashboardContainer.js";





class App extends React.Component {

  render(){
    return (
      <div className="App">
          <Switch>
          <Route exact path='/' render={({history})=><Home history={history}/>}/>
          <Route exact path='/dashboard' render={({history})=><DashboardContainer history={history}/>}/>
          </Switch>
      </div>
    );
  }
}


export default withRouter(App);
