
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
import PostFormList from "./components/Post/PostFormList/PostFormList";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
      <Router>
              <NavbarMenu />
              <Routes>
              <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute> }  />
              <Route path='/private' element={<ProtectedRoute> <PrivatePage /> </ProtectedRoute>}  />
              {/** test Component */}
              <Route path='/testdate' element={<TestDate />}  />
              <Route path='/testpost' element={<PostFormList />}  />


              <Route path='/update' element={<UpdateUserModal />}  />
              <Route path='/login' element={<Auth  authRoute='login' />}  />
              <Route path='/register' element={<Auth  authRoute='register' />}  />
               
              <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                {/* <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} /> */}
              </Routes> 
              <Footer />
        </Router>
      </PostContextProvider>
        
    </AuthContextProvider>
    
  );
}

export default App;
