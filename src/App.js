import React from 'react';
import Navbar from './components/Navbar'
import { Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import GroupCreation from './components/Gifhy'
import {GroupDeletion,FeedDiscovery,GroupSharing,RemoveStudent, MarkAttendance,Notes, 
  Events,
  StudentDetails,
  StudentSubmissions,
  FeePayments,
  Fees
} from './components/Gifhy'


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />
    
      <Switch>
      
        <Route path="/createGroup" component={GroupCreation}/>
        <Route path="/deleteGroup" component={GroupDeletion}/>
        <Route path="/feed" component={FeedDiscovery}/>
        <Route path="/shareGroup" component={GroupSharing}/>
        <Route path="/removeStudent" component={RemoveStudent}/>
        <Route path="/markAttendance" component={MarkAttendance}/>
        <Route path="/notes" component={Notes}/>
        <Route path="/events" component={Events}/>
        <Route path="/studentDetails" component={StudentDetails}/>
        <Route path="/studentSubmissions" component={StudentSubmissions}/>
        <Route path="/feePayments" component={FeePayments}/>
        <Route path="/fees" component={Fees}/>
        
      <div className="hide-on-large-only">
        <h4 className="center">How to?</h4>
      <ul className="collection" >
          
          <Link to="/createGroup"><li className="black-text collection-item">Creating a New Group</li></Link>
          <Link to="/deleteGroup"><li className="black-text collection-item">Deleting a Group</li></Link>
          <Link to="/feed"><li className="black-text collection-item">Using the Feed page</li></Link>
          <Link to="/shareGroup"><li className="black-text collection-item">Share your Group</li></Link>
          <Link to="/removeStudent"><li className="black-text collection-item">Remove a Student from a Group</li></Link>
          <Link to="/markAttendance"><li className="black-text collection-item">Mark Attendance of a Group</li></Link>
          <Link to="/notes"><li className="black-text collection-item">Creating and deleting Notes folder</li></Link>
          <Link to="/events"><li className="black-text collection-item">Working with events</li></Link>
          <Link to="/studentDetails"><li className="black-text collection-item">View Student Details</li></Link>
          <Link to="/studentSubmissions"><li className="black-text collection-item">Track Student Submissions</li></Link>
          <Link to="/feePayments"><li className="black-text collection-item">Adding Fee Payment to Groups</li></Link>
          <Link to="/fees"><li className="black-text collection-item">Track Student Fees</li></Link>
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
