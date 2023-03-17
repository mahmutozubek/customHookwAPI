import React from "react";
import LottieView from 'lottie-react-native'

export default function Loading(){
    return(
        <LottieView source={require('../../assests/loading.json')} autoPlay/>
    )
}