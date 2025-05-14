import "./style.css";
import ConsolidatedNotifications from "../../../Components/ConsolidatedNotifications";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";

const Notifications = () => {
  const apiEndpoint = `/admin-api/notifications`;
  return (
  
  <DashboardLayout pageTitle="Notifications">
    <div className="row my-4">
      <div className="col-12">
        <h2 className="mainTitle">Notifications</h2>
      </div>
    </div>
  <div className="dashCard container-fluid">
    <ConsolidatedNotifications apiEndpoint={apiEndpoint} />  
    {/* <CustomPagination pagination={pagination} setFilters={setFilters} /> */}
  </div>
</DashboardLayout>
  )
};

export default Notifications;
