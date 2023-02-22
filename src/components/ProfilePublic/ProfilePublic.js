import React, { useEffect, useState, useContext } from 'react'

import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ProfilePublic.module.scss';

import { API } from '../../context/constanst';
import axios from 'axios';
import { Row,Col, Image, message } from 'antd';

// import PageNotFound from '../../views/PageNotFound/PageNotFound';
import { AuthContext } from '../../context/AuthContext';
import PostFormList from '../Post/PostFormList/PostFormList';

const cx = classNames.bind(styles);
const ProfilePublic = () => {
    const {searchId} = useParams();  
    const {authState: {user}} = useContext(AuthContext)

    const [info, setInfo] = useState({});
    

  
    useEffect(() => {
        async function fetchAPIUser() {
            try {
                const res = await axios.get(`${API}/search/searchID?id=${searchId}`);
                console.log(res);
                    setInfo(res.data.user);
                    message.success('Done!')
                
                    
                
            } catch (error) {
                console.log(error)
            }
           
        }
        fetchAPIUser();
    },[searchId])

    // const body = (
    //     <div></div>
    // );
  return (
    <div className={cx('layout')}>
        <Row justify='center'>
            <Col xs={12} xl={6} sm={22}>
                <Image
                    src='error'
                    fallback={info.image}
                />
                <div>{info.firstName} {info.lastName}</div>
            </Col>
        </Row>
        {(info._id === user._id) &&
            <div className={cx('layout-form')}>
                <PostFormList />    
            </div>

        }
        
    
       
    </div>
  )
}

export default ProfilePublic