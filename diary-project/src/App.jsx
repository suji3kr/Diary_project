import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary/3"}>Diary</Link>
          <Link to={"/edit"}>Edit</Link>
        </div>
      </Router>
    </div>
  );  
}

export default App