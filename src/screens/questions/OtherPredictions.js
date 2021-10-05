import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux';
import styles from './questionsscreenstyle'
import QuestionList from '_components/questionlist';
import { submitAnswerOther } from '_store/actions/questionActions';

const OtherPredictions = (props) => {

    const questionData = props.route.params.from == 'category' ? props.questions.submitAnswerCategory1Data : props.route.params.from == 'disease' ? props.questions.submitAnswerCategory2Data : null;
    useEffect(()=>{
        if(props.questions.submitAnswerOtherData != null ){
            props.navigation.navigate('result',{'from':'other'});
        }
    },[props.questions.submitAnswerOtherData])

    useEffect(()=>{
        if(props.questions.submitAnswerOtherError !=null && Platform.OS == 'android'){
            ToastAndroid.showWithGravityAndOffset(
               (props.image.submitAnswerOtherError || "Something went wrong"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }
    },[props.questions.submitAnswerOtherError])

    return (
        <View style={styles.patientView}>
            <View style={styles.topBar}><Text style={styles.topBarText}>Survay</Text></View>
            <View style={styles.imageContainer}>
                <View style={styles.imageColumn}>{((props.image.imageUploadSuccessData || {}).user_details || {}).file_path ? <Image source={{ uri: props.image.imageUploadSuccessData.user_details.file_path }} style={styles.userImage} /> : <Text>No Image Data</Text>}</View>
                <View style={styles.textColumn}>
                    <Text style={styles.textrow1}>It is not a Bacterial,Fungi or Viral.</Text>
                    <Text style={styles.textrow2}>Please Answer the below questions to identify more</Text>
                </View>
            </View>
            {(questionData || {}).questions && (questionData || {}).questions.length > 0 && <QuestionList questions={(questionData || {}).questions} userDetails={props.image.imageUploadSuccessData ? (props.image.imageUploadSuccessData || {}).user_details : null} loader={props.questions.submitAnswerOtherLoader} submitAnswers={props.submitAnswerOther} />}


        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        questions: state.questions
    }
}

export default connect(mapStateToProps, { submitAnswerOther })(OtherPredictions);