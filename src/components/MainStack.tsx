import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { DashboardScreen } from "./screens/DashboardScreen";
import { MapScreen } from "./screens/MapScreen";
import { ReportsScreen } from "./screens/ReportsScreen";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2E7D32",
                },
                headerTintColor: "#fff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ title: "Forest Monitor" }}
            />
            <StackNavigator.Screen
                name="Map"
                component={MapScreen}
                options={{ title: "Forest Map" }}
            />
            <StackNavigator.Screen
                name="Reports"
                component={ReportsScreen}
                options={{ title: "Progress Reports" }}
            />
            <StackNavigator.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{ title: "Impact Analysis" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);