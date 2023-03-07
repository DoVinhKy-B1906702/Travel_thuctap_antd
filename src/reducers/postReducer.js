import { 
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
    POSTS_PRIVATE_LOADED_SUCCESS,
    POSTS_PRIVATE_LOADED_FAIL,
    CREATE_POST_SUCCESS, 
    DELETE_POST_SUCCESS, 
    UPDATE_POST_SUCCESS,
    FIND_POST,
    POST_COMMENT,
    DELETE_COMMENT
} from '../context/constanst';


export const postReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case POSTS_LOADED_SUCCESS:
             
            return {
                ...state,
                posts: payload,
                postsLoading: false
            }
        case POSTS_LOADED_FAIL:
             
            return {
                ...state,
                posts: [],
                postsLoading: false
            }
        case POSTS_PRIVATE_LOADED_SUCCESS:
             
            return {
                ...state,
                postsPrivate: payload,
                postsLoading: false
            }
        case POSTS_PRIVATE_LOADED_FAIL:
             
            return {
                ...state,
                postsPrivate: [],
                postsLoading: false
            }
        case CREATE_POST_SUCCESS:
             
            return {
                ...state,
                posts: [payload, ...state.posts],
                postsPrivate: [payload ,...state.postsPrivate],
            }
        case DELETE_POST_SUCCESS:
            //  const newPost = state.posts;
            //  newPost.filter(post => post._id !== payload  )
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                postsPrivate: state.postsPrivate.filter(post => post._id !== payload)
            }
        case FIND_POST:
            return {
                ...state,
                post: payload
            }
        case UPDATE_POST_SUCCESS:
               const newPosts = state.posts.map(post => 
                post._id === payload._id ? payload : post
               )
            return {
                ...state,
                posts: newPosts
            }
        case POST_COMMENT: 
            const newComment = state.posts.map(post => 
            post._id === payload._id ? payload : post
           );
           const newCommentProfile = state.postsPrivate.map(post => 
            post._id === payload._id ? payload : post
           )
            return {
                ...state,
                posts: newComment,
                postsPrivate: newCommentProfile
            }
        case DELETE_COMMENT:
            const newPost = state.posts.map(post =>  {
                    if(post._id === payload.postId) {
                        const newComments = post.comments.filter(comment => comment._id !== payload.commentId);
                      return {
                        ...post,
                        ...post.comments = newComments
                      }
                    } else {
                        return post
                    }
                    
                
            }
            );
            const newPostPrivate = state.postsPrivate.map(post =>  {
                if(post._id === payload.postId) {
                    const newComments = post.comments.filter(comment => comment._id !== payload.commentId);
                  return {
                    ...post,
                    ...post.comments = newComments
                  }
                } else {
                    return post
                }
                
            
        }
        );

            return {
                ...state,
                posts: newPost,
                postsPrivate: newPostPrivate
            }
        default:
            return state
    }
}