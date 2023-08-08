import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import PRODUCTS from '../data/products';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

const DetailScreen = (props) => {
    const { productId } = props.route.params;
    // console.log(productId);
    const [soluong, setsoluong] = useState(1);
    const availableProducts = useSelector(state => state.filterProducts)

    const product = availableProducts.find(item => item.id === productId)
    // const isFav = availableProducts.some(product => product.id === productId)
    // console.log(isFav);
    // console.log(product);
    const dispatch = useDispatch()
    useEffect(() => props.navigation.setOptions({
        headerRight: () => <TouchableOpacity onPress={() => dispatch({ type: 'THEM_VAO_YEU_THICH', productId: productId })}><Feather name="heart" size={24} color="black" /></TouchableOpacity>
    }), [props.navigation])
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>

            <ScrollView>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                />
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
                <View style={styles.viewrow}>
                    <View>
                        <Text style={styles.textnameto}>{product.name}</Text>
                        <Text style={styles.textnamenho}>
                            {product.name}
                        </Text>
                    </View>
                    <Text style={styles.textbuy}>{product.buy}</Text>
                </View>
                <Text style={styles.textmotachuto}>
                    MÔ TẢ CHI TIẾT:
                </Text>
                <Text style={styles.textmotachunho}>
                    {product.mota}
                </Text>
            </ScrollView>
            <View style={{
                flexDirection: "row",
                width: "100%"
            }}>


                <TouchableOpacity style={styles.backgroundorder} onPress={() => dispatch({ type: 'THEM_VAO_Gio_Hang', productId: productId })}>
                    <Text style={{
                        color: "#FFF",
                        fontSize: 17
                    }}>Đặt hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewadd} onPress={() => dispatch({ type: 'THEM_VAO_Gio_Hang', productId: productId })}>

                    <Text style={{
                        color: "#62636a",
                        fontWeight: "bold",
                        fontSize: 17
                    }}>Thêm vào giỏ</Text>

                </TouchableOpacity>
            </View>

        </View>

    )
};
const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#f6f3fb",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20
    },
    image: {
        height: 300,
        width: "100%",
        alignSelf: "center"
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    textcong: {
        fontWeight: "bold",
        fontSize: 18
    },
    textso: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    viewrow: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 30
    },
    textnameto: {
        fontWeight: "bold",
        fontSize: 25
    },
    textnamenho: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#a4a4a9"
    },
    textbuy: {
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: "auto"
    },
    textmotachuto: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 20
    },
    textmotachunho: {
        color: "#a4a4a9",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: "justify"
    },
    backgroundorder: {
        width: "50%",
        backgroundColor: "#ee4d2d",
        height: 70,
        marginTop: 20,
        borderTopRightRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    viewadd: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    description: {
        fontSize: 20,
    }
});
export default DetailScreen;