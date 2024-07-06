
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Navbar from './components/Layout/Navbar'
import Register from './components/Layout/Register';
import Show from './components/Pages/Show.jsx';
import Update from './components/Pages/Update.jsx';
import Delete from './components/Pages/Delete'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/name/:nameID' element={<Update/>}></Route>
        <Route path='/delete/name/:nameID' element={<Delete/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
