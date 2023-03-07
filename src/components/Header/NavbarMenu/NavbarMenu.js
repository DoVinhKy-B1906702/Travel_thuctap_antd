
import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenu.module.scss';

import { AuthContext } from '../../../context/AuthContext';


import NavbarMenuUser from '../NavbarMenuUser/NavbarMenuUser';
import NavbarMenuWithoutUser from '../NavbarMenuWithoutUser/NavbarMenuWithoutUser';
import { Col, Row } from 'antd';
import SearchUsers from '../../Search/SearchUsers/SearchUsers';
const cx = classNames.bind(styles);

const NavbarMenu = () => {
 
  const {authState: { isAuthenticated} } = useContext(AuthContext);
  


  return (
    <div className={cx('header-navbar-menu')}>
      { isAuthenticated ?
      <Row justify='center'>
        <Col xl={16} xs={8} sm={12}>
          <div> <NavbarMenuUser /> 
        </div>
        </Col>
        
        <Col xl={4} xs={16} sm={12}>
          
            <SearchUsers />
          
        </Col>
      </Row> : <NavbarMenuWithoutUser />
     }
      
    </div>
   
  )
} 
// 
export default NavbarMenu