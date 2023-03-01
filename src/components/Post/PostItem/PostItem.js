import React, {useContext, useState} from 'react'
import { Row, Col, Tooltip, Dropdown, Space, Typography, message, Modal} from 'antd';
import classNames from 'classnames/bind'
import styles from './PostItem.module.scss';

import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faFlagCheckered, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import MyCarousel from '../../Carousel/MyCarousel';
import CardUser from '../../CardUser/CardUser';
import CommentsList from '../../Comments/CommentsList/CommentsList';
import CommentForm from '../../Comments/CommentForm/CommentForm';
import LikeForm from '../../Like/LikeForm/LikeForm';
import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import { PostContext } from '../../../context/PostContext';

const cx = classNames.bind(styles);


const PostItem = ({post}) => {
  const {authState: {user}} = useContext(AuthContext);
  const {deletePost} = useContext(PostContext);

  const [openModalDelete, setOpenModalDelete] = useState(false) ;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpenModalDelete(true);
  }
  const closeModal = () => {
    setOpenModalDelete(false)
  }
  const handleDeletePost = async () => {
    try {
        setConfirmLoading(true);
        const deletedPost = await deletePost(post._id);
        if (deletedPost.success) {
          message.success('Đã xóa thành công bài viết này !!!')
            setTimeout(() => {
              setOpenModalDelete(false);
              setConfirmLoading(false);
             
            }, 4000);
        }
      console.log('deleted: ', post._id)
    } catch (error) {
      
    }
  }
  const handleUpdatePost = () => {
    console.log('updated: ', post._id)
  }

  const items = [
    {
      key: '1',
      label: (
          <div className={cx('btn-deletePost')} >
            <div onClick={showModal}>Delete <DeleteOutlined /></div> 
            <Modal
              title='Bạn có muốn xóa bài viết này không ?'
              open={openModalDelete}
              onOk={handleDeletePost}
              onCancel={closeModal}
              confirmLoading={confirmLoading}
            >
             
            </Modal>
          </div>
          
      )
     
    },
    {
      key: '2',
      label: (
          <div className={cx('btn-updatePost')} onClick={handleUpdatePost}>
            Update <EditOutlined />
          </div>
      )
      
    },
    
  ];
 
  
  return (
    <div >
      <Row justify="center">
       
       <Col  xs={20} xl={12} sm={16} >
       <div className={cx('layout')}>
          {post.user._id === user._id &&

           <div className={cx('btn-dropdown')}>
              <Dropdown
              
                menu={{
                  items,
                  selectable: true,
                  
                }}
              >
                <Typography.Link>
                  <Space>
                    Options
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
           </div>
          }
         <div className={cx('info')}>
          
         <div >
           <img  className={cx('info-image')} src={post.user.image ? post.user.image : user.image } alt='avatar' />
         </div>
         <div>
           <div className={cx('info-name')}>
              <Tooltip autoAdjustOverflow arrow overlayClassName={cx('overlay-tooltip')} color='#414346' title={<CardUser info={post} />}>
                {post.user.firstName ? `${post.user.firstName} ${post.user.lastName}` : `${user.firstName} ${user.lastName}` }
              </Tooltip>
             
           </div>
           <div className={cx('info-time')}>
             {moment(post.createdAt).format('LLL')}
           </div>
         </div>
         </div>
         <div className={cx('post')}>
           <div>
             <div className={cx('post-title')}>
                <FontAwesomeIcon icon={faFlagCheckered} className={cx('title-icon')} />
               {post.title}
               
             </div>
             <div className={cx('post-content')}>
                <FontAwesomeIcon icon={faPenSquare} className={cx('post-icon')} />
                {post.content}
             </div>
           </div>
           {post.images.length > 0 && 
           <div className={cx('image-layout')}>
           <div  className={cx('image-center')}>
             <MyCarousel list={post.images}   xl='20' 
              sm='20' />
           </div>
           
           {/* <img className={cx('image-post')} src={post.image}  alt={`hình ảnh của ${post.user.firstName}`}/> */}
         </div>
           }
           <div>
              <LikeForm postId={post._id} />
           </div>
           <div>
            <CommentsList listComments={post.comments} postID={post._id} />
           </div>
           <CommentForm id={post._id} />
         </div>
       </div>
       </Col>
 
     </Row>
    </div>
    
   
  )
}

export default PostItem