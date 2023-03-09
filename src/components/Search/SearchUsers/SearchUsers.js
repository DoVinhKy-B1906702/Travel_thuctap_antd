import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './SearchUsers.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import useDebounce from '../../../hooks/useDebounce';
import axios from 'axios';
import ShowUsers from '../ShowUsers/ShowUsers';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../../context/constanst';

const cx = classNames.bind(styles);
const SearchUsers = () => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [searchLength, setsearchLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(value, 700)

  const inputRef = useRef();
  useEffect(() => {
    if(!debounced.trim()) {
      return;
    }
    console.log(debounced)
    
    const fetchApi = async () => {

      setLoading(true);

      const result = await axios.get(`${API}/search?q=${debounced}`);
      if(result.data.success) {
        setSearchResult(result.data.allUsers);
        setsearchLength(result.data.length)
      
      }
      setLoading(false);
    }

    fetchApi()
  },[debounced])


  const handleClear = () => {
    setValue('');
    setSearchResult([]);
    setShowResult(true);
    setsearchLength(0)
    inputRef.current.focus();
}


  return (
    <Popover 
    content={<ShowUsers allUsers={searchResult} />} 
    title={`Người dùng (có ${searchLength} tìm kiếm) `}
    trigger='click'
    defaultOpen={showResult}
    getPopupContainer={trigger => trigger.parentNode}
  >
    <div className={cx('background')}>
        <div className={value ? cx('search-icon-value') : cx('search-icon')}>
            <SearchOutlined />
        </div>
        <div className={cx('search-item')}>
        
            <input 
                className={cx('input-search')} 
                type='text' 
                value={value}
                ref={inputRef}
                onFocus={() => setShowResult(true)}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Tìm kiếm trên F&L....'
            />
             
        </div>
        <div className={cx('btn-load-refresh')}>
              {!!value && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
              ) }
              {loading && 
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
              }
        </div>
    </div>
    </Popover>
  )
}

export default SearchUsers