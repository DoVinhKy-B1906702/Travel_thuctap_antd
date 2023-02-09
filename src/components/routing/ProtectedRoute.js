
// import {Route, Navigate} from 'react-router-dom';
// import { useContext } from 'react';
// import {AuthContext} from '../../contexts/AuthContext';
// import Spinner from 'react-bootstrap/Spinner';


// import React from 'react'

// const ProtectedRoute = ({component: Component, ...rest}) => {
// const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext);

//     if(authLoading) {
//         return (
//             <div className='spinner-container'>
//                 <Spinner animation='border' className='colorText' />
//             </div>
//         )
//     }

//   return (
//     <>
//     <Route {...rest} component={isAuthenticated ? (<>
//         <Component {...rest} />
//     </>) : (<Navigate to='/login' />)}  />

//     </>
//   )
// }

// export default ProtectedRoute



import { Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Spin } from 'antd';
// import NavbarMenu from '../Header/NavbarMenu/NavbarMenu';

import React from 'react'

const ProtectedRoute = ({children}) => {
const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext);

    if(authLoading) {
        return (
            <div className='spinner-container'>
                <Spin />
            </div>
        )
    }
   
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

  return (
    <>
    {/* <NavbarMenu /> */}
     {children}
    </>
   
  )
}

export default ProtectedRoute