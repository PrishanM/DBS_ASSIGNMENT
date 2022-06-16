import Axios from "axios";

const REQUEST_CONFIG = {
    headers: {
        'Content-Type' :'application/json'
    },
    timeout: 18000
}

/**
 * Success Dispatch
 * @param dispatch
 * @param actionType
 * @param data
 */
const dispatchSuccess = (dispatch,actionType,data) => {
    dispatch({
        type: actionType,
        payload: data,
    });
};

/**
 * Failed Dispatch
 * @param dispatch
 * @param actionType
 * @param error
 */
const dispatchFailed = (dispatch, actionType , error) => {
    dispatch({
        type: actionType,
        payload: error,
    });
};

/**
 * Method to handle GET Requests
 * @param url
 * @param actionTypes
 * @param logTag
 * @param requestConfig
 * @returns {function(...[*]=)}
 */
export const httpGET = (url,actionTypes,logTag,requestConfig = REQUEST_CONFIG) => {
    console.log('REQUEST BODY ' + logTag ,url);
    return async dispatch => {
        dispatch({type:actionTypes.ACTION_REQUEST});

        Axios.get(url,requestConfig)
            .then(response => {
                console.log('SUCCESS RESPONSE ' + logTag ,response);
                if(response.status === 200 || response.status === 201){
                    dispatchSuccess(dispatch,actionTypes.ACTION_SUCCESS,response.data);
                } else {
                    console.log(logTag + ' Error',' Error');
                    dispatchFailed(dispatch,actionTypes.ACTION_FAILED,'ERROR');
                }
            })
            .catch(error=>{
                dispatchFailed(dispatch,actionTypes.ACTION_FAILED,'Internal error. Please try later');
            })

    }

}

/**
 * Method to handle POST Requests
 * @param url
 * @param actionTypes
 * @param logTag
 * @param data
 * @param requestConfig
 * @returns {function(...[*]=)}
 */
export const httpPOST = (url,actionTypes,logTag,data,requestConfig= REQUEST_CONFIG) => {
    console.log('REQUEST BODY ' + logTag ,data);
    return async dispatch => {
        dispatch({type:actionTypes.ACTION_REQUEST});

        Axios.post(url,data,requestConfig)
            .then(response => {
                console.log('SUCCESS RESPONSE ' + logTag ,response);
                if(response.status === 200 || response.status === 201){
                    dispatchSuccess(dispatch,actionTypes.ACTION_SUCCESS,response.data);
                } else {
                    console.log(logTag + ' Error',' Error');
                    dispatchFailed(dispatch,actionTypes.ACTION_FAILED,'Internal error. Please try later');
                }
            })
            .catch(error=>{
                console.log('Error ' + logTag ,error);
                dispatchFailed(dispatch,actionTypes.ACTION_FAILED,'Internal error. Please try later');

            })

    }

}
