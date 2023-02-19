
import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenu.module.scss';

import { AuthContext } from '../../../context/AuthContext';


import NavbarMenuUser from '../NavbarMenuUser/NavbarMenuUser';
import NavbarMenuWithoutUser from '../NavbarMenuWithoutUser/NavbarMenuWithoutUser';
const cx = classNames.bind(styles);

const NavbarMenu = () => {
 
  const {authState: { isAuthenticated} } = useContext(AuthContext);
  


  return (
    <div className={cx('header-navbar-menu')}>
       {isAuthenticated ? <NavbarMenuUser /> : <NavbarMenuWithoutUser />
       }

    </div>
   
  )
} 
// 
export default NavbarMenu