import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DONUT_DATA = [
  { name: "Sent", value: 2800, color: "#f59e0b" },
  { name: "Received", value: 2100, color: "#6366f1" },
  { name: "Unsent", value: 521, color: "#e5e7eb" },
];

const LINE_DATA = [
  { month: "JAN", sent: 20, received: 30, unsent: 5 },
  { month: "FEB", sent: 80, received: 120, unsent: 10 },
  { month: "MAR", sent: 60, received: 90, unsent: 8 },
  { month: "APR", sent: 100, received: 200, unsent: 15 },
  { month: "MAY", sent: 130, received: 280, unsent: 18 },
  { month: "JUN", sent: 200, received: 400, unsent: 20 },
  { month: "JUL", sent: 583, received: 932, unsent: 32 },
  { month: "AUG", sent: 900, received: 1800, unsent: 60 },
  { month: "SEP", sent: 1100, received: 2200, unsent: 80 },
  { month: "OCT", sent: 1300, received: 2600, unsent: 90 },
  { month: "NOV", sent: 1500, received: 3000, unsent: 100 },
  { month: "DEC", sent: 1200, received: 2400, unsent: 85 },
];

const LEGEND = [
  { label: "Sent", color: "#f59e0b" },
  { label: "Received", color: "#6366f1" },
  { label: "Unsent", color: "#e5e7eb", border: "#d1d5db" },
];

function EmailChart() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "24px",
        flex: "0 0 300px",
        border: "1px solid #f3f4f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 24,
        }}
      >
        <span style={{ fontSize: 18 }}>✉️</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111827" }}>
          Email Chart
        </span>
      </div>

      <div
        style={{
          position: "relative",
          width: 200,
          height: 200,
          alignSelf: "center",
        }}
      >
        <PieChart width={200} height={200}>
          <Pie
            data={DONUT_DATA}
            cx={100}
            cy={100}
            innerRadius={68}
            outerRadius={95}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {DONUT_DATA.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#111827",
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
            Emails
            <br />
            Chart
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        {LEGEND.map(({ label, color, border }) => (
          <span
            key={label}
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
                border: border ? `1px solid ${border}` : "none",
                display: "inline-block",
              }}
            />
            {label}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 28, alignSelf: "center", textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#374151",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Total Emails Sent
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#111827",
            marginTop: 2,
          }}
        >
          5,421
        </div>
      </div>
    </div>
  );
}

function TotalEmailChart() {
  const [view, setView] = useState("line"); // "bar" | "line"

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "24px",
        flex: 1,
        border: "1px solid #f3f4f6",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>✉️</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: "#111827" }}>
            Total Email
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Toggle buttons */}
          <button
            onClick={() => setView("bar")}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              background: view === "bar" ? "#eff6ff" : "#fff",
              color: view === "bar" ? "#3b82f6" : "#6b7280",
              fontSize: 16,
            }}
          >
            ▦
          </button>
          <button
            onClick={() => setView("line")}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              background: view === "line" ? "#eff6ff" : "#fff",
              color: view === "line" ? "#3b82f6" : "#6b7280",
              fontSize: 16,
            }}
          >
            〜
          </button>
          <select
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 13,
              color: "#374151",
              cursor: "pointer",
              background: "#fff",
            }}
          >
            <option>Month</option>
            <option>Week</option>
            <option>Year</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={LINE_DATA}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            stroke="#f3f4f6"
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            tickFormatter={(v) =>
              v === 0 ? "0" : `${(v / 1000).toFixed(0)},000`
            }
            domain={[0, 7000]}
            ticks={[0, 1000, 3000, 5000, 7000]}
          />
          <Tooltip />
          <Area type="monotone" dataKey="sent" stroke="none" fill="none" />
          <Area type="monotone" dataKey="received" stroke="none" fill="none" />
          <Area
            type="monotone"
            // We visualise the combined total as the shaded area
            dataKey={(row) => row.sent + row.received + row.unsent}
            stroke="#6366f1"
            strokeWidth={2}
            fill="url(#totalGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#fff",
              stroke: "#6366f1",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function EmailDashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <EmailChart />
      <TotalEmailChart />
    </div>
  );
}
