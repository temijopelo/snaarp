import { Table, Avatar, Select, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { tableData } from "@/src/constant";

const { Option } = Select;

const StatusDot = ({ online }: { online: boolean }) => (
  <span
    style={{
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: online ? "#22c55e" : "#d1d5db",
      flexShrink: 0,
    }}
  />
);

const DeviceIcon = ({ device }: { device: string }) => {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {device}
    </span>
  );
};

const ActivityIcon = ({ activity }: { activity: string }) => {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {activity}
    </span>
  );
};

const COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a: { name: string }, b: { name: string }) =>
      a.name.localeCompare(b.name),
    render: (
      name: string,
      record: { online: boolean; avatar: string | null },
    ) => (
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <StatusDot online={record.online} />
        <Avatar
          src={record.avatar}
          icon={<UserOutlined />}
          size={32}
          style={{ background: "#e5e7eb", color: "#6b7280", flexShrink: 0 }}
        />
        <span style={{ fontWeight: 500, color: "#111827" }}>{name}</span>
      </span>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    sorter: (a: { location: string }, b: { location: string }) =>
      a.location.localeCompare(b.location),
    render: (v: string) => <span style={{ color: "#6b7280" }}>{v}</span>,
  },
  {
    title: "Organization",
    dataIndex: "org",
    key: "org",
    sorter: (a: { org: string }, b: { org: string }) =>
      a.org.localeCompare(b.org),
    render: (v: string) => <span style={{ color: "#6b7280" }}>{v}</span>,
  },
  {
    title: "Device",
    dataIndex: "device",
    key: "device",
    sorter: (a: { device: string }, b: { device: string }) =>
      a.device.localeCompare(b.device),
    render: (v: string) => (
      <span style={{ color: "#374151" }}>
        <DeviceIcon device={v} />
      </span>
    ),
  },
  {
    title: "Current Activity",
    dataIndex: "activity",
    key: "activity",
    sorter: (a: { activity: string }, b: { activity: string }) =>
      a.activity.localeCompare(b.activity),
    render: (v: string) => (
      <span style={{ color: "#374151" }}>
        <ActivityIcon activity={v} />
      </span>
    ),
  },
  {
    title: "Time Usage",
    dataIndex: "timeUsage",
    key: "timeUsage",
    sorter: (a: { timeUsage: string }, b: { timeUsage: string }) =>
      a.timeUsage.localeCompare(b.timeUsage),
    render: (v: string) => <span style={{ color: "#6b7280" }}>{v}</span>,
  },
];

export default function OnlineUsers() {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 17,
              fontWeight: 600,
              color: "#111827",
            }}
          >
            <UserOutlined style={{ fontSize: 18 }} />
            Online Users
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "4px 0 0" }}>
            View your comprehensive online users
          </p>
        </div>

        <Select defaultValue="all" style={{ width: 160 }} size="middle">
          <Option value="all">All Organization</Option>
          <Option value="ottawa">MSBM, Ottawa</Option>
          <Option value="lagos">MSBM, Lagos</Option>
          <Option value="london">MSBM, London</Option>
          <Option value="dubai">MSBM, Dubai</Option>
        </Select>
      </div>

      {/* Table */}
      <Table
        dataSource={tableData}
        columns={COLUMNS}
        rowKey="id"
        pagination={false}
        size="middle"
        style={{
          border: "1px solid #f3f4f6",
          borderRadius: 8,
          overflow: "hidden",
        }}
        rowClassName={(_, index) => (index % 2 === 0 ? "row-even" : "row-odd")}
      />

      {/* Inline style for alternating rows */}
      <style>{`
        .row-even td { background: #f9fafb !important; }
        .row-odd  td { background: #ffffff !important; }
        .ant-table-thead > tr > th {
          background: #f3f4f6 !important;
          font-weight: 600 !important;
          font-size: 13px !important;
          color: #374151 !important;
          border-bottom: 1px solid #e5e7eb !important;
        }
        .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f3f4f6 !important;
          padding: 12px 16px !important;
          font-size: 13px !important;
        }
        .ant-table-column-sorter { color: #9ca3af; }
      `}</style>
    </div>
  );
}
