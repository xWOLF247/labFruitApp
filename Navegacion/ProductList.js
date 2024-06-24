import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import appFB from "../accesoFireBase";

const db = getFirestore(appFB);

export default function ListarProducto() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Products'));
                const productosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(productosList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching productos: ", error);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#871F1F" />
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Productos Registrados</Text>
                <FlatList
                    data={productos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>Nombre: {item.nombreProducto}</Text>
                            <Text style={styles.itemText}>Código: {item.codigoProducto}</Text>
                            <Text style={styles.itemText}>Cantidad: {item.cantidad}</Text>
                            <Text style={styles.itemText}>Fecha de Caducidad: {item.fechaCad}</Text>
                        </View>
                    )}
                />
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
        flex: 1,
        padding: 24,
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'center',
        marginBottom: 20,
        
    },
    itemContainer: {
        // Color de fondo productos
        backgroundColor: '#837B7B',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 18,
    },
});
