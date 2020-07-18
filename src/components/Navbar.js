import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';


const Navbar = ()=>{
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
}, [])
   
    return(
        <div className="hide-on-med-and-down">
        <div class="navbar-fixed" >
     
        <nav className="white z-depth-0 navbar-fixed" style={{borderBottom:"1px grey solid"}} >
       
       
       
        
          <span className="brand-logo purple-text left" style={{}}>
            Teachzy
          </span>
          <span className="teal-text"></span>
          

        </nav>
       
    
      <div className="hide-on-med-and-down " style={{height:"100%",width:"300px",position:"fixed",borderRight:"1px grey solid", marginTop:"50px"}}>
           
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

      </div>
     
      </div>
    )
}
export default Navbar