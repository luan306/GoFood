import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, TouchableOpacity, FlatList, Image } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import PRODUCTS from '../data/products';
import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';

const ShowAllScreen = (props) => {
    const products = useSelector(state => state.products)
    return (
        <View>
            <View style={styles.header}>
                <View style={{ marginEnd: "auto" }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.openDrawer()}
                    >
                        <Fontisto style={{ marginLeft: 5 }} name="nav-icon-list" size={25} color="black" />
                    </TouchableOpacity></View>
                <Text style={styles.headerText}>SHOW-ALL</Text>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })}
                    >
                        <View style={styles.card}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.desc}>
                                <Text style={styles.title}>Product: {item.name}</Text>

                                <Text style={styles.title}>Giá: {item.buy}</Text>

                            </View>

                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        height: 125,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        // borderWidth: 1,
        // borderBottomWidth: 1,
    },
    image: {
        height: 150,
        width: '40%',
    },
    desc: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    title: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 15
    },
    qty: {
        marginBottom: 10
    },
    text: {
        fontSize: 14,
        textAlign: 'center',

    },
    textcong: {
        fontWeight: "bold",
        fontSize: 14
    },
    textso: {
        fontSize: 14,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    view: {
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        backgroundColor: "#f6f3fb",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 40,
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 'auto'
    },

});
export default ShowAllScreen;