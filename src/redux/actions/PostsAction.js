import {actionTypes} from "../const/ActionTypes";
import {appURLs} from "../../config/URLConfigurations";
import {httpGET} from "../../services/Service";

export const retrievePosts = () => {

  const URL = appURLs.BASE_URL + appURLs.GET_POSTS;

  return httpGET(URL,actionTypes.getPostsRequest,'GET POSTS LIST');

}

export const resetPosts = () => {
  return{
    type : actionTypes.getPostsRequest.ACTION_RESET
  }
}
