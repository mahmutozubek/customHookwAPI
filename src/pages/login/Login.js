import React from "react";
import { View, Text, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Login.style";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import usePost from "../../components/hooks/usePost/usePost";
export default function Login({navigation}) {

    const url ="https://fakestoreapi.com/auth/login"

    const {data,loading,error,post} =usePost()

    const dispatch =useDispatch()

    function handleLogin(values) {
      post(url, values);
      
    }
    
    if(error){
     
    }
   
    if(data){
      console.log(data)
      if(!data){
        Alert.alert("Dükkan","User does'nt exist")
      }
      else{
        dispatch =useDispatch({type:'SET_USER',payload:{user}})
       
        navigation.navigate('ProductScreen')
      }
     
    
    }
    
  
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../../assests/loginicon.png")}
        />
      </View>
      <Formik
      initialValues={{username:'',password:''}} onSubmit ={handleLogin}
      >
        {({handleSubmit,handleChange,values}) => (
          <View style={styles.bodyContainer}>

            <Input placeholder="Enter Your Username:" value ={values.username} onType ={handleChange('username')} iconName={"account"}/>
            
            <Input placeholder="Enter Your Password:" value={values.password} onType ={handleChange('password')} iconName={"key"} isSecure={false}/>
            <Button text="Log in" onPress={handleSubmit} loading ={loading}/>
          </View>
        )}
      </Formik>
    </View>
  );
}
