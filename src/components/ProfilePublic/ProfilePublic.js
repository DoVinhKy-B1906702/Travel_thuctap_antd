import React, { useEffect, useState, useContext } from 'react'

import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ProfilePublic.module.scss';

import { API } from '../../context/constanst';
import axios from 'axios';
import { Row,Col, Image, message, Typography } from 'antd';

// import PageNotFound from '../../views/PageNotFound/PageNotFound';
import { AuthContext } from '../../context/AuthContext';
import { PostContext } from '../../context/PostContext';
import PostFormList from '../Post/PostFormList/PostFormList';
import {POSTS_PRIVATE_LOADED_SUCCESS, POSTS_PRIVATE_LOADED_FAIL} from '../../context/constanst';
import PostListPrivate from '../Post/PostListPrivate/PostListPrivate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const ProfilePublic = () => {
    const {searchId} = useParams();  
    const {authState: {user}} = useContext(AuthContext);
    const {dispatch} = useContext(PostContext)

    const [info, setInfo] = useState({});
    const [lengthPosts, setLengthPosts] = useState({});
    

  
    useEffect(() => {
        async function fetchAPIUser() {
            try {
                const res = await axios.get(`${API}/search/searchyourID?q=${searchId}`);
                console.log(res);
                    setInfo(res.data.user);
                    setLengthPosts(res.data.posts)
                    message.success('Done!')
                if(res.data.success) {
                    dispatch({
                        type: POSTS_PRIVATE_LOADED_SUCCESS,
                        payload: res.data.posts
                    })
                } else {
                    dispatch({
                        type: POSTS_PRIVATE_LOADED_FAIL
                    })
                }
                    
                
            } catch (error) {
                console.log(error)
            }
           
        }
        fetchAPIUser();
    },[searchId, dispatch])

    // const body = (
    //     <div></div>
    // );
  return (
    <div className={cx('layout')}>
        <Row justify='center' className={cx('layout-profile')}>
            <Col xs={12} xl={6} sm={22}>
                <Image
                    src='error'
                    fallback={info.image}
                />
                <div>{info.firstName} {info.lastName}</div>
                {
                    info.gender ? 
                    (
                        <div className={cx('layout-gender')}>
                            <span> Giới tính:</span>
                            <FontAwesomeIcon className={cx('icon-gender-male')} icon={faMars} />
                            
                        </div>
                    )
                    : 
                    (
                        <div className={cx('layout-gender')}>
                            <span>Giới tinh:</span>
                            <FontAwesomeIcon className={cx('icon-gender-female')} icon={faVenus} />
                            
                        </div>
                    )
                }
                <div>Có {lengthPosts.length} bài viết</div>
                <div>Link trang cá nhân</div>
                <Typography.Text copyable className={cx('copy-link')}>{`http://localhost:3000/${info.yourId}`}</Typography.Text>
            </Col>
        </Row>
        {(info._id === user._id) &&
            <div className={cx('layout-form')}>
                <PostFormList />    
            </div>

        }
        <PostListPrivate />
    
       
    </div>
  )
}

export default ProfilePublic