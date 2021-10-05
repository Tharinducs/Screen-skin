import { UPLOAD_IMAGE_ERROR, UPLOAD_IMAGE_LOADER, UPLOAD_IMAGE_SUCCESS } from "_helpers/constants.js";

const initialValues = {
    imageUploadLoader: false,
    imageUploadError: null,
    imageUploadSuccessData: null
}

const image = (state = initialValues, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE_LOADER:
            return {
                ...state,
                imageUploadLoader: true,
                imageUploadError: null,
                imageUploadSuccessData: null
            }
        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state, 
                imageUploadLoader: false,
                imageUploadError: null,
                imageUploadSuccessData: action.payload
            }
        case UPLOAD_IMAGE_ERROR:
            return {
                ...state,
                imageUploadLoader: false,
                imageUploadError: action.error,
                imageUploadSuccessData: null
            }
        default:
            return state;
    }
}

export default image;