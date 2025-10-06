import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomTable from "../../../../Components/CustomTable";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { consultantScreeningData } from "../../../../Config/data";
import { consultantScreeningHeaders } from "../../../../Config/TableHeaders";
import { normalStatus } from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { dateFormat, serialNum, timeFormat2 } from "../../../../Utils/helper";
import "../style.css";
import TableDropdown from "../../../../Components/TableDropdown";

const ConsultantScreening = ({
  showModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [userData, setUserData] = useState([]);

  const fetchConsultantScreening = async () => {
    try {
      startSubmitting(true);
      const response = consultantScreeningData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setUserData(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Service Providers:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchConsultantScreening();
  }, [filters]);

  console.log(userData, "userData");
  return (
    <DashboardLayout pageTitle="Consultant Management">
      <div className="container-fluid consultant-management">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Consultant Screening</h2>
            </Col>
            <Col
              xs={12}
              className="gap-2 d-flex align-items-start align-items-xl-center mt-2
              flex-wrap"
            >
              <div className="">
                <Link
                  to={`/admin/consultant-management/category`}
                  state={{
                    categoryType: "video_verification",
                    isQuiz: true,
                    quizType: "video_verification",
                    title: "Video Verification Quiz",
                  }}
                  className="btn btn-primary min-width-250"
                >
                  Set Video Verification quiz
                </Link>
              </div>
              <div className="">
                <Link
                  to={`/admin/consultant-management/category`}
                  state={{
                    categoryType: "rules",
                    isQuiz: false,
                    title: "Rules & Regulations",
                    contentType: "rules",
                  }}
                  className="btn btn-primary min-width-250"
                >
                  Set Rules & Regulations
                </Link>
              </div>
              <div className="">
                <Link
                  to={`/admin/consultant-management/category`}
                  state={{
                    categoryType: "tutorials",
                    isQuiz: false,
                    title: "Tutorials",
                    contentType: "tutorials",
                  }}
                  className="btn btn-primary min-width-250"
                >
                  Set Tutorials
                </Link>
              </div>
              <div className="">
                <Link
                  to={`/admin/consultant-management/category`}
                  state={{
                    categoryType: "final_quiz",
                    isQuiz: true,
                    quizType: "final",
                    title: "Finalize Quiz",
                  }}
                  className="btn btn-primary min-width-250"
                >
                  Set Finalize Quiz
                </Link>
              </div>
              <div className="">
                <Link
                  to={`/admin/consultant-management/final-report`}
                  className="btn btn-primary min-width-250"
                >
                  Final Reports Of Consultants
                </Link>
              </div>
            </Col>
            <Col xs={12} className="mt-4 mt-xxl-5">
              <h2 className="fw-medium mb-0">Admin's Upcoming Meeting</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantScreeningHeaders}
                pagination={pagination}
                dateFilters={[
                  {
                    title: "Registration Date",
                    from: "fromDate",
                    to: "toDate",
                  },
                ]}
                selectOptions={[
                  {
                    title: "Status",
                    options: normalStatus,
                  },
                ]}
              >
                <tbody>
                  {userData?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.name}</td>
                      <td>{dateFormat(item?.registration_date)}</td>
                      <td>{timeFormat2(item?.appointment_time)}</td>
                      <td>
                        <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
                            <Link to={`${item.id}`}>
                              <FaEye size={20} />
                            </Link>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </CustomTable>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ConsultantScreening));
