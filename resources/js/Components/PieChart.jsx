import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
];

export const options = {};

export function PieChart() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"70%"}
            height={"200px"}
        />
    );
}
