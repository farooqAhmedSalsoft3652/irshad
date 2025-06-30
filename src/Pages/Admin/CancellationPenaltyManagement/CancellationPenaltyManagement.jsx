import { ErrorMessage, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { CancelPenaltyManagementData } from "../../../Config/data";
import { CancelPenaltyManagementHeader } from "../../../Config/TableHeaders";
import { cancelPenaltySchema } from "../../../Config/Validations";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { dateFormat, serialNum } from "../../../Utils/helper";

const CancellationPenaltyManagement = ({ filters, setFilters, pagination, updatePagination, onSubmit, isSubmitting, showModal }) => {
  const [cancelPenalty, setCancelPenalty] = useState([]);

  const fetchCancelPenalty = async () => {
    try {
      const response = CancelPenaltyManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setCancelPenalty(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching payoutLogs:", error);
    }
  };

  useEffect(() => {
    fetchCancelPenalty();
  }, [filters]);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  const handleFormSubmit = (values, { resetForm }) => {
    showModal(``, `Cancellation Penalty has been updated successfully!`, null, true);
    const newEntry = {
      id: Date.now(),
      disbursement_time: values.disbursement_time,
      date: getCurrentDate(),
    };

    setCancelPenalty((prevpayoutLogs) => [...prevpayoutLogs, newEntry]);

    resetForm();

    onSubmit(values);
  };

  return (
    <DashboardLayout pageTitle="Cancellation Penalty Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Table Section */}
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <h2 className="mainTitle mb-0">Cancellation Penalty Management</h2>
                    <Link className="btn btn-primary" to={'/admin/cancel-penalty-management/cancel-time-management'}>Cancellation Time Management</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <Formik
                  initialValues={{
                    penalty_rate: "",
                  }}
                  validationSchema={cancelPenaltySchema}
                  onSubmit={handleFormSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className="payout-wrap">
                      <div className="row mb-3">
                        <div className="col-md-10 col-lg-11 col-xl-9 col-xxl-6">
                          {/* Flexbox layout with mobile responsiveness */}
                          <label className="mainLabel">
                            Penalty Rate <span className="red-text">*</span>
                          </label>
                          <div className="d-flex align-items-md-center flex-md-row flex-column gap-2">
                            {/* Commission rate input */}
                            <div className="position-relative flex-grow-1">
                              <CustomInput
                                labelclass=""
                                type="number"
                                required
                                placeholder="05"
                                id="penalty_rate"
                                value={values.penalty_rate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // error={touched.disbursement_time && errors.disbursement_time}
                              />
                              <span className={`fw-bold dollar_icon`}>%</span>
                            </div>
                            {/* Update Button */}
                            <div className="">
                              <CustomButton
                                variant="btn btn-primary"
                                className={`px-5`}
                                text="Update"
                                pendingText="Submitting..."
                                isPending={isSubmitting}
                                type="submit"
                              />
                            </div>
                          </div>
                          <ErrorMessage name="penalty_rate" component="p" className="error-message red-text mb-0" />
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <h4 className="dashTitle">Penalty Logs</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={CancelPenaltyManagementHeader}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Updated On Date",
                        from: "fromDate",
                        to: "toDate",
                        fromTitle: "From",
                        toTitle: "To",
                      },
                    ]}
                  >
                    <tbody>
                      {cancelPenalty?.map((item, index) => (
                        <tr key={item?.id}>
                          <td width="33%">{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td width="33%">{`${item?.penalty_rate} %`}</td>
                          <td width="34%">{dateFormat(item?.date)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </CustomTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(CancellationPenaltyManagement));
