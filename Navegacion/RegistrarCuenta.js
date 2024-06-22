import React, {useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import appFB from "../accesoFireBase"
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(appFB)

export default function RegistrarCuenta() {
    const navigation = useNavigation();

    const inicioEstado = {
        nombreCompleto: '',
        email: '',
        clave: '',
      }
    
      const [estado, setEstado] = useState(inicioEstado)
    
      const HandleChangeText = (value, name) => {
    
        setEstado({ ...estado, [name]: value })
    
      }

      const RegistrarUsuario = async () => {
        console.log(estado)
        try {
          // se realiza la petición a la BD
          await addDoc(collection(db, 'usuarios'), { ...estado })
    
          Alert.alert('Alerta', 'El usuario se registró con éxito')
    
          //Se realiza una redirección a LoginApp
          props.navigation.navigate('Login')
    
        } catch {
          console.error(error)
        }
      }

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Registro</Text>
                <Text style={styles.txtSubtitulo}>Crear cuenta nueva</Text>
                <TextInput placeholder='Nombre completo' style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'nombreCompleto')}
                value={estado.nombreCompleto}>
                </TextInput>

                <TextInput placeholder='Correo electrónico' style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'email')}>
                </TextInput>

                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'clave')}
                value={estado.clave} />

                <TextInput placeholder='Comprobar contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>

                <TouchableOpacity onPress={RegistrarUsuario}>
                <LinearGradient
                    colors={['#00C1BB', '#005B58']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin}>Registrarse</Text>
                </LinearGradient>
            </TouchableOpacity>

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
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
});
