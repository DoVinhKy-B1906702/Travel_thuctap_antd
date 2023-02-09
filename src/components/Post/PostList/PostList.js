import React, {useEffect, useContext} from 'react'

import PostItem from '../PostItem/PostItem'
import { PostContext } from '../../../context/PostContext';

const PostList = () => {
  const {getPosts, postState: {posts}} = useContext(PostContext);

  useEffect(() => {
    getPosts();
    
  }, [])
  return (
    <div>
      {posts.map(post => (
         <PostItem key={post._id} post={post} />
      ))}
       
        
    </div>
  )
}

export default PostList