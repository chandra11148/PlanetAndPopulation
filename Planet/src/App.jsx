import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PopulationPage } from './Pages/PopulationPage';
import Home from './Pages/Home';

function App() {
  

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/population' element={<PopulationPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
