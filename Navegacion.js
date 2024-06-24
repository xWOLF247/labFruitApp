import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import RegistrarCuenta from "./Navegacion/RegisterAccount";
import RegistrarProducto from "./Navegacion/RegisterProduct";
import Main from "./Navegacion/Main";
import IniciarSesion from "./Navegacion/Login";
import Aprender from "./Navegacion/Learn";
import ListarProducto from "./Navegacion/ProductList";

const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="IniciarSesion">

    <Stack.Screen name = "Main" component={Main}/>

    <Stack.Screen name="IniciarSesion" component={IniciarSesion}/>

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