import React, {useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";


export default function iniciarSesion() {
    const navigation = useNavigation();

    

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                
                <TextInput placeholder='Correo electrónico' style={styles.txtInput}>
                </TextInput>

                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput} />

                <TouchableOpacity
                    onPress={() => navigation.navigate("Main")}
                >
                <LinearGradient
                    colors={['#871F1F', '#871F1F']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin}>Ingresar</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("RegistrarCuenta")}>
            <Text style={styles.txtLogin}>Crear una cuenta nueva <Text style={{textDecorationLine: 'underline'}}>Registrate!</Text></Text>
            </TouchableOpacity>
            
            <Text style={ styles.txtForgot}>¿Olvidaste la contraseña? </Text>


                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 128, 127, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtSubtitulo: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 40,
    },
    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 20,
    },
    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    txtForgot:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
        textDecorationLine: 'underline'
    },
});
