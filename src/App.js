
import './App.css';

import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Route, Routes } from 'react-router-dom';

 const App =()=> {
  
    return (
      <div>
       <NavBar/>
      
       <Routes>
         <Route exact path="/" element={ <News category="general" key="/"/>} />
         <Route exact path="/business" element={ <News category="business" key="business"/>} />
         <Route exact path="/entertainment" element={ <News category="entertainment" key="entertainment"/>} />
         <Route exact path="/general" element={ <News category="general" key="general"/>} />
         <Route exact path="/health" element={ <News category="health"/>}  key="health"/>
         <Route exact path="/science" element={ <News category="science"/>}  key="science"/>
         <Route exact path="/sport" element={ <News category="sport"/>}  key="sport"/>
         <Route exact path="/technology" element={ <News category="technology" key="technology"/>} />
       </Routes>
       
      </div>
    )
  
}
export default App;
