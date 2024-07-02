"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
  {
    name: "July",
    product1: 2490,
    product2: 2400,
  },
  {
    name: "Aug",
    product1: 2690,
    product2: 2300,
  },
  {
    name: "Sept",
    product1: 2990,
    product2: 100,
  },
  {
    name: "Oct",
    product1: 1390,
    product2: 1500,
  },
  {
    name: "Nov",
    product1: 4390,
    product2: 4500,
  },
  {
    name: "Dec",
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://13.50.147.34:5000/page_views_last_7_days").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={data} margin={{ right: 30 }}>
        
        <XAxis dataKey="Date" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="hackathon_page"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="job_description_page"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="job_page"
          stroke="#c7f65c"
          fill="#c7f65c"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-blue-400">{label}</p>
        <p className="text-sm text-blue-400">
          Hackathon Page Views:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Job Description Page Views:
          <span className="ml-2">{payload[1].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Job Page Views:
          <span className="ml-2">{payload[2].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
