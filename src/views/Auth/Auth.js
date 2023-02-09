import React from 'react'
import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'

import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'



const Auth = ({authRoute}) => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext);

    // navigate
    // const navigate = useNavigate();

    let body;

    if(authLoading) {
        body = (
            <div className='d-flex justify-content-center mt-2'>
               
            </div>
        )
    } else if (isAuthenticated) {
        return <Navigate to='/' />
    } else
    body = (
        <>
        LearnIt
       {authRoute === 'login' && <Login />}
       {authRoute === 'register' && <Register />}
       </>
      )


  return (
        <div>
            {body}
        </div>
            
        
  )
}

export default Auth