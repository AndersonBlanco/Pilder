/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren, JSX} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TestImg from "./assets/logo.png"; 

//redux
import { Provider, useSelector, useDispatch } from 'react-redux';
//import { getState, store } from './store';
//import { nav, selectNavigation, render } from './navigationSlice';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

//screens: 
import AuthScreen from './Screens/AuthScreen';
import IntroCustomization from './Screens/introCustomization';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import BottomNav from './components/BottomNav';
import Permissions from './Screens/Permissions';
import MyPillPals from './Screens/myPillPals';

import { createStaticNavigation, NavigationContainer, DefaultTheme } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator(); 

function TestScreen(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <View style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
   <SafeAreaView>
    <Text style = {{color: "white"}}>Hello Universe</Text>
    <Image source={TestImg} />

   </SafeAreaView>
  </View>
  )
}
export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

//let currentId: number = navState.routes[navState.currentRoute].id; 
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Auth" component={AuthScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}

 


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: -100,
    //transitionDuration: "1s",   
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

 