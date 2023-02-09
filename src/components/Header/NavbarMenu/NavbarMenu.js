import { Button, Menu } from 'antd'
import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenu.module.scss';

import { AuthContext } from '../../../context/AuthContext';

import {redirect, useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

const NavbarMenu = () => {
  const navigate = useNavigate();
  const {authState: { isAuthenticated}, logOutUser } = useContext(AuthContext);
  let body;
  const handleLogOut = () => {
    logOutUser();
  }

  if (isAuthenticated) {
    body = (
      <Menu 
       mode='horizontal'
        onClick={({key}) => {
          return navigate(key)
        }}
        items={[
       {
        label:'Trang chủ',
        key:'/'
       },
       {
        label:'Profile',
        key:'/profile'
       },
       {
        label:'Trang cá nhân',
        key:'/private'
       },
       {
        label:'TestDate',
        key:'/testdate'
       },
       
      
      
       ]}>
        
      </Menu>
      
    )
  } else {
    body = (
      <Menu 
      mode='horizontal'
       onClick={({key}) => {
         return navigate(key)
       }}
       items={[
      {
       label:'Trang chủ',
       key:'/'
      },
      {
       label:'Đăng nhập',
       key:'/login'
      },
      {
       label:'Đăng Ký',
       key:'/register'
      }
      ]}>
   
     </Menu>
    )
  }


  return (
    <div>
       {isAuthenticated ? 
       <div>
        {body}
        <Button onClick={handleLogOut} type='primary'>Log out</Button>
       </div>
         : body}

    </div>
   
  )
} 
// 
export default NavbarMenu