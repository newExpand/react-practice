import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fil" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__labe">{props.label}</div>
        </div>
    );
};

{
    /* <ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={null} label={dataPoint.label} />; */
}

export default ChartBar;
