import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type ReportsScreenProps = {
    navigation: FrameNavigationProp<any, "Reports">,
};

export function ReportsScreen({ navigation }: ReportsScreenProps) {
    return (
        <scrollView style={styles.container}>
            <flexboxLayout style={styles.content}>
                <label className="text-xl mb-4 font-bold">Progress Reports</label>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Monthly Growth Report</label>
                    <label>Growth Rate: +12% this month</label>
                    <label>New Trees: 156 planted</label>
                    <label>Survival Rate: 92%</label>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Environmental Impact</label>
                    <label>CO2 Absorbed: 2.3 tons</label>
                    <label>Biodiversity Impact: Positive</label>
                    <label>Soil Quality: Improved</label>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4 w-full">
                    <label className="font-bold">Community Engagement</label>
                    <label>Volunteers: 45 active</label>
                    <label>Educational Programs: 3</label>
                    <label>Community Events: 2</label>
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