import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LikeForm.module.scss';
import { Button, message } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { API } from '../../../context/constanst';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';


const cx = classNames.bind(styles);
const LikeForm = ({postId}) => {
    const {authState: {user}} = useContext(AuthContext);
    
    const [allLikes, setAllLikes] = useState([]);
    const [statusLiked ,setStatusLiked] = useState(undefined) ;
    const onFinish = async () => {
        try {
            console.log('success', postId);
            const res = await axios.post(`${API}/like/add?post=${postId}`)
            console.log(res)
            if(res.data.success) {
                setAllLikes((prev) => [...prev, res.data.like]);
                message.success('Liked !!!!')
            }
            else {
                setAllLikes(() => allLikes.filter(like => like._id !== res.data.like._id ));
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
                    setAllLikes(respon.data.like)
                }
            } catch (error) {
                console.log(error)
            }
           
        }
        
        getAllLikes();
    //    if (respon.data.success) {
    //        setAllLikes(respon.data.like);
    //    }
    
    },[])
    // const find = allLikes.find(like => like.user === user._id);
    // setStatusLiked(find);
  return (
    <div>
        <div>{allLikes.length}</div>
        <Button type={statusLiked ? 'primary' : 'dashed'} onClick={onFinish} ><LikeOutlined /></Button>
    </div>
  )
}

export default LikeForm