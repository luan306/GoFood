import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import PRODUCTS from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CartScreen = (props) => {
    const [soluong, setsoluong] = useState(1);
    const dispatch = useDispatch()
    const giohang = useSelector(state => state.giohang)
    console.log(giohang)
    if (giohang.length !== 0) {
        return (
            <FlatList
                data={giohang}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })}
                    >
                        <View style={styles.card}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.desc}>
                                <Text style={styles.title}>Product: {item.name}</Text>
                                <Text style={styles.title}>{item.name}</Text>
                                <View style={styles.view}>
                                    <TouchableOpacity onPress={() => setsoluong(soluong - 1)}>
                                        <Text style={styles.textcong}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textso}>
                                        {soluong}
                                    </Text>
                                    <TouchableOpacity onPress={() => setsoluong(soluong + 1)}>
                                        <Text style={styles.textcong}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.title}>Giá: {item.buy}</Text>

                            </View>
                            <TouchableOpacity onPress={() => dispatch({ type: 'Xóa_Gio_Hang', productId: item.id })} >
                                <Text style={styles.textcon} >Xóa</Text>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>

                }
                keyExtractor={item => item.id}
            />
        )
    } else {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')}>
                <Image source={require('../images/16.png')}
                    style={{ height: 200, width: 280, alignSelf: 'center' }}

                />
            </TouchableOpacity>)
    }
};
const styles = StyleSheet.create({

    card: {
        marginTop: 30,
        height: 125,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
    image: {
        height: 150,
        width: '30%',
    },
    desc: {
        paddingLeft: 10,

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
    textcon: {

        marginTop: 80,
        width: 50,
        height: 25,
        borderWidth: 1,
        textAlign: 'center',
        color: 'red'


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

});
export default CartScreen;