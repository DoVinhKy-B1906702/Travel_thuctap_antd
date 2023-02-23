import React, { useState } from 'react'
import CommentItem from '../CommentItem/CommentItem'
import classNames from 'classnames/bind'
import styles from './CommentsList.module.scss';
import { Button } from 'antd';



const cx = classNames.bind(styles);
const CommentsList = ({listComments}) => {
  const [loadMore, setLoadMore] = useState(false);
  const handleLoadMore = () => {
    setLoadMore(!loadMore)
  }
  return (
    
    <div className={listComments.length > 0 ? cx('layout') : ''}>
        <div>Bình luận{` (${listComments.length})`}</div>
        {loadMore &&
        
        <div>
            {listComments.map(item => (
                <CommentItem key={item._id} comment={item} />
            ))}
        </div>
        }
        <div className={cx('read-comment')}>
              <Button type='primary' className={cx('comment-more')} onClick={handleLoadMore} >{loadMore ? 'Ẩn bình luận' : 'Xem bình luận'}</Button>
        </div>
     
    </div>
  )
}

export default CommentsList