import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"

// components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path= "/" components={Home} />
          <Route exact path="/signup" components={Signup} />
          <Route exact path="/login" components={Login} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
