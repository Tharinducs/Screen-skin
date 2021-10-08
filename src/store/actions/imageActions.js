import axios from "axios";
import { API_URL, UPLOAD_IMAGE_ERROR, UPLOAD_IMAGE_LOADER, UPLOAD_IMAGE_SUCCESS } from "_helpers/constants.js";



export const uploadImage = (imageData) => {
    let fileData = {
        file:imageData
    }
    

    return async dispatch => {
        imageUploadLoader(dispatch);
        axios.post(`${API_URL}/capture`, fileData).then((data) => {
            imageUploadSuccess(dispatch, data.data)
        }).catch((err) => {
            if (err.request && err.request.response && err.request.status !== 500) {
                imageUploadError(dispatch, err.request.response);
            } else {
                imageUploadError(dispatch, "Something went wrong");
            }
        })
    }


}


const imageUploadLoader = (dispatch) => dispatch({ type: UPLOAD_IMAGE_LOADER });
const imageUploadSuccess = (dispatch, payload) => dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload });
const imageUploadError = (dispatch, error) => dispatch({ type: UPLOAD_IMAGE_ERROR, error });
