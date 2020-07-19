import React from 'react'
import attendance from "../gifs/attendance.gif"
import leaveGroup from "../gifs/leaveGroup.gif"
import notes from '../gifs/notes.gif'
import planner from '../gifs/planner.gif'
import todo from '../gifs/todo.gif'
import deleteAssignment from '../gifs/deleteAssignment.gif'
import fee from '../gifs/fee.gif'
import feed from '../gifs/feed.gif'


const Attendance=()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Check your Attendance</p>

        <img src={attendance} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
     

        <img src={attendance} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
   
}

export const LeaveGroup=()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Leave a Group</p>

        <img src={leaveGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
     

        <img src={leaveGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
   
}

export const Notes  = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}> View Notes</p>

        <img src={notes} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
       

        <img src={notes} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}

export const Planner = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Use the planner</p>

        <img src={planner} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
       

        <img src={planner} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}

export const Todo = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Using the todo </p>

        <img src={todo} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
       

        <img src={todo} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}

export const Feed = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Using the Feed Page</p>

        <img src={feed} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
        

        <img src={feed} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}

export const Fee = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Check fee Payment</p>

        <img src={fee} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
   

        <img src={fee} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}


export const DeleteAssignment = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Delete an Assignment</p>

        <img src={deleteAssignment} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container">
        

        <img src={deleteAssignment} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px"}}/>
     
       </div>
       </div>

       
        </div>
    )
}

export default Attendance
