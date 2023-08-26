import logo from './logo.svg';
import './App.css';
import terms from "./components/terms"
import Login from "./components/login"
import Contact from "./components/contact"
import Home from "./components/home"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Routes>
        <Route
          path="/"
          element={<Home /> }
        />
        <Route path="/login" element={<Login  />} />
      </Routes>
    </div>
  );
}

export default App;
