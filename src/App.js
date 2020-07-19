import React from 'react';
import Navbar from './components/Navbar'
import { Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import Attendance from './components/Gifhy'
import {Fee, Feed, Notes, DeleteAssignment, Todo, Planner, LeaveGroup} from './components/Gifhy'


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />
    
      <Switch>
      
        <Route path="/attendance" component={Attendance}/>
        <Route path="/fees" component={Fee}/>
        <Route path="/feed" component={Feed}/>
        <Route path="/notes" component={Notes}/>
        <Route path="/deleteAssignment" component={DeleteAssignment}/>
        <Route path="/todo" component={Todo}/>

        <Route path="/planner" component={Planner}/>
        <Route path="/leaveGroup" component={LeaveGroup}/>
        
        
      <div className="hide-on-large-only">
        <h4 className="center">How to?</h4>
      <ul className="collection" >
          
          <Link to="/feed"><li className="black-text collection-item">Use the Feed Page</li></Link>
          <Link to="/attendance"><li className="black-text collection-item">Check your attendance</li></Link>
          <Link to="/planner"><li className="black-text collection-item">Use the Planner</li></Link>
          <Link to="/notes"><li className="black-text collection-item">View Notes</li></Link>
          <Link to="/todo"><li className="black-text collection-item">Use the todo</li></Link>
          <Link to="/deleteAssignment"><li className="black-text collection-item">Delete an Assignment</li></Link>
          <Link to="/fees"><li className="black-text collection-item">Check Fee Payment</li></Link>
          <Link to="/leaveGroup"><li className="black-text collection-item">How to leave Group</li></Link>
         
        </ul>
      </div>
       
     
     
      </Switch>
    
  
   

      {/*<div className="main hide-on-med-and-down" style={{marginLeft:"600px",marginTop:"20px"}}>
        <Gifhy/>
      </div>
      <div className="hide-on-large-only">
      <div className="container">
        <Gifhy/>
        </div>  
      </div>
      */}
      </div>
      </Router>
  );
}

export default App;
