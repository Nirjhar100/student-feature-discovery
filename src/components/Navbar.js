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

      </div>
     
      </div>
    )
}
export default Navbar