import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import { bannerManagementData } from "../../../Config/data";
import { BannerManagementHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { dateFormat, serialNum } from "../../../Utils/helper";

const BannerManagement = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
}) => {
  const [bannerData, setBannerData] = useState([]);

  const fetchBanners = async () => {
    try {
      const response = bannerManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setBannerData(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      // console.log('')
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Banner Management">
      <div className="container-fluid">
        <>
          <div className="dashCard">
            <div className="mb-4 d-flex flex-wrap gap-3 gap-md-0 align-items-center justify-content-between">
              <h2 className="mainTitle mb-0">Banner Management</h2>
              <Link
                to={"/admin/banner-management/add-new"}
                className="btn btn-primary"
              >
                Add New Banner
              </Link>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <CustomTable
                  filters={filters}
                  setFilters={setFilters}
                  headers={BannerManagementHeaders}
                  pagination={pagination}
                  dateFilters={[
                    {
                      title: "Date",
                      from: "fromDate",
                      to: "toDate",
                      fromTitle: "From",
                      toTitle: "To",
                    },
                    {
                      title: "Expire Date",
                      from: "fromDate",
                      to: "toDate",
                      fromTitle: "From",
                      toTitle: "To",
                    },
                  ]}
                  // selectOptions={[
                  //   {
                  //     main_title: "Filter By Status",
                  //     title: "Status",
                  //     options: normalStatus,
                  //   },
                  // ]}
                >
                  <tbody>
                    {bannerData?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>
                          {serialNum(
                            (filters.page - 1) * filters.per_page + index + 1
                          )}
                        </td>
                        <td>{item?.banner_title}</td>
                        <td>{dateFormat(item?.creation_date)}</td>
                        <td>{dateFormat(item?.expiry_date)}</td>
                        <td>
                          <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                            <span className="tooltip-toggle" aria-label="View">
                              <Link to={`${item.id}`}>
                                <FaEye size={20} />
                              </Link>
                            </span>
                            {/* <span className="tooltip-toggle" aria-label="Edit">
                              <Link to={`${item.id}/edit`}>
                                <FaEdit size={20} color="#C5E4F6" />
                              </Link>
                            </span> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </CustomTable>
              </div>
            </div>
          </div>
        </>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(BannerManagement));
