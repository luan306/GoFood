import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import PRODUCTS from '../data/products';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const ProductsScreen = (props) => {

    const { categoryId } = props.route.params;
    // console.log(categoryId);

    const availableProducts = useSelector((state) => state.filterProducts)
    console.log(availableProducts)

    const products = availableProducts.filter(item => item.categoryId === categoryId)
    // console.log(products);
    props.navigation.setOptions({
        headerRight: () => <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}><MaterialIcons name="shopping-cart" size={24} color="black" /></TouchableOpacity>
    }), [props.navigation]
    return (


        <SafeAreaView
            style={{
                backgroundColor: '#fff',
                height: "100%",
                paddingHorizontal: 20,
            }}>
            {/* <View style={styles.viewsearch}>
                <Icon size={30} name="search" />
                <TextInput
                    style={{ fontSize: 18, marginLeft: 5 }}
                    placeholder="Search for anything"
                />
            </View> */}

            <View style={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: 10
            }}>
                <View style={{
                    width: "50%"
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold"
                    }}>New Products</Text>
                </View>
                <View style={{
                    width: "50%",
                    alignItems: "flex-end"
                }}>

                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}

            >
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HomeScreen')}
                        style={styles.viewback}
                    >
                        <View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                alignSelf: "center",
                                marginTop: 20
                            }}>

                                <Text style={{
                                    paddingHorizontal: 10,
                                    fontWeight: "bold",
                                    fontSize: 15
                                }}>
                                    290 Calories
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../images/3dc597fd64e670b5cf18441965d59198-removebg-preview.png')}
                                    style={{ height: 70, width: 100, marginLeft: 25 }}
                                />
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                    textAlign: 'center'
                                }}>
                                    Cá Ngừ Đại Dương
                                </Text>
                                {/* <Text style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                    color: "#848385",
                                    textAlign: 'center'
                                }}>
                                    Cá Ngừ Đại Dương
                                </Text> */}
                            </View>
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HomeScreen')}
                        style={styles.viewback}
                    >
                        <View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                alignSelf: "center",
                                marginTop: 20
                            }}>

                                <Text style={{
                                    paddingHorizontal: 10,
                                    fontWeight: "bold",
                                    fontSize: 15
                                }}>
                                    290 Calories
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../images/nhung-mon-thuc-pham-dong-hop-tot-nhat-o-nhat-thich-hop-de-tru-trong-mua-dich-5-removebg-preview.png')}
                                    style={{ height: 70, width: 100, marginLeft: 25 }}
                                />
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                    textAlign: 'center'
                                }}>
                                    Đồ Hộp Nhật Bản
                                </Text>

                            </View>
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HomeScreen')}
                        style={styles.viewback}
                    >
                        <View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                alignSelf: "center",
                                marginTop: 20
                            }}>

                                <Text style={{
                                    paddingHorizontal: 10,
                                    fontWeight: "bold",
                                    fontSize: 15
                                }}>
                                    290 Calories
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../images/we-removebg-preview.png')}
                                    style={{ height: 70, width: 100, marginLeft: 25 }}
                                />
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                    textAlign: 'center'
                                }}>
                                    Mực Cắt Sợi Ngon
                                </Text>

                            </View>
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity

                        style={{
                            height: 300,
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                    >


                    </TouchableOpacity>


                </View>
            </ScrollView>

            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })}
                    >

                        <View style={styles.view} >
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.viewrow}>
                                <Text style={styles.viewtext}>{item.name}</Text>
                                <Text style={styles.viewbuy}>{item.buy}</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>


    )
};
const styles = StyleSheet.create({
    view: {
        // alignItems: 'center'
        height: "auto",
        elevation: 2,
        backgroundColor: "#f5f5fa",
        marginTop: 15,
        borderRadius: 15,
        marginBottom: 10,
        width: "auto",
    },
    viewrow: {
        flexDirection: "row",
        paddingTop: 10,
        paddingHorizontal: 10
    },
    viewtext: {
        fontWeight: "bold",
        fontSize: 25,
    },
    viewbuy: {
        fontWeight: "bold",
        color: "#ee4d2d",
        paddingLeft: 35,
        fontSize: 25,
        marginStart: "auto"
    },
    image: {
        width: "auto",
        height: 200,

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    viewicon: {
        paddingHorizontal: 10,
        fontWeight: "bold",
        color: "#b1e5d3",
        paddingTop: 3
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    viewsearch: {
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
    viewback: {
        backgroundColor: "#f5f5fa",
        height: "auto",
        width: 150,
        borderRadius: 20,
        marginRight: 10
    },

});
export default ProductsScreen;
