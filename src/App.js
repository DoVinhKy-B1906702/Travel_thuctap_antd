
import Home from "./views/Home/Home";

import NavbarMenu from "./components/Header/NavbarMenu/NavbarMenu";
import Auth from "./views/Auth/Auth";

import AuthContextProvider from "./context/AuthContext";
import PostContextProvider from "./context/PostContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profile from "./views/Profile/Profile";
import PrivatePage from "./views/PrivatePage/PrivatePage";
import 'antd/dist/reset.css';

import UpdateUserModal from "./components/Modal/UpdateUserModal/UpdateUserModal";
import TestDate from "./components/Test/TestDate";



function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
      <Router>
              <NavbarMenu />
              <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='/private' element={<PrivatePage />}  />
              <Route path='/testdate' element={<TestDate />}  />
              <Route path='/update' element={<UpdateUserModal />}  />
              <Route path='/login' element={<Auth  authRoute='login' />}  />
              <Route path='/register' element={<Auth  authRoute='register' />}  />
               
              <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                {/* <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} /> */}
              </Routes> 
            
        </Router>
      </PostContextProvider>
        
    </AuthContextProvider>
    
  );
}

export default App;
