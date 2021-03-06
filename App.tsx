import React from 'react';
import { View, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import Welcome from './src/pages/Welcome'
import UserIdentification from './src/pages/UserIdentification'
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <Routes />
    // <View style={style.container}>
    //   {/* <Welcome /> */}
    //   {/* <UserIdentification /> */}
    // </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bemVindo: {
    fontSize: 35
  }
})
