import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from 'react-native-config'
import Detail from './src/pages/Detail/Detail';
import Product from './src/pages/Products/Product';
import Login from './src/pages/login/Login'
import AuthProvider from './src/context/authProvider/authProvider';
import { useSelector } from 'react-redux';
// BU DOSYA ROUTER.JS DOSYASIDIR


export default function App() {
  const Stack =createNativeStackNavigator()
  const userSession =useSelector(s =>s.user)
  const isLoading =useSelector(s =>s.AuthLoading)
  return (
    <AuthProvider>

        <NavigationContainer>
        <Stack.Navigator screenOptions={{headershow:false}}>
          {!userSession ? (
           

          <Stack.Screen name ="Login" component={Login} options ={{
            title:"Store",
            headerStyle :{backgroundColor:'#90caf9'},
            headerTitleStyle :{color:'white'}
            
          }}/>
          ):(
            <>
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
          
         
            
            
            </>
          )}
         
          </Stack.Navigator>
  
          
        </NavigationContainer>
          </AuthProvider>
  );
}

