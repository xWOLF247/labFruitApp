import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import RegistrarCuenta from "./Navegacion/RegistrarCuenta";
import RegistrarProducto from "./Navegacion/RegistrarProducto";
import Main from "./Navegacion/Principal";
import iniciarSesion from "./Navegacion/Login";
import Aprender from "./Navegacion/Aprender+";
import ListarProducto from "./Navegacion/ListarProducto";

const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="Login">

    <Stack.Screen name = "Main" component={Main}/>

    <Stack.Screen name="Login" component={iniciarSesion}/>

    <Stack.Screen name="RegistrarCuenta" component={RegistrarCuenta}/>

    <Stack.Screen name="RegistrarProducto" component={RegistrarProducto}/>

    <Stack.Screen name="Aprender" component={Aprender}/>

    <Stack.Screen name="ListarProducto" component={ListarProducto}/>

    </Stack.Navigator> 
)}

export default function Navegacion() {
    return( 

        <NavigationContainer>
            <Stacks/>
        </NavigationContainer>

      );
}