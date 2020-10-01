/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent'
import { WebView } from 'react-native-webview';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
    //     <Drawer.Screen name="Home" component={MainTabScreen} />
    //     {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <WebView source={{ uri: 'https://sertifikasiku.com/' }} />

  );
};

export default App;
