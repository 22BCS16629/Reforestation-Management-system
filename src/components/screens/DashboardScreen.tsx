import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type DashboardScreenProps = {
    navigation: FrameNavigationProp<any, "Dashboard">,
};

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center text-green-800">
                Reforestation Management System
            </label>
            
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Map")}
            >
                View Forest Map
            </button>
            
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Reports")}
            >
                Progress Reports
            </button>
            
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Analytics")}
            >
                Impact Analysis
            </button>
            
            <gridLayout rows="auto" columns="*,*" className="w-3/4">
                <label row="0" col="0" className="text-center p-2">
                    <label className="font-bold text-lg">1,234</label>
                    <label className="text-sm">Trees Planted</label>
                </label>
                <label row="0" col="1" className="text-center p-2">
                    <label className="font-bold text-lg">56.7%</label>
                    <label className="text-sm">Growth Rate</label>
                </label>
            </gridLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
    },
});