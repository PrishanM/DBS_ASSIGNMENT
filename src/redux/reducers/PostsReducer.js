import {actionTypes} from "../const/ActionTypes";

const initialState = {
  fetchingPosts : false,
  postsList : [],
  retrievingPostsError : ''
}

const REPEAT_TIMES = 30;

const repeatArray = (arr, repeats) =>
  Array.from({ length: repeats }, () => arr).flat();

export default (state = initialState,action) => {
  switch (action.type) {
    case actionTypes.getPostsRequest.ACTION_REQUEST :
      return {
        ...state,
        fetchingPosts: true,
        postsList: [],
        retrievingPostsError: ''
      }
    case actionTypes.getPostsRequest.ACTION_SUCCESS :
      return {
        ...state,
        fetchingPosts: false,
        postsList : action.payload && action.payload.length ? repeatArray(action.payload,REPEAT_TIMES) : action.payload
      }
    case actionTypes.getPostsRequest.ACTION_FAILED :
      return {
        ...state,
        fetchingPosts: false,
        retrievingPostsError: action.payload
      }
    case actionTypes.getPostsRequest.ACTION_RESET :
      return {
        ...state,
        fetchingPosts: false,
        postsList : [],
        retrievingPostsError: ''
      }
    default:
      return state;
  }
}
