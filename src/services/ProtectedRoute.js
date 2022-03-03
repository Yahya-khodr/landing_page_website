

import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({auth}) => {

    
    
    return auth ? <Outlet/> : <Navigate to="/" />
  
  

  }
export default ProtectedRoute