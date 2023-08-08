import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

const FilterScreen = (props) => {
    const [isBrandNewOn, setIsBrandNewOn] = useState(false);
    const [isSaleOn, setIsSaleOn] = useState(false);
    const dispatch = useDispatch()
    const filters = {
        isBrandNewOn: isBrandNewOn,
        isSaleOn: isSaleOn
    }
    useEffect(() => props.navigation.setOptions({

        headerRight: () =>
            <TouchableOpacity
                onPress={() => dispatch({ type: 'LOC_SAN_PHAM', filters: filters })}
            >
                <Ionicons name='ios-save' size={40} />
            </TouchableOpacity>
    }), [props.navigation, isBrandNewOn, isSaleOn])
    return (
        <View>
            <Text style={styles.view}>Lọc sản phẩm</Text>
            <View style={styles.view2}>
                <Text style={styles.view1}>Món mới</Text>
                <Switch value={isBrandNewOn}
                    onValueChange={(newValue) => setIsBrandNewOn(newValue)} />
            </View>
            <View style={styles.view2}>
                <Text style={styles.view1}>Món khuyến mãi</Text>
                <Switch value={isSaleOn}
                    onValueChange={(newValue) => setIsSaleOn(newValue)} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    view: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    view1: {
        fontSize: 20,
        fontWeight: 'bold',
        flexShrink: 1,
        flexGrow: 1,
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,

    },

});
export default FilterScreen;