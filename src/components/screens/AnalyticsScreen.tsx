import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type AnalyticsScreenProps = {
    navigation: FrameNavigationProp<any, "Analytics">,
};

export function AnalyticsScreen({ navigation }: AnalyticsScreenProps) {
    return (
        <scrollView style={styles.container}>
            <flexboxLayout style={styles.content}>
                <label className="text-xl mb-4 font-bold">Impact Analysis</label>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Forest Health Index</label>
                    <progress value={75} maxValue={100} className="w-full" />
                    <label>75% - Good Condition</label>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Resource Allocation</label>
                    <label>Water Usage: Optimal</label>
                    <label>Soil Nutrients: Adequate</label>
                    <label>Maintenance: On Schedule</label>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Future Projections</label>
                    <label>Expected Growth: +15% in 6 months</label>
                    <label>Carbon Offset: +5 tons by year end</label>
                    <label>Biodiversity Impact: Increasing</label>
                </stackLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
    },
    content: {
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
    },
});