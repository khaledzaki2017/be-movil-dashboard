import React from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import MenuComponent from './components/menu';
import Configration from './components/configrations'
import { Router, Route, Switch } from "react-router-dom";
import history from './config/history'
import { connect } from "react-redux";
import Plan from './components/plan';
import Edit from './components/edit'
import AddNew from './components/newAdd'
import Install from './components/install'
function App ({currentUser}) {
  const tk=localStorage.getItem('tk')
  return (
    <Router history={history}>
       {/* <MenuComponent/> */}
       <Switch>
         
          <div>
             <Route  path="/" exact component={MenuComponent} />
             <Route  path="/edit" exact component={Edit} />
             <Route  path="/new-add" exact component={AddNew} />
             <Route  path="/install" exact component={Install} />
             <Route  path="/plan" exact component={Plan} />

           </div>
          
         
          </Switch>
    </Router>

  )
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps,null) (App);