import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from './screens/Home';
import  Cam  from './screens/Cam';
import {createAppContainer,createStackNavigator} from 'react-navigation';

const MainNavigator = createStackNavigator (
  {
  Home:{screen:Home},
  Camera:{screen:Cam}
  },
  {
    defaultNavigationOptions : {
      headerTintColor: "#fff",
      headerStyle:{backgroundColor:"#4834DF"
    },
    headerTitleStyle : {color:"#67E6DC"}
    }
  
});
const App = createAppContainer(MainNavigator);
export default App;










































































