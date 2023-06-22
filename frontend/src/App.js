import React from 'react';
import LandingPage from './components/LandingPage';
import Form from './components/PostViewComponents/Form';
import PostView from './components/PostView';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route path='/postview' element={<PostView/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
