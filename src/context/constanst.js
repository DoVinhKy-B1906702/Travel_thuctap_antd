export const API = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'someURL';

export const LOCAL_STORAGE_TOKEN_NAME = 'learnMERN';

export const SET_AUTH = 'SET_AUTH';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const UPDATE_USER_IMAGE = 'UPDATE_USER_IMAGE';


// POST

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS';
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const FIND_POST = 'FIND_POST';