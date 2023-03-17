import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from 'react-native-config'
import Detail from './src/pages/Detail/Detail';
import Product from './src/pages/Products/Product';
// BU DOSYA ROUTER.JS DOSYASIDIR


export default function App() {
  const Stack =createNativeStackNavigator()
  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headershow:false}}>

          <Stack.Screen name ="ProductScreen" component={Product} options ={{
            title:"Store",
            headerStyle :{backgroundColor:'#90caf9'},
            headerTitleStyle :{color:'white'}

}}/>
          <Stack.Screen name ="DetailScreen" component={Detail} options={{
            title:"Details",
            headerStyle :{backgroundColor:'#90caf9'},
            headerTitleStyle :{color:'white'},
            headerTintColor:'white',
          }}/>
          
          </Stack.Navigator>

        </NavigationContainer>
  );
}

