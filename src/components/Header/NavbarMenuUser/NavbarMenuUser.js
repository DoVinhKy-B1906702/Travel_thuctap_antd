import React, { useState, useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenuUser.module.scss';
import { Drawer, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';


const cx = classNames.bind(styles);
let navigate;
const NavbarMenuUser = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    navigate = useNavigate();
    return (
    <div>
        <div className={cx('menuIcon')} >
            <FontAwesomeIcon 
                className={cx('icon')}  
                icon={faBars}
                onClick={() => setOpenMenu(true)} 
            />
        </div>
        <span className={cx('header-menu')}>
            <AppMenu />
        </span>
        
        <Drawer 
            placement='left'
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            closable={false}
            className={cx('menu-mobile')}
        >
            <AppMenu isInline />
        </Drawer>
    </div>
  )
}

function AppMenu({isInline=false}) {
    const {logOutUser} = useContext(AuthContext)
    return (
        <Menu
            mode={isInline? 'inline' : 'horizontal'}
            onClick={({key}) => {
                if (key === 'logout') {
                    logOutUser(); 
                } else {
                    return navigate(key)
                }
                
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
                    label:'Đăng xuất',
                    key: 'logout'
                   
                },
            ]}
        >

        </Menu>
    )
}

export default NavbarMenuUser