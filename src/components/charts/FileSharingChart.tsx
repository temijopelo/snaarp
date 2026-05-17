import { Button, Dropdown } from "antd";
import { useState } from "react";
import { GoGraph } from "react-icons/go";
import { HiOutlineChartBar } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", Public: 42, Link: 28, Org: 18 },
  { month: "FEB", Public: 60, Link: 38, Org: 22 },
  { month: "MAR", Public: 45, Link: 30, Org: 18 },
  { month: "APR", Public: 44, Link: 28, Org: 16 },
  { month: "MAY", Public: 68, Link: 45, Org: 28 },
  { month: "JUN", Public: 80, Link: 58, Org: 35 },
  { month: "JUL", Public: 55, Link: 62, Org: 40 },
  { month: "AUG", Public: 40, Link: 28, Org: 20 },
  { month: "SEP", Public: 42, Link: 30, Org: 20 },
  { month: "OCT", Public: 40, Link: 28, Org: 20 },
  { month: "NOV", Public: 65, Link: 42, Org: 28 },
  { month: "DEC", Public: 45, Link: 32, Org: 20 },
];

const items: any[] = [
  {
    label: "January",
    key: "1",
  },
  {
    label: "February",
    key: "2",
  },
  {
    label: "March",
    key: "3",
    danger: true,
  },
  {
    label: "April",
    key: "4",
    danger: true,
    disabled: true,
  },
];

const LEGEND = [
  { key: "Public", label: "Public", color: "#1a56db" },
  { key: "Link", label: "Anyone with link", color: "#4f83e8" },
  { key: "Org", label: "Within Organisation", color: "#93b9f5" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: "8px 12px",
        fontSize: 13,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          fontWeight: 600,
          color: "#6b7280",
          marginBottom: 6,
          textTransform: "uppercase",
          fontSize: 11,
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </p>
      {payload.map((entry: any) => (
        <div
          key={entry.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 3,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: entry.fill,
              display: "inline-block",
            }}
          />
          <span style={{ color: "#111" }}>
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function FileSharingChart() {
  const [selectedChart, setSelectedChart] = useState("");

  const menuProps = {
    items,
    onClick: ({ key }: any) => {
      console.log("Clicked menu item:", key);
    },
  };
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
      }}
    >
      {/* Header */}
      <div
        style={{ marginBottom: 20 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 rounded-md p-2">
              <LuFiles />
            </span>
            <h2
              style={{
                fontSize: 14,
                fontWeight: 600,
                margin: 0,
                color: "#111",
              }}
            >
              File Sharing
            </h2>
          </div>
          <p style={{ fontSize: 10, color: "#6b7280", marginTop: 4 }}>
            Keep track of files and how they're shared
          </p>
        </div>

        <div className="flex justify-end flex-wrap gap-2">
          <Button
            onClick={() => setSelectedChart("bar")}
            className={selectedChart === "bar" ? "bg-blue-600 text-white" : ""}
          >
            <HiOutlineChartBar />
          </Button>
          <Button
            onClick={() => setSelectedChart("line")}
            className={selectedChart === "line" ? "bg-blue-600 text-white" : ""}
          >
            <GoGraph />
          </Button>
          <Dropdown menu={menuProps}>
            <Button
              onClick={(e) => e.preventDefault()}
              icon={<IoIosArrowDown />}
              iconPlacement="end"
            >
              Month
            </Button>
          </Dropdown>
        </div>
      </div>

      {selectedChart === "line" ? (
        <div style={{ height: 315 }}></div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={data}
              barCategoryGap="30%"
              barGap={3}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.06)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                domain={[0, 100]}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* One <Bar> per data category — this is what creates the grouping */}
              <Bar
                dataKey="Public"
                name="Public"
                fill="#1a56db"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Link"
                name="Anyone with link"
                fill="#4f83e8"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Org"
                name="Within Organisation"
                fill="#93b9f5"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              marginTop: 16,
            }}
          >
            {LEGEND.map(({ key, label, color }) => (
              <span
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "#6b7280",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: color,
                    display: "inline-block",
                  }}
                />
                {label}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
