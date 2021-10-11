import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import normalize from '_utils/fontsize';

export const CameraModel = (props) => {
  const {
    isVisible,
    toggleModal,
    message,
    setIsVisible,
    openCamera,
    openPicker,
  } = props;
  return (
    <View>
      <Modal isVisible={isVisible} swipeDirection="up" style={styles.modal}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <View style={{width: '100%', height: '40%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity
              onPress={openCamera}
              hitSlop={{top: 10, bottom: 10, left: 50, right: 50}}
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignSelf: 'center',
                backgroundColor: '#B2BEB5',
                height:'100%',
                width: '45%',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: '2%',
                paddingBottom: '2%',
                justifyContent:'center',
                borderRadius:10
              }}>
              <View style={{flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                <Icon name="camera" size={normalize(40)} color={'#ffffff'} />
                <Text
                  style={{
                    marginLeft: '2%',
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize:normalize(15)
                  }}>
                      Launch Camera
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openPicker}
              hitSlop={{top: 10, bottom: 10, left: 50, right: 50}}
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignSelf: 'center',
                height:'100%',
                backgroundColor: '#B2BEB5',
                width: '45%',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: '5%',
                paddingBottom: '5%',
                justifyContent:'center',
                borderRadius:10
              }}>
              <View style={{flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                <Icon name="images-outline" size={normalize(40)} color={'#ffffff'} />
                <Text style={{marginLeft: '2%', color: '#ffffff',fontSize:normalize(15)}}>
                  open Gallery
                </Text>
              </View>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity
              style={{marginTop:10,backgroundColor: '#B2BEB5',
              width: 250,
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 15,
              paddingBottom: 15,
              alignItems: 'center',
              borderRadius: 18,
              justifyContent:'space-around',
              flexDirection:'row',}}
              onPress={() => toggleModal(setIsVisible, isVisible)}
              hitSlop={{top: 5, bottom: 5, left: 50, right: 50}}>
              <Text style={{marginLeft: '2%', color: '#ffffff',fontSize:normalize(15)}}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    color: '#ff3d3d',
    textAlign: 'center',
    marginTop: '5%',
  },
  modal: {
    justifyContent: 'center',
    borderRadius:30,
    margin: 30,
  },
});
