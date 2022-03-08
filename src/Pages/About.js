import React from 'react';
import './Pages.css'; 
import {Outlet, Link} from 'react-router-dom';
import './Component/Sidenavmenubar.css'

function About() {
    return (
    <div>
        <div className = 'editemp'>
        <div className='mainfont' >
            <h1>Manage Your Employee</h1>
        </div>
        <div className='navbutton'>
                   
            <Link to="/employee/empedit" className='searchbutton'> All Employee </Link> 
            <Link to="/employee/request-leave" className='searchbutton'>Request Leave</Link>
            <Link to="/employee/leave-history" className='searchbutton'>Leave History</Link>       
            <Link  to="/employee/create-employee" className='createbutton' > Join Now </Link>
             

            
        
        </div>
        <div className='navline'/>
        
        <Outlet/>
        </div>
        
      </div>
      
    );
}

export default About