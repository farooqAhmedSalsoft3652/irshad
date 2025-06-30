import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { queryTableHeaders } from "../../../Config/TableHeaders";
import { userTypeStatus } from "../../../Config/TableStatus";
import { complainTableData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { isNullOrEmpty, serialNum } from "../../../Utils/helper";

const ComplainTable = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const [reports, setReports] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchReports = async () => {
    try {
      startSubmitting(true);
      const response = complainTableData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setReports(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [filters]);

  if (isNullOrEmpty(reports)) {
    return (
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="row mb-3">
      <div className="col-12">
        <CustomTable
          filters={filters}
          setFilters={setFilters}
          loading={isSubmitting}
          headers={queryTableHeaders}
          pagination={pagination}
          dateFilters={[
            {
              title: "Date",
              from: "fromDate",
              to: "toDate",
              fromTitle: "From",
              toTitle: "To",
            },
          ]}
          selectOptions={[
            {
              main_title: "Filter By User Type",
              title: "Status",
              options: userTypeStatus,
            },
          ]}
        >
          <tbody>
            {reports.map((item, index) => (
              <tr key={item?.id}>
                <td>
                  {serialNum((filters.page - 1) * filters.per_page + index + 1)}
                </td>
                <td>{item?.fullName}</td>
                <td>{item?.emailAddress}</td>
                <td>{item?.userType}</td>
                <td>{item?.date}</td>
                <td>
                  <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                    <span className="tooltip-toggle" aria-label="View">
                      <Link to={`complain/${item.id}`}>
                        <FaEye size={20} color="#C5E4F6" />
                      </Link>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </div>
    </div>
  );
};

export default withFilters(ComplainTable);
