"use client";
import { Button } from "antd";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiGooglecloudstorage } from "react-icons/si";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Label,
} from "recharts";
import PieTag from "./PieTag";

const data = [
  { name: "Files", value: 900, fill: "#ef4444" },
  { name: "Folder", value: 300, fill: "#f97316" },
  { name: "Videos", value: 300, fill: "#eab308" },
  { name: "Apps", value: 200, fill: "#22c55e" },
  { name: "Audio", value: 200, fill: "#7733cc" },
  { name: "miscellanous", value: 200, fill: "#cccccc" },
  { name: "Available Space", value: 200, fill: "#dadada" },
];

const PieCard = () => {
  const MyPie = () => (
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      outerRadius="80%"
      innerRadius="60%"
      isAnimationActive={false}
    />
  );
  return (
    <div className="relative flex flex-col h-full justify-between gap-2">
      <div className="flex gap-2 items-center">
        <span className="bg-gray-100 rounded-md p-2">
          <SiGooglecloudstorage />
        </span>
        Storage
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <PieChart
          responsive
          style={{
            height: "calc(100% - 20px)",
            flex: 1,
            aspectRatio: 1,
          }}
        >
          <MyPie />
          <Label position="center" fill="#666">
            80% Used
          </Label>
        </PieChart>
        <div className="flex-2 grid md:grid-cols-2 xl:grid-cols-3 gap-2 mt-10 content-center">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2">
              <span
                style={{ backgroundColor: entry.fill }}
                className="w-3 h-3  inline-block"
              ></span>
              <span className="text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
      <span className="self-end">
        <Button variant="outlined">
          {" "}
          <AiOutlineThunderbolt size={20} /> Upgrade Plan
        </Button>
      </span>

      <PieTag />
    </div>
  );
};

export default PieCard;
