import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, TouchableOpacity, FlatList, Image, TextInput, SafeAreaView, SearchBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import PRODUCTS from '../data/products';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = (props) => {
    const products = useSelector(state => state.SearchProducts);
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch();
    // const products = useSelector(state => state.products)

    return (
        <View>
            <SafeAreaView
                style={{
                    backgroundColor: '#fff',
                    height: "100%",
                    paddingHorizontal: 20,
                }}>
                <View style={styles.viewinput}>
                    <Icon size={30} name="search" />
                    <TextInput
                        style={{ fontSize: 18, marginLeft: 5 }}
                        placeholder="Search..."
                        onChangeText={(value) => setValue(value)}
                        value={value}
                        onIconPress={() => {
                            dispatch({
                                type: 'TIM_KIEM',
                                search: value
                            })
                        }}
                        onSubmitEditing={() => {
                            dispatch({
                                type: 'TIM_KIEM',
                                search: value
                            })
                        }}
                    />
                </View>
                {/* <SearchBar
                    placeholder="Search..."
                    onChangeText={(value) => setValue(value)}
                    value={value}
                    onIconPress={() => {
                        dispatch({
                            type: 'TIM_KIEM',
                            search: value
                        })
                    }}
                    onSubmitEditing={() => {
                        dispatch({
                            type: 'TIM_KIEM',
                            search: value
                        })
                    }}
                /> */}
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
            </SafeAreaView>
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
    viewinput: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 25,
        borderWidth: 2,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
});
export default SearchScreen;