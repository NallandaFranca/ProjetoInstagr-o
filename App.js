import './App.css';
import './home.css';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom"
import Login from './paginas/Login';
import Home from './paginas/Home';

function App() {
  return (
    
      
        <div className="App">
        
          <BrowserRouter>
            <Routes>     
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </BrowserRouter>

        </div>
  );
}

export default App;
