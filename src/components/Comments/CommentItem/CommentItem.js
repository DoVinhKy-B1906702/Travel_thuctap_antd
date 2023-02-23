import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './CommentItem.module.scss';

import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';
import CardUser from '../../CardUser/CardUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

const cx = classNames.bind(styles);
const CommentItem = ({comment}) => {
    const {authState: {user}} = useContext(AuthContext);
  return (
    <div className={cx('info')}>
        <div >
            <img  className={cx('info-image')} src={comment.user.image ? comment.user.image : user.image } alt='avatar' />
        </div>
        <div>
            
            <div className={cx('comment-layout')}>
                <div className={cx('info-name')}>
                    <Tooltip autoAdjustOverflow arrow overlayClassName={cx('overlay-tooltip')} color='#414346' title={<CardUser  info={comment} />}>
                    {comment.user.firstName ? `${comment.user.firstName} ${comment.user.lastName}` : `${user.firstName} ${user.lastName}` }
                    <span>
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

            
            <div className={cx('info-time')}>
                {moment(comment.createdAt).format('LLL')}
            </div>
        </div>
    </div>
  )
}

export default CommentItem