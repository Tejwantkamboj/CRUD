import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read'
import Update from './Components/Update';

function App() {

  return (
    <>
    <div className='container'>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create/>}> </Route>
          <Route exact path="/read" element={<Read/>} />
          <Route exact path="/update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
