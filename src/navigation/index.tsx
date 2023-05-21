import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screen/HomeScreen";
import ClockScreen from "../screen/ClockScreen";


const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen as any}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Clock"
                component={ClockScreen as any}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
}


export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}