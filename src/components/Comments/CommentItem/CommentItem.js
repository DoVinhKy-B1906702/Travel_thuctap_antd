import React, {useContext, useState} from 'react'
import classNames from 'classnames/bind'
import styles from './CommentItem.module.scss';

import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';
import CardUser from '../../CardUser/CardUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { DeleteOutlined } from '@ant-design/icons';
import { Dropdown, Modal, Space, Tooltip, Typography, message } from 'antd';
import { PostContext } from '../../../context/PostContext';

const cx = classNames.bind(styles);
const CommentItem = ({comment, postID, postUser}) => {
    const {deleteComment} = useContext(PostContext);
    const [openModalDeleteComment, setOpenModalDeleteComment] = useState(false);
   

    const handleOpenModalDeleteComment = () => {
        setOpenModalDeleteComment(true)
    }
    
    const handleDeleteComment = async () => {
       
        try {
           
            const res = await deleteComment(postID, comment._id);
            console.log(res);
           
           if(res.success) {
                message.success('Done !!!')
                                
                setOpenModalDeleteComment(false);
                
           }
                
             
            
            // console.log('delete postID',postID);
            // console.log('delete commentId', comment._id);
        } catch (error) {
            console.log(error)
        }
        
    }
    const handleCloseModalDeleteComment = () => {
        setOpenModalDeleteComment(false)
    }
    const items = [
        {
            key: '1',
            label: (<div >
              <div onClick={handleOpenModalDeleteComment}><DeleteOutlined className={cx('btn-deleteComment')}  /></div>
              <Modal
                  title='Xóa comment ?'
                  open={openModalDeleteComment}
                  onOk={handleDeleteComment}
                  onCancel={handleCloseModalDeleteComment}
               
              >
  
              </Modal>
            </div>
            ),
          },
      ];
    const {authState: {user}} = useContext(AuthContext);
  return (
    <div className={cx('info')}>
        <div >
            <img  className={cx('info-image')} src={comment.user.image ? comment.user.image : user.image } alt='avatar' />
        </div>
        <div className={cx('comment-content')}>
            
            <div className={cx('comment-layout')}>
                <div className={cx('comment-background')}>

                <div >
                    <Tooltip trigger='click' overlayClassName={cx('overlay-tooltip')} color='#414346' title={<CardUser  info={comment} />}>
                   <span className={cx('info-name')}>  
                        {   comment.user.firstName ? `${comment.user.firstName} ${comment.user.lastName}` 
                        :
                            `${user.firstName} ${user.lastName}` 
                        }
                    </span>
                  
                    </Tooltip>
                    
                </div>
                <div className={cx('comment-text')}>{comment.text}</div>
                </div>
                {( (comment.user._id === user._id) || (postUser._id === user._id) )  &&
                <div className={cx('options-comment')}>
                    <Dropdown
                                    
                                menu={{
                                        items,
                                        selectable: true,
                                        
                                }}
                    >
                            <Typography.Link>
                                <Space>
                                        
                                    <FontAwesomeIcon className={cx('options-icon')} icon={faEllipsis} />
                                </Space>
                            </Typography.Link>
                    </Dropdown>
                </div>
                }
            </div>
           
            
            <div className={cx('info-time')}>
                <div></div>
                {moment(comment.createdAt).startOf(comment.createdAt).fromNow()}
            </div>
        </div>
      
    </div>
  )
}

export default CommentItem