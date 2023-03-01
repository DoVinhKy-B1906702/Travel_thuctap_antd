import React, {useContext, useState} from 'react'
import classNames from 'classnames/bind'
import styles from './CommentItem.module.scss';

import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';
import CardUser from '../../CardUser/CardUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Dropdown, Modal, Space, Tooltip, Typography, message } from 'antd';
import { PostContext } from '../../../context/PostContext';

const cx = classNames.bind(styles);
const CommentItem = ({comment, postID}) => {
    const {deleteComment} = useContext(PostContext);
    const [openModalDeleteComment, setOpenModalDeleteComment] = useState(false);
    const [confirmLoadingDelete, setConfirmLoadingDelete] = useState(false);
    const handleOpenModalDeleteComment = () => {
        setOpenModalDeleteComment(true)
    }
    const handleCloseModalDeleteComment = () => {
        setOpenModalDeleteComment(false)
    }
    const handleDeleteComment = async () => {
        try {
            setConfirmLoadingDelete(true);
            const res = await deleteComment(postID, comment._id);
            console.log(res);
            if(res.success) {
                message.success('Done !!!')
                setTimeout(() => {
                  setOpenModalDeleteComment(false);
                  setConfirmLoadingDelete(false);
                 
                }, 4000);
            }
            console.log('delete postID',postID);
            console.log('delete commentId', comment._id);
        } catch (error) {
            console.log(error)
        }
        
    }
    const items = [
        {
          key: '1',
          label: (<div >
            <DeleteOutlined className={cx('btn-deletePost')} onClick={handleOpenModalDeleteComment} />
            <Modal
                title='Xóa comment ?'
                onOk={handleDeleteComment}
                open={openModalDeleteComment}
                onCancel={handleCloseModalDeleteComment}
                confirmLoading={confirmLoadingDelete}
            >

            </Modal>
          </div>
          ),
        },
        {
          key: '2',
          label: (<div >
          <EditOutlined className={cx('btn-updatePost')} onClick={handleOpenModalDeleteComment} />
          <Modal
              title='Xóa comment ?'
              onOk={handleDeleteComment}
              open={openModalDeleteComment}
              onCancel={handleCloseModalDeleteComment}
          >

          </Modal>
        </div>),
        }
       
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
                    <Tooltip autoAdjustOverflow arrow overlayClassName={cx('overlay-tooltip')} color='#414346' title={<CardUser  info={comment} />}>
                   <span className={cx('info-name')}>  
                        {   comment.user.firstName ? `${comment.user.firstName} ${comment.user.lastName}` 
                        :
                            `${user.firstName} ${user.lastName}` 
                        }
                    </span>
                    <span >
                        {comment.user.gender || user.gender ?  (      
                                <FontAwesomeIcon className={cx('icon-gender-male')} icon={faMars} />
                        )
                        : 
                        (
                                <FontAwesomeIcon className={cx('icon-gender-female')} icon={faVenus} />
                    )
                    }</span> 
                    </Tooltip>
                    
                </div>
                <div className={cx('comment-text')}>{comment.text}</div>
                </div>
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
            </div>
           
            
            <div className={cx('info-time')}>
                {moment(comment.createdAt).format('LLL')}
            </div>
        </div>
      
    </div>
  )
}

export default CommentItem