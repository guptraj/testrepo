"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

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

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://13.50.147.34:5000/page_views_last_7_days").then((response) =>
      response.json().then((data) => {
        setData(data);
      })
    );
  }, []);

  return (
    <ResponsiveContainer>
      <PieChart
        width={200}
        height={200}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <Pie
          data={data}
          dataKey="hackathon_page"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={95}
          fill="#8884d8"
          label
          z-10
        />
        <Pie
          data={data}
          dataKey="job_description_page"
          cx="50%"
          cy="50%"
          innerRadius={165}
          outerRadius={200}
          fill="#82ca9d"
          label
        />
        <Pie
          data={data}
          dataKey="job_page"
          cx="50%"
          cy="50%"
          innerRadius={10}
          outerRadius={50}
          fill="#c7f65c"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
