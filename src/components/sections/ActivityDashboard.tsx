import { APP_DATA, WEB_DATA } from "@/src/constant";
import { Table, Select } from "antd";
import { AppActivityReport } from "./AppActivityReport";
import { WebActivity } from "./WebActivity";

const { Option } = Select;

export default function ActivityDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
      <AppActivityReport />
      <WebActivity />
    </div>
  );
}
