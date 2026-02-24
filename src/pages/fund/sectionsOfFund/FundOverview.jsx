import React from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { XAxis } from "recharts";
import CardForFund from "./../../../components/cards/CardForFund";

const data = [
  { month: "Jan", Donations: 40000, spent: 30000 },
  { month: "Feb", Donations: 30000, spent: 20000 },
  { month: "Mar", Donations: 50000, spent: 10000 },
  { month: "Apr", Donations: 35000, spent: 23000 },
];

// Sample data
const pieData = [
  { name: "Collected", value: 35000 },
  { name: "Remaining", value: 15000 },
];

const collectionsOverviewCardDatas = [
  {
    id: 1,
    fundIcon: FaArrowTrendUp,
    fundTitle: "Total Collected",
    fundAmount: 103000,
  },

  {
    id: 2,
    fundIcon: FaArrowTrendDown,
    fundTitle: "Total Spent",
    fundAmount: 83500,
  },

  {
    id: 3,
    fundIcon: FaMoneyCheck,
    fundTitle: "Available Balance",
    fundAmount: 19500,
  },
];

// Colors for slices
const COLORS = ["#0E6B4F", "#D1E7DD"];
const FundOverview = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-forHeading font-bold">Fund Overview</h1>
      {/* cards for fund overview */}
      <div className="  grid grid-cols-1 md:grid-cols-3   gap-6  ">
        {collectionsOverviewCardDatas.map((collectionsOverviewCardData) => {
          return (
            <CardForFund
              key={collectionsOverviewCardData.id}
              fundIcon={collectionsOverviewCardData.fundIcon}
              fundTitle={collectionsOverviewCardData.fundTitle}
              fundAmount={collectionsOverviewCardData.fundAmount}
            ></CardForFund>
          );
        })}
      </div>

<div className="flex flex-col gap-6 md:flex-row ">
  
  {/* Pie Chart Card */}
  <div className="bg-amber-50/10 rounded-md shadow p-4 flex-1">
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          label={(entry) => `${entry.name}: ${entry.value}৳`}
          animationDuration={1500}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) =>
            new Intl.NumberFormat().format(value) + "৳"
          }
        />
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* Bar Chart Card */}
  <div className="bg-amber-50/10 rounded-md shadow p-4 flex-1">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Bar
          dataKey="Donations"
          fill="#0E6B4F"
          radius={[10, 10, 0, 0]}
          animationDuration={1500}
        />
        <Bar
          dataKey="spent"
          fill="#2563EB"
          radius={[10, 10, 0, 0]}
          animationDuration={1500}
        />
        <Tooltip
          formatter={(value) =>
            new Intl.NumberFormat().format(value) + "৳"
          }
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

</div>

      

    </div>
  );
};

export default FundOverview;
