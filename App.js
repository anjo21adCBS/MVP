//App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import View1 from './screens/view1';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View1 />
      <StatusBar style="auto" />
    </View>
  );
}
