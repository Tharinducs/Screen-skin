import React,{useEffect} from 'react'
import { View, Text, Image ,ToastAndroid} from 'react-native'
import { connect } from 'react-redux';
import styles from './questionsscreenstyle'
import QuestionList from '_components/questionlist';
import { submitAnswerCategory2 } from '_store/actions/questionActions';

const QuestionsCategory2 = (props) => {
    useEffect(()=>{
        if(props.questions.submitAnswerCategory2Data != null && (props.questions.submitAnswerCategory2Data || {}).type == 1){
            props.navigation.navigate('result',{'from':'disease'});
        }else if(props.questions.submitAnswerCategory2Data != null && (props.questions.submitAnswerCategory2Data || {}).type == 2){
            props.navigation.navigate('other',{'from':'disease'});
        }
        
    },[props.questions.submitAnswerCategory2Data])

    useEffect(()=>{
        if(props.questions.submitAnswerCategory2Error !=null && Platform.OS == 'android'){
            ToastAndroid.showWithGravityAndOffset(
               (props.image.submitAnswerCategory2Error || "Something went wrong"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }
    },[props.questions.submitAnswerCategory2Error])

    return (
        <View style={styles.patientView}>
            <View style={styles.topBar}><Text style={styles.topBarText}>Survay</Text></View>
            {(props.questions.submitAnswerCategory1Data || {}).questions && (props.questions.submitAnswerCategory1Data || {}).questions.length > 0 && <QuestionList questions={(props.questions.submitAnswerCategory1Data || {}).questions} userDetails={props.questions.submitAnswerCategory1Data ? (props.questions.submitAnswerCategory1Data || {}).user_details : null} loader={props.questions.submitAnswerCategory2Loader} submitAnswers={props.submitAnswerCategory2} prediction={(props.questions.submitAnswerCategory1Data || {}).prediction} type={(props.questions.submitAnswerCategory1Data || {}).type}/>}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        questions: state.questions
    }
}

export default connect(mapStateToProps, { submitAnswerCategory2 })(QuestionsCategory2);