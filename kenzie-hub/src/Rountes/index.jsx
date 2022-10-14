import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Rountes ({setUser, user}) {
    return (
        <Routes>
            <Route path="/" element={ <Login setUser={setUser} /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/home" element={ <Home  user={user} /> } />
      </Routes>
    )
}

export default Rountes;