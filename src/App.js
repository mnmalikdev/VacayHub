import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import CreateTrip from "./components/CreateTrip";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Tours from "./components/Tours";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<CreateTrip />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
