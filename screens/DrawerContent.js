import React from 'react';
import {
    View, StyleSheet, useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Image,
    TouchableOpacity
} from 'react-native';



import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';




export function DrawerContent(props) {



    return (
        <View style={{ flex: 1 }}>

            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 80 }}>
                        <Image
                            source={require('../images/luan.png')}
                            style={{ height: 50, width: 50, borderRadius: 50 }}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Text style={styles.title}>Thành Luân</Text>
                            <Text style={styles.caption}>@Luan306</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Text style={[styles.paragraph, styles.caption]}>80</Text>
                                <Text style={styles.caption}>Following</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={[styles.paragraph, styles.caption]}>100</Text>
                                <Text style={styles.caption}>Followers</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.drawerSection}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign style={styles.caption1} name="home" size={24} color="black" />
                            <Text style={[styles.paragraph, styles.caption, styles.text]}>HOME</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.drawerSection}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Filter')}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Feather style={styles.caption1} name="filter" size={24} color="black" />

                            <Text style={[styles.paragraph, styles.caption, styles.text]}>FILTER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.drawerSection}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Show All')}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <MaterialIcons style={styles.caption1} name="slideshow" size={24} color="black" />

                            <Text style={[styles.paragraph, styles.caption, styles.text]}>ALL SHOW</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    caption1: {
        fontSize: 24,
        lineHeight: 30,
        marginLeft: 20
    },
    row: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -150
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    text: {
        marginTop: 10,
        marginLeft: 10
    },
});