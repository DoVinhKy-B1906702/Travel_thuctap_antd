import {createContext, useReducer, useState, useContext } from 'react';

import {postReducer} from '../reducers/postReducer';

import { API } from './constanst';

import axios from 'axios';
import { AuthContext } from './AuthContext';
//const type
import { POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS, POSTS_PRIVATE_LOADED_SUCCESS,
    POSTS_PRIVATE_LOADED_FAIL, CREATE_POST_SUCCESS, DELETE_POST_SUCCESS, UPDATE_POST_SUCCESS, FIND_POST, POST_COMMENT} from './constanst';

export const  PostContext = createContext();


const PostContextProvider = ({children}) => {
    // state
    const {authState: {user}} = useContext(AuthContext)

    const [postState, dispatch] = useReducer(postReducer, {
        post: null,
        posts: [],
        postsPrivate:[],
        postsLoading: true
    });
    const [ avatarDefault, setAvatarDefault] = useState([]); 
    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    });

    // Get all posts    
    const getPosts = async (limit) => {
        try {
            const response = await axios.get(`${API}/posts?limit=${limit}`)
            if (response.data.success) {
                dispatch({
                    type: POSTS_LOADED_SUCCESS,
                    payload: response.data.posts
                })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }
    // Get all posts private
    const getPostsPrivate = async (id) => {
        try {
            const response = await axios.get(`${API}/posts/${id}`)
            if (response.data.success) {
                dispatch({
                    type: POSTS_PRIVATE_LOADED_SUCCESS,
                    payload: response.data.posts
                })
            }
        } catch (error) {
            dispatch({ type: POSTS_PRIVATE_LOADED_FAIL })
        }
    }
      // Create a post with single image
    const addPost = async newPost => {
        try {
            const response = await axios.post(`${API}/posts/travel`, newPost)
            if (response.data.success) {
                dispatch({
                    type: CREATE_POST_SUCCESS,
                    payload: response.data.post
                })
                return response.data
            }

        } catch (error) {
            return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
        }
    }
     // Create a post with multiples image
     const addPostImages = async newPost => {
        try {
            const response = await axios.post(`${API}/posts/list`, newPost)
            if (response.data.success) {
                dispatch({
                    type: CREATE_POST_SUCCESS,
                    payload: response.data.post
                })
                return response.data
            }

        } catch (error) {
            return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
        }
    }
    // Delete a post
    const deletePost = async postId => {
        try {
            const response = await axios.delete(`${API}/posts/${postId}`)
            if (response.data.success) {
                dispatch({
                    type: DELETE_POST_SUCCESS,
                    payload: postId
                })
                
            }
        } catch (error) {
            console.log(error)
        }
       
    }
    // Find Post click when user update
    const findPost = postId => {
        const post = postState.posts.find(post => post._id === postId)
        dispatch({
            type: FIND_POST,
            payload: post
        })
    }


    // Update a post
    const updatePost = async updatePost => {
        try {
            const response = await axios.put(`${API}/posts/${updatePost._id}`, updatePost)
            if (response.data.success) {
                dispatch({
                    type:UPDATE_POST_SUCCESS,
                    payload: response.data.post
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
            ? error.response.data
            : { success: false, message: 'Server error' }
        }
    }
    // Comment a post
    const postComment = async (values, id) => {
        try {
            const response = await axios.put(`${API}/posts/comment/${id}`, values)
            if (response.data.success) {
                dispatch({
                    type:POST_COMMENT,
                    payload: response.data.post
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
            ? error.response.data
            : { success: false, message: 'Server error' }
        }
    }
    
    

    // Post Context Data
    const postContextData = {
        postState,
        dispatch,
        getPosts,
        getPostsPrivate,
        addPost,
        addPostImages, 
        deletePost,
        updatePost,
        findPost,
        postComment,
        avatarDefault, setAvatarDefault
        // showAddPostModal, setShowAddPostModal, 
        // showToast, setShowToast,
        // showUpdatePostModal, setShowUpdatePostModal
    }


    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;


