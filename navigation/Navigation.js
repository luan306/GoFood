import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
// import 'react-native-gesture-handler';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import CartScreen from '../screens/CartScreen';
import ShowAllScreen from '../screens/ShowAllScreen';
import { DrawerContent } from '../screens/DrawerContent';
import SearchScreen from '../screens/SearchScreeb';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStask = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = focused
                            ? 'home'
                            : 'md-home-outline';
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? 'heart' : 'heart';
                    }
                    else if (route.name === 'CartScreen') {
                        iconName = focused ? 'cart' : 'ios-cart-outline';
                    }
                    else if (route.name === 'SearchScreen') {
                        iconName = focused ? 'search' : 'search-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeStask} options={{ headerShown: false }} />
            <Tab.Screen name="SearchScreen" component={SearchStacck} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={FavStacck} options={{ headerShown: false }} />
            <Tab.Screen name="CartScreen" component={CartStacck} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
const FilterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FilterScreen" component={FilterScreen} />
        </Stack.Navigator>
    )
}
const ShowStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShowAllScreen" component={ShowAllScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const FavStacck = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}
const CartStacck = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
    )
}
const SearchStacck = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
                <Drawer.Screen name="Filter" component={FilterStack} options={{ headerShown: false }} />
                <Drawer.Screen name="Show All" component={ShowStack} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}
export default Navigation;