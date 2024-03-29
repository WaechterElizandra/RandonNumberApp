import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';
import RandomNumberScreen from "./components/RandomNumerScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RandomNumber" component={RandomNumberScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
};
export default App;
