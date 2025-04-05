// VisitorsLineChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mar 1", value: 300 },
  { date: "Mar 5", value: 1300 },
  { date: "Mar 10", value: 850 },
  { date: "Mar 15", value: 740 },
  { date: "Mar 20", value: 1900 },
  { date: "Mar 25", value: 500 },
  { date: "Mar 30", value: 1700 },
];

const VisitorsLineChart = () => {
  return (
    <div className="w-[110vw] -left-10 md:w-[64vw] lg:w-[64vw] absolute md:-left-23 md:-top-4   h-[200px] bg-[#111111] py-2 rounded-lg  scale-80 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#A3A3A3" />
          <YAxis
            stroke="#A3A3A3"
            tickFormatter={(val) => (val >= 1000 ? `${val / 1000}K` : val)}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#111", border: "none" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={{ fill: "#fff", r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorsLineChart;
