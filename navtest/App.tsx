import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Screen1 from './Screen1';
import Screen2 from './Screen2';

export type StackParamType = {
  home: undefined,
  details: {id: number, name: string}
}


const Stack = createStackNavigator<StackParamType>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerStyle: {backgroundColor: "teal"}
        }}
      >
        <Stack.Screen 
          name='home' 
          component={Screen1}
          options={{
            title: "Home",
            headerBackTitle: "Back to Details"
          }}
        />
        <Stack.Screen 
          name='details' 
          component={Screen2}
          options={{
            title: "Details",
            headerBackTitle: "Back to Home"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
