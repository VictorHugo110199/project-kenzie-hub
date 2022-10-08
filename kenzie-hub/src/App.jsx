import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [user, setUser] = useState({})



  return (
      <div className='App-header'>
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={ <Login setUser={setUser} /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/home" element={ <Home  user={user} /> } />
        </Routes>
      </div>
  );
}

export default App;
