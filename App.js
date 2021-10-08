import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from '_store';
import RootNaviagtor from '_navigations/RootNavigator';

import SplashScreen from "react-native-splash-screen";

import { enableScreens } from 'react-native-screens';


enableScreens();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffff8a" />
      <Provider store={store}>
        <RootNaviagtor />
      </Provider>
    </>
  );
}

export default App;
