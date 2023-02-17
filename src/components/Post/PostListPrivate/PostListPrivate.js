import React, {useEffect, useContext} from 'react'

import PostItem from '../PostItem/PostItem'
import { PostContext } from '../../../context/PostContext';

const PostListPrivate = () => {
  const {getPostsPrivate, postState: {postsPrivate}} = useContext(PostContext);

  useEffect(() => {
    getPostsPrivate();
  }, [])
  let newArray = [];
  for (let i = postsPrivate.length - 1; i >= 0; i--) {
    newArray.push(postsPrivate[i]);
  }

 
  
  return (
    <div>
      {/* {postsPrivate.map(post => (
         <PostItem key={post._id} post={post} />
      ))} */}
       {newArray.map(post => (
         <PostItem key={post._id} post={post} />
      ))}
       
        
    </div>
  )
}

export default PostListPrivate