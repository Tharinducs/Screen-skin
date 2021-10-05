import { CLEAR_QUESTION_DATA,SUBMIT_ANSWER_OTHER_ERROR, SUBMIT_ANSWER_OTHER_LOADER, SUBMIT_ANSWER_OTHER_SUCCESS, SUBMIT_ANSWER_COM1_ERROR, SUBMIT_ANSWER_COM1_LOADER, SUBMIT_ANSWER_COM1_SUCCESS, SUBMIT_ANSWER_COM2_ERROR, SUBMIT_ANSWER_COM2_LOADER, SUBMIT_ANSWER_COM2_SUCCESS } from "_helpers/constants.js";

const initialValues = {
    submitAnswerCategory1Loader: false,
    submitAnswerCategory1Error: null,
    submitAnswerCategory1Data: null,
    submitAnswerCategory2Loader: false,
    submitAnswerCategory2Error: null,
    submitAnswerCategory2Data: null,
    submitAnswerOtherLoader: false,
    submitAnswerOtherError: null,
    submitAnswerOtherData: null
}

const image = (state = initialValues, action) => {
    switch (action.type) {
        case SUBMIT_ANSWER_COM1_LOADER:
            return {
                ...state,
                submitAnswerCategory1Loader: true,
                submitAnswerCategory1Error: null,
                submitAnswerCategory1Data: null
            }
        case SUBMIT_ANSWER_COM1_SUCCESS:
            return {
                ...state,
                submitAnswerCategory1Loader: false,
                submitAnswerCategory1Error: null,
                submitAnswerCategory1Data: action.payload
            }
        case SUBMIT_ANSWER_COM1_ERROR:
            return {
                ...state,
                submitAnswerCategory1Loader: false,
                submitAnswerCategory1Error: action.error,
                submitAnswerCategory1Data: null
            }
        case SUBMIT_ANSWER_COM2_LOADER:
            return {
                ...state,
                submitAnswerCategory2Loader: true,
                submitAnswerCategory2Error: null,
                submitAnswerCategory2Data: null
            }
        case SUBMIT_ANSWER_COM2_SUCCESS:
            return {
                ...state,
                submitAnswerCategory2Loader: false,
                submitAnswerCategory2Error: null,
                submitAnswerCategory2Data: action.payload
            }
        case SUBMIT_ANSWER_COM2_ERROR:
            return {
                ...state,
                submitAnswerCategory2Loader: false,
                submitAnswerCategory2Error: action.error,
                submitAnswerCategory2Data: null
            }
        case SUBMIT_ANSWER_OTHER_LOADER:
            return {
                ...state,
                submitAnswerOtherLoader: true,
                submitAnswerOtherError: null,
                submitAnswerOtherData: null
            }
        case SUBMIT_ANSWER_OTHER_SUCCESS:
            return {
                ...state,
                submitAnswerOtherLoader: false,
                submitAnswerOtherError: null,
                submitAnswerOtherData: action.payload
            }
        case SUBMIT_ANSWER_OTHER_ERROR:
            return {
                ...state,
                submitAnswerOtherLoader: false,
                submitAnswerOtherError: action.error,
                submitAnswerOtherData: null
            }
        case CLEAR_QUESTION_DATA:
            return {
                submitAnswerCategory1Loader: false,
                submitAnswerCategory1Error: null,
                submitAnswerCategory1Data: null,
                submitAnswerCategory2Loader: false,
                submitAnswerCategory2Error: null,
                submitAnswerCategory2Data: null,
                submitAnswerOtherLoader: false,
                submitAnswerOtherError: null,
                submitAnswerOtherData: null
            }
        default:
            return state;
    }
}

export default image;