import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenuWithoutUser.module.scss';
import { Drawer, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, LoginOutlined, PlusCircleOutlined } from '@ant-design/icons';




const cx = classNames.bind(styles);
let navigate;
const NavbarMenuWithoutUser = () => {
    
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
    
    return (
        <Menu
            mode={isInline? 'inline' : 'horizontal'}
            onClick={({key}) => {
        
                return navigate(key)
              }}
            items={[
                {
                    label:'Trang chủ',
                    key:'/',
                    icon: <HomeOutlined />
                   },
                   {
                    label:'Đăng nhập',
                    key:'/login',
                    icon: <LoginOutlined />
                   },
                   {
                    label:'Đăng Ký',
                    key:'/register',
                    icon: <PlusCircleOutlined />
                   }
               
            ]}
        >

        </Menu>
    )
}

export default NavbarMenuWithoutUser