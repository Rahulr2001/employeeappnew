import React from 'react'
import './Sidenavmenubar.css'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {NavLink} from 'react-router-dom'
function Sidenavmenubar() {
    return (
        <div className = 'side-nav'>
            <input type = 'checkbox' id = 'menu' />
            <label className = 'icon' htmlFor = 'menu'>
                <div className = 'menu'>
                    
                </div>
            </label>
            <nav>
                <ul>
                    <NavLink to ="/">
                        <li>
                            <HomeIcon className = 'icons'></HomeIcon>
                            <div className = 'menu-text'>
                                Home
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ="employee" >
                        <li>
                            <PeopleAltIcon className = 'icons'></PeopleAltIcon>
                            <div className = 'menu-text'>
                                Employee
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ="/careers" >
                        <li>
                            <WorkIcon className = 'icons'></WorkIcon>
                            <div className = 'menu-text'>
                                Careers
                            </div>
                        </li>
                    </NavLink>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Sidenavmenubar