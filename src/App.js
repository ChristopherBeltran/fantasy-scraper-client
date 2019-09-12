import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home.js'





class App extends React.Component {

  render(){
    return (
      <div className="App">
          <Switch>
          <Route exact path='/' render={({history})=><Home history={history}/>}/>
          </Switch>
      </div>
    );
  }
}


export default withRouter(App);
