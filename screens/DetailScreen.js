import React from 'react';
import {View, Text, Button} from 'react-native';
// import WrappedCard from '../components/WrappedCard';
import { WebView } from 'react-native-webview';


const DetailScreen = () => {
  return (
    // <View>
    //   <WrappedCard />
      <WebView source={{ uri: 'https://sertifikasiku.com/' }} />
    // </View>
  );
};

export default DetailScreen;
