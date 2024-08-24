import {Outlet, Navigate} from "react-router-dom"

const ProtuctedRoutes =()=>{
 
    const admin = null
    return admin ? <Outlet/> : <Navigate  to="/admin"/>
}

export default ProtuctedRoutes