import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Rountes () {
    return (
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    )
}

export default Rountes;