import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import LittlePrince from './components/Projects/RayTracing1/LittlePrince'

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/project/little_prince' element={<LittlePrince />}></Route>
      </Routes>
    </>
  )
}

export default App
