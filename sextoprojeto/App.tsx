// //--------------------Exemplo NativeStackNavigator---------------------

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from './screens/home';
// import AboutScreen from './screens/about';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={HomeScreen} />
//         <Stack.Screen name='About' component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//--------------------Exemplo TabNavigator---------------------

// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; //npm install react-native-vector-icons
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import HomeScreen from './screens/home';
// import AboutScreen from './screens/about';

// const Tab = createBottomTabNavigator();

// //const Tab = createMaterialTopTabNavigator(); //npm install @react-navigation/material-top-tabs react-native-pager-view

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

//--------------------Exemplo DrawerNavigator---------------------

import 'react-native-gesture-handler';
import * as React from 'react';
 import { View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';

 import HomeScreen from './screens/home';
 import AboutScreen from './screens/about';
 import TelaStyleScreen from './screens/telaStyle';
 import AnimationScreen from './screens/animation';
 import LayoutAnimationScreen from './screens/layoutAnimation';

 const Drawer = createDrawerNavigator();

 function App() {
     return (
     <NavigationContainer>
         <Drawer.Navigator initialRouteName='Home'>
         <Drawer.Screen name='Home' component={HomeScreen} />
         <Drawer.Screen name='About' component={AboutScreen} />
         <Drawer.Screen name='TelaStyle' component={TelaStyleScreen} />
         <Drawer.Screen name='Animation' component={AnimationScreen} />
         <Drawer.Screen name='Layout-Animation' component={LayoutAnimationScreen} />
         </Drawer.Navigator>
     </NavigationContainer>
     );
 }

 export default App;