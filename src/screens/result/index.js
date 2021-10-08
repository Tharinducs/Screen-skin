import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView,ToastAndroid } from 'react-native'
import { connect } from 'react-redux';
import styles from './resultscreenstyle'
import useIsLargeDevice from '_utils/largeDevice';
import { clearData } from '_store/actions/questionActions';
import { API_URL } from '_helpers/constants';


const Result = (props) => {
    const result = props.route.params.from == 'disease' ? props.questions.submitAnswerCategory2Data : props.route.params.from == 'other' ? props.questions.submitAnswerOtherData : null;
    const isLargeDevice = useIsLargeDevice();
    return (<View style={styles.patientView}>
        <View style={styles.topBar}><Text style={styles.topBarText}>Survay</Text></View>
        <View style={styles.imageContainer}>
            <View style={styles.imageColumn}>{((props.image.imageUploadSuccessData || {}).user_details || {}).file_path ? <Image source={{ uri: `${API_URL}/${((props.image.imageUploadSuccessData || {}).user_details || {}).url}` }} defaultSource={require('_assets/images/loader.png')} style={styles.userImage} /> : <Text>No Image Data</Text>}</View>
            <View style={styles.textColumn}>
                <Text style={styles.textrow1}>{props.route.params.from == 'disease' ? 'DETECTED' : 'NOT DETECTED'}</Text>
                {props.route.params.from == 'disease' ? <Text style={styles.textrow4}>{ `Category : ${(((result || {}).prediction || {}).category || {}).label}` }</Text> : null}
                {props.route.params.from == 'disease' ? <Text style={styles.textrow4}>{ `Percentage : ${(((result || {}).prediction || {}).category || {}).value}` }</Text> : null}
                <Text style={styles.textrow1}>{props.route.params.from == 'disease' ? 'Desease' : 'Can be'}</Text>
                <Text style={styles.textrow4}>{props.route.params.from == 'disease' ? (((result || {}).prediction || {}).disease || {}).label : ((result || {}).category || {}).label}</Text>
                {props.route.params.from == 'disease' ? <Text style={styles.textrow4}>{ `Body Part : ${(((result || {}).prediction || {}).area || {}).label}` }</Text> : null}     
            </View>
        </View>
        {result && (result || {}).guideline && <View style={styles.guidlineContainer}><Text style={styles.guideline}>Guideline :</Text><ScrollView ><Text style={styles.guideline}>{(result || {}).guideline}</Text></ScrollView></View>}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={isLargeDevice ? styles.largeClickButton : styles.clickButton} onPress={()=>{
                props.clearData()
                props.navigation.navigate('home');
            }}>
                <Text style={styles.clickButtonText}>
                    Test Again
                </Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        questions: state.questions
    }
}


export default connect(mapStateToProps, {clearData})(Result);