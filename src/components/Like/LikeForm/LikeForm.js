import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LikeForm.module.scss';
import { message, Popover } from 'antd';
import Icon ,{ HeartFilled } from '@ant-design/icons';
import { API } from '../../../context/constanst';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import UserLikes from '../UserLikes/UserLikes';


const cx = classNames.bind(styles);
const LikeForm = ({postId}) => {
    const {authState: {user}} = useContext(AuthContext);
    
    const [allLikes, setAllLikes] = useState([]);
    const [statusLiked ,setStatusLiked] = useState(false);
    const onFinish = async () => {
        try {
            console.log('success', postId);
            const res = await axios.post(`${API}/like/add?post=${postId}`)
            console.log(res)
            if(res.data.success) {
                setAllLikes((prev) => [...prev, res.data.like]);
                message.success('Liked !!!!')
                setStatusLiked(true);
            }
            else {
                setAllLikes(() => allLikes.filter(like => like._id !== res.data.like._id ));
                setStatusLiked(false)
                message.info('unLiked !!!!')
            }
        } catch (error) {
            console.log(error)
        }
       
        
    }

    useEffect(() => {
        async function getAllLikes() {
            try {
                const respon = await axios.get(`${API}/like/get?post=${postId}`) 
                if(respon.data.success) {
                    setAllLikes(respon.data.like);
                    setStatusLiked(() => respon.data.like.find(like => like.user._id === user._id ))
                }
            } catch (error) {
                console.log(error)
            }
           
        }
        
        getAllLikes();
   
    
    },[])
    
    
    // setStatusLiked(status)
    // console.log(status);
    
    // setStatusLiked(() => allLikes.some(like => like.user._id === user._id ));
   
  return (
    <div>
        <div className={cx('total-likes')}>
            <Popover title='Người dùng đã like !!!' content={<UserLikes users={allLikes} />}>
                <span className={cx('number-likes')} >{allLikes.length}</span>
            </Popover>
        </div>
        <div className={cx('background-heart')} >
           <Icon  onClick={onFinish} className={statusLiked ? cx('heart-btn') : cx('no-heart-btn')}   component={HeartFilled} />
        </div>
    </div>
  )
}

export default LikeForm