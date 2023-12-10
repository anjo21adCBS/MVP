import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import View1 from '.screens/View1';
import View2 from '.screens/View2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="View1">
        <Stack.Screen name="View1" component={View1} />
        <Stack.Screen name="View2" component={View2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
