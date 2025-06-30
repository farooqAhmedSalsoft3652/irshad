import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { reportsManagementNewsfeedHeader } from "../../../Config/TableHeaders";
import { reportsStatus } from "../../../Config/TableStatus";
import { reportsManagementNewsfeedData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { isNullOrEmpty, serialNum, statusClassMap } from "../../../Utils/helper";

const NewsfeedTable = ({ filters, setFilters, pagination, updatePagination }) => {
  const [reports, setReports] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchReports = async () => {
    try {
      startSubmitting(true);
      const response = reportsManagementNewsfeedData;
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
          headers={reportsManagementNewsfeedHeader}
          pagination={pagination}
          dateFilters={[
            {
              title: "Reported Date",
              from: "fromDate",
              to: "toDate",
            },
          ]}
          selectOptions={[
            {
              title: "Status",
              options: reportsStatus,
            },
          ]}
        >
          <tbody>
            {reports.map((item, index) => (
              <tr key={item?.id}>
                <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                <td>{item?.userName}</td>
                <td>{item?.emailAddress}</td>
                <td>{item?.reportedDate}</td>
                <td className={`${statusClassMap[item.status === "Resolved" ? "Approved" : item.status]}`}>{item?.status}</td>
                <td>
                  <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                    <span className="tooltip-toggle" aria-label="View">
                      <Link to={`report/${item.id}`}>
                        <FaEye size={20} color="#1819ff" />
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

export default withFilters(NewsfeedTable);
