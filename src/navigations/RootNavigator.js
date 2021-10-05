import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from '_navigations/AppStackNavigator';

const RootNaviagtor = () =>{
    return (
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      );
}

export default RootNaviagtor;