import React, {useEffect, useContext} from 'react'

import PostItem from '../PostItem/PostItem'
import { PostContext } from '../../../context/PostContext';

const PostList = ({limit}) => {
  const {getPosts, postState: {posts}} = useContext(PostContext);
 
  useEffect(() => {
    
      getPosts(limit);

  }, [limit])
   let newArray = [];
   for (let i = posts.length - 1; i >= 0; i--) {
    newArray.push(posts[i]);
    }
    // console.log('pre', posts);
    // console.log('then', newArray);
  return (
    <div>
      {posts.map(post => (
         <PostItem key={post._id} post={post}  />
      ))}
       {/* {newArray.map(post => (
         <PostItem key={post._id} post={post} />
      ))} */}
       
        
    </div>
  )
}

export default PostList