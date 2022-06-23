import './App.css';
import Nav from './components/nav';
import Assignment1 from './components/assignment1/assignment1';
import Assignment2 from './components/assignment2/assignment2';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Assignment3 from './components/assignment3/assignment3';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a1" element={<Assignment1 />} />
          <Route path="a2" element={<Assignment2 />} />
          <Route path="a3" element={<Assignment3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
