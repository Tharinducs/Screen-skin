import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup'
import { RadioButton } from 'react-native-paper';
import styles from '_components/questionlist/questionliststyles';
import useIsLargeDevice from '_utils/largeDevice';

const setInitialValues = (questions) => {
    let initialValues = {}
    questions.map((item, index) => {
        initialValues[(item || {}).shortcode] = ""
    })
    return initialValues;
}

const QuestionList = (props) => {
    const { questions, submitAnswers, userDetails, loader, prediction, type } = props
    const formik = useFormik({
        initialValues: setInitialValues(questions),
        onSubmit: values => {
            const formData = {
                "user_details": {
                    ...userDetails
                },
                "questions": {
                    ...values
                },
                "prediction": prediction ? {
                    ...prediction
                } : null,
                "type": type || 0
            }

            submitAnswers(formData)
        }
    })
    const isLargeDevice = useIsLargeDevice();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.questionContainer}>
                    {questions.map((item, index) => {
                        return <View key={index}>
                            <Text style={styles.questionText}>{index + 1}.{(item || {}).question}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                <RadioButton.Group onValueChange={newValue => formik.setFieldValue((item || {}).shortcode, newValue)} value={formik.values[(item || {}).shortcode]}>
                                    {(item || {}).answers && (item || {}).answers.length > 0 && (item || {}).answers.map((answerItem, indexID) => {
                                        let key = Object.keys(answerItem)[0];
                                        let value = answerItem[key];
                                        return <View style={styles.radioButtonRow} key={indexID}>
                                            <View><RadioButton value={key} /></View>
                                            <View><Text style={styles.answerText}>{value}</Text></View>
                                        </View>
                                    })}
                                </RadioButton.Group>
                            </View>
                        </View>
                    })}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={isLargeDevice ? styles.largeClickButton : styles.clickButton} onPress={formik.handleSubmit} disabled={loader}>
                    {loader ? <ActivityIndicator size={20} /> : <><Icon name="rocket-outline" size={30} color="#ffffff" /><Text style={styles.clickButtonText}>
                        Submit
                    </Text></>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuestionList;