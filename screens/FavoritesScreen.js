import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import PRODUCTS from '../data/products';
import { useSelector } from 'react-redux';


const FavoritesScreen = (props) => {
    // const favProducts = PRODUCTS.filter(product => product.isFav === true)
    // 
    const favProducts = useSelector(state => state.favProducts)
    console.log(favProducts)
    if (favProducts.length !== 0) {


        return (
            <FlatList
                data={favProducts}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })}
                    >
                        <View style={styles.view}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <Text style={styles.viewtext}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        )
    }
    else {
        return (<Image source={require('../images/16.png')}
            style={{ height: 200, width: 280, alignSelf: 'center' }} />)
    }
};
const styles = StyleSheet.create({
    view: {
        // alignItems: 'center'
        height: 300,
        elevation: 2,
        backgroundColor: "#FFF",
        marginTop: 10,
        borderRadius: 15,
        marginBottom: 10,
        width: "auto"
    },
    image: {
        width: "auto",
        height: 250,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    viewtext: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center'
    },
});
export default FavoritesScreen;