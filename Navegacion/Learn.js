import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ActivityIndicator, FlatList } from 'react-native';

export default function Aprender(){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const getFruits = async () => {
        try {
            const response = await fetch('https://www.fruityvice.com/api/fruit/all');
            const json = await response.json();
            console.log(data);
            setData(json);
            setFilteredData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFruits();
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        const newData = data.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
    };
    
    
    return (    
            <View style={{ flex: 1, padding: 24 }}>
                <TextInput 
                 style={styles.searchBar}
                placeholder="Buscar frutas"
                value={search}
                onChangeText={text => handleSearch(text)}
                />
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>Nombre: {item.name}</Text>
                            <Text style={styles.itemText}>ID: {item.id}</Text>
                            <Text style={styles.itemText}>Familia: {item.family}</Text>
                            <Text style={styles.itemText}>Orden: {item.order}</Text>
                            <Text style={styles.itemText}>Genus: {item.genus}</Text>
                            <Text style={styles.itemText}>Nutrition: {JSON.stringify(item.nutritions)}</Text>
                        </View>
                    )}
                />
                )}
                <StatusBar style="auto" />
            </View>
          
       
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
});