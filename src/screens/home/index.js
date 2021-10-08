import React, { useEffect, useState } from 'react'
import { View, Text, Image, Platform, ActivityIndicator,ToastAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import skinImage from '_assets/images/skin.png'
import styles from './homescreenstyle'
import useIsLargeDevice from '_utils/largeDevice'
import { launchCamera } from 'react-native-image-picker';
import { uploadImage } from '_store/actions/imageActions'

const handleCamera = (uploadPicture,setLoader) => {
    const options = {
        title: "Take snapshot of deceased area",
        mediaType: 'photo',
        quality: 0.5,
        includeBase64:true,

        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    }

    try {
        launchCamera(options, (response) => {
            if ((response || {}).didCancel) {
                console.log('User cancelled image picker');
            } else if ((response || {}).errorMessage) {
                console.log('ImagePicker Error: ', (response || {}).errorMessage);
            } else {
                if ((response || {}).assets && (response || {}).assets.length > 0) {
                    var responseData = (response || {}).assets[0];
                    // responseData.uri = Platform.OS === 'android'
                    //     ? responseData.uri
                    //     : responseData.uri.replace('file://', '')
                    setLoader(true);
                    uploadPicture(responseData.base64);
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const Home = (props) => {
    const [loader,setLoader] = useState(false)
    const isLargeDevice = useIsLargeDevice();
    useEffect(()=>{
        if(props.image.imageUploadSuccessData != null){
            props.navigation.navigate('questions');
            setTimeout(()=>{
                setLoader(false);
            },1000)
        }
    },[props.image.imageUploadSuccessData])

    useEffect(()=>{
        if(props.image.imageUploadError !=null && Platform.OS == 'android'){
            ToastAndroid.showWithGravityAndOffset(
               (props.image.imageUploadError || "Something went wrong"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }
    },[props.image.imageUploadError])

    return (
        <>
            {loader || props.image.imageUploadLoader ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={80}/></View> : <View style={styles.patientView}>
                <View style={styles.imageContainer}>
                    <Image source={skinImage} style={styles.image} resizeMode={Platform.OS === 'android' ? 'center' : 'contain'} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Take a snapshot of your deceased area</Text>
                    <TouchableOpacity style={isLargeDevice ? styles.largeClickButton : styles.clickButton} onPress={() => handleCamera(props.uploadImage,setLoader)}>
                        <Text style={styles.clickButtonText}>
                            Click Here
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>}

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, { uploadImage })(Home);