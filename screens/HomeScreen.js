import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';

import CATEGORIES from '../data/categories';

const HomeScreen = (props) => {

    useEffect(() => props.navigation.setOptions({
        headerLeft: () =>
            <TouchableOpacity
                onPress={() => props.navigation.openDrawer()}
            >
                <Ionicons name="ios-menu" size={40} color="black" />
            </TouchableOpacity>
    }), [props.navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <View style={{ marginEnd: "auto" }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.openDrawer()}
                    >
                        <Fontisto style={{ marginLeft: 5 }} name="nav-icon-list" size={25} color="black" />
                    </TouchableOpacity></View>
                <Image source={require('../images/icon-thiet-ke-linh-vuc-logo-dich-vu-nha-hang-ca-phe-giai-tri-baa-brand-1.png')} style={styles.headerLogo} />
                <Text style={styles.headerText}>FOOD</Text>
                <View >
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('CartScreen')}
                    >
                        <MaterialIcons name="shopping-cart" size={35} color="black" />
                    </TouchableOpacity></View>
            </View>
            <View style={{ flex: 1 }}>
                {/* <Text style={styles.title}>Chosse Food</Text> */}
                <FlatList
                    data={CATEGORIES}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('ProductsScreen', { categoryId: item.id })}
                        >
                            <View style={styles.viewnew}>
                                {/* <View style={[styles.view, { backgroundColor: item.color }]}> */}
                                <View style={styles.view}>
                                    <Image style={styles.image} source={{ uri: item.image }} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    view: {
        // borderWidth: 2,
        // padding: 10,
        // margin: 10
        backgroundColor: "#f5f5fa",
        height: 280,
        width: 500,
        borderRadius: 20,
        marginRight: 10,
    },
    image: {
        width: "auto",
        height: "100%",
        borderRadius: 20,
        // opacity: 0.9,

    },
    viewnew: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,

    },
    text: {
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: -150,
        color: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 40,
        backgroundColor: '#ee4d2d'
    },
    headerLogo: {
        width: 50,
        height: 50,
        marginRight: 5,
        marginEnd: 20
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginRight: "auto"
    },
    title: {
        fontWeight: '300',
        fontSize: 27,
        marginVertical: 10,
        marginLeft: 10,
        color: '#333333',
        fontWeight: 'bold',
    },
});
export default HomeScreen;
