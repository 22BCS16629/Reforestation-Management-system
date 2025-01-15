import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type MapScreenProps = {
    navigation: FrameNavigationProp<any, "Map">,
};

export function MapScreen({ navigation }: MapScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl mb-4">
                Forest Growth Map
            </label>
            <label className="text-center mb-4">
                Satellite data visualization will be displayed here
            </label>
            <gridLayout rows="auto" columns="*,*" className="w-full p-4">
                <button
                    row="0"
                    col="0"
                    className="bg-green-600 text-white p-2 m-2 rounded"
                    onTap={() => console.log("Zoom in")}
                >
                    Zoom In
                </button>
                <button
                    row="0"
                    col="1"
                    className="bg-green-600 text-white p-2 m-2 rounded"
                    onTap={() => console.log("Zoom out")}
                >
                    Zoom Out
                </button>
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