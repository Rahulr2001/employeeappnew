import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Careers from './Pages/Careers'
import Empeditttt from './Pages/empedit' 
import Createemp from './Pages/Createemp'
import Leaveform from './Pages/leaveform'
import Leavehistory from './Pages/leavehistory'
import Sidenavmenubar from './Pages/Component/Sidenavmenubar'
import { BrowserRouter as Router, Link, Routes, Route }  from 'react-router-dom'




function App() {
  return (
    <div>
      <Sidenavmenubar />
      
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="employee"  element={<About/>}>
          <Route index element={<Empeditttt/>}/>
          <Route path="empedit" element={<Empeditttt/>}/>
          <Route path="create-employee" element={<Createemp/>}/>
          <Route path="request-leave" element={<Leaveform/>}/>
          <Route path="leave-history" element={<Leavehistory/>}/>
          <Route element={<Empeditttt/>}/>
        </Route>
        <Route path="careers"  element={<Careers/>} />
        <Route element = {<Home/>}/>
      </Routes>
      
    </div>
  )
}
//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
export default App