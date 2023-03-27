import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { id: "d0", label: "01월", value: 0 },
        { id: "d1", label: "02월", value: 0 },
        { id: "d2", label: "03월", value: 0 },
        { id: "d3", label: "04월", value: 0 },
        { id: "d4", label: "05월", value: 0 },
        { id: "d5", label: "06월", value: 0 },
        { id: "d6", label: "07월", value: 0 },
        { id: "d7", label: "08월", value: 0 },
        { id: "d8", label: "09월", value: 0 },
        { id: "d9", label: "10월", value: 0 },
        { id: "d10", label: "11월", value: 0 },
        { id: "d11", label: "12월", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
