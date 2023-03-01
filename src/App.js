
import Home from "./views/Home/Home";

import NavbarMenu from "./components/Header/NavbarMenu/NavbarMenu";
import Auth from "./views/Auth/Auth";

import AuthContextProvider from "./context/AuthContext";
import PostContextProvider from "./context/PostContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profile from "./views/Profile/Profile";

import 'antd/dist/reset.css';

import UpdateUserModal from "./components/Modal/UpdateUserModal/UpdateUserModal";
import TestDate from "./components/Test/TestDate";

import Footer from "./components/Footer/Footer";

import PageNotFound from "./views/PageNotFound/PageNotFound";
import ProfilePublic from "./components/ProfilePublic/ProfilePublic";




function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
      <Router>
              <NavbarMenu />
              <Routes>
              <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute> }  />
              {/* <Route path='/private' element={<ProtectedRoute> <PrivatePage /> </ProtectedRoute>}  /> */}
              {/** test Component */}
              <Route path='/testdate' element={<TestDate />}  />
              
              

              <Route path='/update' element={<UpdateUserModal />}  />
              <Route path='/login' element={<Auth  authRoute='login' />}  />
              <Route path='/register' element={<Auth  authRoute='register' />}  />
               

              <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
              <Route path='/:searchId' element={<ProtectedRoute><ProfilePublic /></ProtectedRoute>  }  />
              <Route path='*' element={<PageNotFound />}  />
                {/* <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} /> */}
              </Routes> 
              <Footer />
        </Router>
      </PostContextProvider>
        
    </AuthContextProvider>
    
  );
}

export default App;
