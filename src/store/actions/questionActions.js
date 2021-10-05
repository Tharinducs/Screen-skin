import { CLEAR_QUESTION_DATA,SUBMIT_ANSWER_OTHER_ERROR, SUBMIT_ANSWER_OTHER_LOADER, SUBMIT_ANSWER_OTHER_SUCCESS,SUBMIT_ANSWER_COM1_ERROR, SUBMIT_ANSWER_COM1_LOADER, SUBMIT_ANSWER_COM1_SUCCESS,SUBMIT_ANSWER_COM2_ERROR, SUBMIT_ANSWER_COM2_LOADER, SUBMIT_ANSWER_COM2_SUCCESS,API_URL } from '_helpers/constants';
import axios from "axios";


export const submitAnswerCategory1 = (answers) => {
    
    return dispatch => {
        submitAnswerCategory1Loader(dispatch);
        axios.post(`${API_URL}/category-questionnaire`, answers,{}).then((data)=>{
            submitAnswerCategory1Success(dispatch,data.data)
        }).catch((err)=>{
            if (err.request && err.request.response && err.request.status !== 500) {
                submitAnswerCategory1Error(dispatch,err.request.response);
              } else {
                submitAnswerCategory1Error(dispatch,"Something went wrong");
              }
        })
    }


}

export const submitAnswerCategory2 = (answers) => {
    

    return dispatch => {
        submitAnswerCategory2Loader(dispatch);
        axios.post(`${API_URL}/disease-questionnaire`, answers,{}).then((data)=>{
            submitAnswerCategory2Success(dispatch,data.data)
        }).catch((err)=>{
            if (err.request && err.request.response && err.request.status !== 500) {
                submitAnswerCategory2Error(dispatch,err.request.response);
              } else {
                submitAnswerCategory2Error(dispatch,"Something went wrong");
              }
        })
    }


}

export const submitAnswerOther = (answers) => {
    

    return dispatch => {
        submitAnswerOtherLoader(dispatch);
        axios.post(`${API_URL}/other-prediction`, answers,{}).then((data)=>{
            submitAnswerOtherSuccess(dispatch,data.data)
        }).catch((err)=>{
            if (err.request && err.request.response && err.request.status !== 500) {
                submitAnswerOtherError(dispatch,err.request.response);
              } else {
                submitAnswerOtherError(dispatch,"Something went wrong");
              }
        })
    }


}


export const clearData = ()=>{
    return dispatch=>dispatch({ type: CLEAR_QUESTION_DATA });
}


const submitAnswerCategory1Loader = (dispatch) => dispatch({ type: SUBMIT_ANSWER_COM1_LOADER });
const submitAnswerCategory1Success = (dispatch, payload) => dispatch({ type: SUBMIT_ANSWER_COM1_SUCCESS, payload });
const submitAnswerCategory1Error = (dispatch, error) => dispatch({ type: SUBMIT_ANSWER_COM1_ERROR, error });

const submitAnswerCategory2Loader = (dispatch) => dispatch({ type: SUBMIT_ANSWER_COM2_LOADER });
const submitAnswerCategory2Success = (dispatch, payload) => dispatch({ type: SUBMIT_ANSWER_COM2_SUCCESS, payload });
const submitAnswerCategory2Error = (dispatch, error) => dispatch({ type: SUBMIT_ANSWER_COM2_ERROR, error });


const submitAnswerOtherLoader = (dispatch) => dispatch({ type: SUBMIT_ANSWER_OTHER_LOADER });
const submitAnswerOtherSuccess = (dispatch, payload) => dispatch({ type: SUBMIT_ANSWER_OTHER_SUCCESS, payload });
const submitAnswerOtherError = (dispatch, error) => dispatch({ type: SUBMIT_ANSWER_OTHER_ERROR, error });


