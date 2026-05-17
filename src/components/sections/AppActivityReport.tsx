import { APP_DATA } from "@/src/constant";
import { Select, Table } from "antd";

const { Option } = Select;

const MonthSelect = () => (
  <Select defaultValue="month" size="middle" style={{ width: 110 }}>
    <Option value="month">Month</Option>
    <Option value="week">Week</Option>
    <Option value="year">Year</Option>
  </Select>
);

const APP_COLUMNS = [
  {
    title: "Application",
    dataIndex: "app",
    key: "app",
    sorter: (a: { app: string }, b: { app: string }) =>
      a.app.localeCompare(b.app),
    render: (name: string) => (
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontWeight: 500, color: "#111827" }}>{name}</span>
      </span>
    ),
  },
  {
    title: "Total Users",
    dataIndex: "users",
    key: "users",
    sorter: (a: { users: number }, b: { users: number }) => a.users - b.users,
    render: (v: number) => <span style={{ color: "#374151" }}>{v}</span>,
  },
  {
    title: "Total Number of Hours",
    dataIndex: "hours",
    key: "hours",
    sorter: (a: { hours: string }, b: { hours: string }) =>
      a.hours.localeCompare(b.hours),
    render: (v: string) => <span style={{ color: "#374151" }}>{v}</span>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    sorter: (a: { date: string }, b: { date: string }) =>
      a.date.localeCompare(b.date),
    render: (v: string) => <span style={{ color: "#6b7280" }}>{v}</span>,
  },
];

export function AppActivityReport() {
  return (
    <div className="col-span-2 bg-white p-4 rounded-md">
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
            <span style={{ fontSize: 20 }}>⊙</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
              App Activity Report
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "4px 0 0" }}>
            View your comprehensive organizational app report
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Select defaultValue="all" size="middle" style={{ width: 160 }}>
            <Option value="all">All Organization</Option>
            <Option value="lagos">MSBM, Lagos</Option>
            <Option value="london">MSBM, London</Option>
          </Select>
          <MonthSelect />
        </div>
      </div>

      <Table
        dataSource={APP_DATA}
        columns={APP_COLUMNS}
        rowKey="id"
        pagination={false}
        size="middle"
        style={{
          border: "1px solid #f3f4f6",
          borderRadius: 10,
          overflow: "hidden",
        }}
        rowClassName={(_, i) => (i % 2 === 0 ? "row-even" : "row-odd")}
      />
    </div>
  );
}
