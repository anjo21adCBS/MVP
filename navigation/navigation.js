//Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import View1 from '../screens/view1'
import View2 from '../screens/view2'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="View1">
        <Stack.Screen name="View1" component={View1} options={{ title: 'Oversigt' }} />
        <Stack.Screen name="View2" component={View2} options={{ title: 'Opgave Detaljer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
