import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Main() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Bienvenidos a la aplicación App Fruit</Text>


                <TouchableOpacity 
                    onPress={() => navigation.navigate("RegistrarProducto")}
                >
                    <Text style={styles.txtGeneral}>Registrar Producto</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate("ListarProducto")}
                >
                    <Text style={styles.txtGeneral}>Lista de productos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Aprender")}
                >
                    <Text style={styles.txtGeneral}>Aprender+</Text>
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
        alignItems: 'center',
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
        fontSize: 30,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 40,
    },

    txtGeneral: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#871F1F',
        textAlign: 'center',
        margin: 30,
    },

});
