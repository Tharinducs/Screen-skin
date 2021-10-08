import React,{useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux';
import styles from './questionsscreenstyle'
import QuestionList from '_components/questionlist';
import { submitAnswerCategory1 } from '_store/actions/questionActions';
import { API_URL } from '_helpers/constants';

const Questions = (props) => {
    useEffect(()=>{
        if(props.questions.submitAnswerCategory1Data != null && (props.questions.submitAnswerCategory1Data || {}).type == 1){
            props.navigation.navigate('questionscat');
        }else if(props.questions.submitAnswerCategory1Data != null && (props.questions.submitAnswerCategory1Data || {}).type == 2){
            props.navigation.navigate('other',{'from':'category'});
        }
        
    },[props.questions.submitAnswerCategory1Data])

    useEffect(()=>{
        if(props.questions.submitAnswerCategory1Error !=null && Platform.OS == 'android'){
            ToastAndroid.showWithGravityAndOffset(
               (props.image.submitAnswerCategory1Error || "Something went wrong"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }
    },[props.questions.submitAnswerCategory1Error])

    return (
        <View style={styles.patientView}>
            <View style={styles.topBar}><Text style={styles.topBarText}>Survay</Text></View>
            <View style={styles.imageContainer}>
                <View style={styles.imageColumn}>{((props.image.imageUploadSuccessData || {}).user_details || {}).file_path ? <Image source={{ uri: `${API_URL}${((props.image.imageUploadSuccessData || {}).user_details || {}).url}` }} defaultSource={require('_assets/images/loader.png')} style={styles.userImage} /> : <Text>No Image Data</Text>}</View>
                <View style={styles.textColumn}>
                    <Text style={styles.textrow1}>Captured Successfull.</Text>
                    <Text style={styles.textrow2}>Please Answer the below questions</Text>
                </View>
            </View>
            {(props.image.imageUploadSuccessData || {}).questions && (props.image.imageUploadSuccessData || {}).questions.length > 0 && <QuestionList questions={(props.image.imageUploadSuccessData || {}).questions} userDetails={props.image.imageUploadSuccessData ? (props.image.imageUploadSuccessData || {}).user_details : null} loader={props.questions.submitAnswerCategory1Loader} submitAnswers={props.submitAnswerCategory1} />}


        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        questions: state.questions
    }
}

export default connect(mapStateToProps, { submitAnswerCategory1 })(Questions);