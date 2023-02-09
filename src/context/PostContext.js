import {createContext, useReducer, useState } from 'react';

import {postReducer} from '../reducers/postReducer';

import { API } from './constanst';

import axios from 'axios';

//const type
import { POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS, CREATE_POST_SUCCESS, DELETE_POST_SUCCESS, UPDATE_POST_SUCCESS, FIND_POST} from './constanst';

export const  PostContext = createContext();

const PostContextProvider = ({children}) => {
    // state

    const [postState, dispatch] = useReducer(postReducer, {
        post: null,
        posts: [],
        postsLoading: true
    });

    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    });

    // Get all posts
    const getPosts = async () => {
        try {
            const response = await axios.get(`${API}/posts`)
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
      // Create a post
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
    //

    // Post Context Data
    const postContextData = {
        postState,
        getPosts, 
        addPost, 
        deletePost,
        updatePost,
        findPost,
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


