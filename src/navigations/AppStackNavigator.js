import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '_screens/home'
import QuestionsWithImageScreen from '_screens/questions'
import QuestionsDiseaseScreen from '_screens/questions/Disease';
import OtherPredictionsScreen from '_screens/questions/OtherPredictions';
import ResultScreen from '_screens/result';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name="questions" component={QuestionsWithImageScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name="questionscat" component={QuestionsDiseaseScreen} options={{
            headerShown: false
        }} />
         <Stack.Screen name="other" component={OtherPredictionsScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name="result" component={ResultScreen} options={{
            headerShown: false
        }} />
    </Stack.Navigator>
)