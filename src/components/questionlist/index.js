import React from 'react'
import { View, ScrollView, Text, TouchableOpacity,ActivityIndicator } from 'react-native';
import { useFormik } from 'formik'
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

const getValidationSchema = (questions) => {
    let validation = {}
    questions.map((item, index) => {
        let schema = Yup.string().required('Required')
        validation[(item || {}).shortcode] = schema;
    })

    return validation;

}


const QuestionList = (props) => {
    const { questions,submitAnswers, userDetails,loader } = props
    const formik = useFormik({
        initialValues: setInitialValues(questions),
        onSubmit: values => {
            const formData= {
                "user_details":{
                    ...userDetails
                },
                "questions":{
                    ...values
                }
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
                        return <>
                            <View key={index}>
                                <Text style={styles.questionText}>{index + 1}.{(item || {}).question}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                        </>
                    })}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={isLargeDevice ? styles.largeClickButton : styles.clickButton} onPress={formik.handleSubmit} disabled={loader}>
                    {loader ? <ActivityIndicator size={20}/> :<Text style={styles.clickButtonText}>
                        Submit
                    </Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuestionList;