
import { Outlet, Navigate } from "react-router-dom";
import { useState, useContext } from "react";


const PrivateRoute = () => {
    let [authUser, setAuthUser] = useState(()=>localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
    return authUser ? <Outlet /> : <Navigate to={'/login'}/>
}

export default PrivateRoute;  