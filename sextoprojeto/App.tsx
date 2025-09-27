import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/home';
import AboutScreen from './screens/about';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; //npm install react-native-vector-icons

// import HomeScreen from './screens/home';
// import AboutScreen from './screens/about';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ size }) => (<Ionicons name="home-outline" size={size} />),}}/>
//         <Tab.Screen name="About" component={AboutScreen} options={{tabBarIcon: ({ size }) => (<Ionicons name="information-circle-outline" size={size} /> ),}} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import 'react-native-gesture-handler';
// import * as React from 'react';
//  import { View, Text } from 'react-native';
//  import { NavigationContainer } from '@react-navigation/native';
//  import { createDrawerNavigator } from '@react-navigation/drawer';

//  import HomeScreen from './screens/home';
//  import AboutScreen from './screens/about';

//  const Drawer = createDrawerNavigator();

//  function App() {
//      return (
//      <NavigationContainer>
//          <Drawer.Navigator initialRouteName='Home'>
//          <Drawer.Screen name='Home' component={HomeScreen} />
//          <Drawer.Screen name='About' component={AboutScreen} />
//          </Drawer.Navigator>
//      </NavigationContainer>
//      );
//  }

//  export default App;