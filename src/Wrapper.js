import React from "react";
import App from '../App'
import AuthProvider from "./context/authProvider/authProvider";

export default function Wrapper() {
    return(
      <AuthProvider>
        <App/>
      </AuthProvider>
    )
}