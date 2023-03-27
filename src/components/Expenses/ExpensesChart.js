import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: "01월", value: 0 },
        { label: "02월", value: 0 },
        { label: "03월", value: 0 },
        { label: "04월", value: 0 },
        { label: "05월", value: 0 },
        { label: "06월", value: 0 },
        { label: "07월", value: 0 },
        { label: "08월", value: 0 },
        { label: "09월", value: 0 },
        { label: "10월", value: 0 },
        { label: "11월", value: 0 },
        { label: "12월", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
