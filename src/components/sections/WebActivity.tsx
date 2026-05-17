import { WEB_DATA } from "@/src/constant";
import { Select } from "antd";
const { Option } = Select;

const WebRow = ({
  app,
  pct,
  time,
}: {
  app: string;
  pct: number;
  time: string;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px solid #f3f4f6",
    }}
  >
    <span
      style={{
        width: 72,
        fontSize: 13,
        fontWeight: 500,
        color: "#111827",
        flexShrink: 0,
      }}
    >
      {app}
    </span>
    {/* Progress track */}
    <div
      style={{
        flex: 1,
        height: 8,
        background: "#e5e7eb",
        borderRadius: 99,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: "#22c55e",
          borderRadius: 99,
        }}
      />
    </div>
    <span
      style={{
        width: 36,
        fontSize: 13,
        color: "#374151",
        textAlign: "right",
        flexShrink: 0,
      }}
    >
      {pct}%
    </span>
    <span
      style={{
        width: 120,
        fontSize: 12,
        color: "#6b7280",
        textAlign: "right",
        flexShrink: 0,
      }}
    >
      {time}
    </span>
  </div>
);

const MonthSelect = () => (
  <Select defaultValue="month" size="middle" style={{ width: 110 }}>
    <Option value="month">Month</Option>
    <Option value="week">Week</Option>
    <Option value="year">Year</Option>
  </Select>
);

export function WebActivity() {
  return (
    <div className="bg-white p-4 rounded-md ">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20 }}>🌐</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
              Web Activity
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "4px 0 0" }}>
            View your comprehensive organizational web report
          </p>
        </div>
        <MonthSelect />
      </div>

      <div>
        {WEB_DATA.map((item) => (
          <WebRow key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
