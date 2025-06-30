import { ErrorMessage, Formik } from "formik";
import { useEffect, useState } from "react";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { payoutManagementData } from "../../../Config/data";
import { PayoutManagementHeader } from "../../../Config/TableHeaders";
import { disbursementTime } from "../../../Config/Validations";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { dateFormat, serialNum } from "../../../Utils/helper";
import "./PayoutManagement.css";

const PayoutsManagement = ({ filters, setFilters, pagination, updatePagination, onSubmit, isSubmitting, showModal }) => {
  const [payoutLogs, setPayoutLogs] = useState([]);
  const [showInline, setShowInline] = useState(true);

  const fetchCommission = async () => {
    try {
      const response = payoutManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setPayoutLogs(data);
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
    fetchCommission();
  }, [filters]);

  useEffect(() => {
    const handleResize = () => {
      setShowInline(window.innerWidth > 575);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  const handleFormSubmit = (values, { resetForm }) => {
    showModal(``, `Disbursement time has been updated successfully!`, null, true);
    const newEntry = {
      id: Date.now(),
      disbursement_time: values.disbursement_time,
      date: getCurrentDate(),
    };

    setPayoutLogs((prevpayoutLogs) => [...prevpayoutLogs, newEntry]);

    resetForm();

    onSubmit(values);
  };

  return (
    <DashboardLayout pageTitle="Payouts Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Table Section */}
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mainTitle mb-0">Payouts Management</h2>
                </div>
              </div>
              <div className="mb-4">
                <Formik
                  initialValues={{
                    disbursement_time: "",
                  }}
                  validationSchema={disbursementTime}
                  onSubmit={handleFormSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className="payout-wrap">
                      <div className="row mb-3">
                        <div className="col-md-10 col-lg-11 col-xl-9 col-xxl-6">
                          {/* Flexbox layout with mobile responsiveness */}
                          <label className="mainLabel">
                            Disbursement Time <span className="red-text">*</span>
                          </label>
                          <div className="d-flex align-items-md-center flex-md-row flex-column gap-2">
                            {/* Commission rate input */}
                            <div className="position-relative flex-grow-1">
                              <CustomInput
                                // label="Disbursement Time"
                                labelclass=""
                                type="number"
                                required
                                placeholder="Enter Disbursement Time"
                                id="disbursement_time"
                                value={values.disbursement_time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // error={touched.disbursement_time && errors.disbursement_time}
                              />
                              <span className={`fw-bold dollar_icon`}>Days</span>
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
                          <ErrorMessage name="disbursement_time" component="p" className="error-message red-text mb-0" />
                          <small className="red-text lh-base d-inline-block w-75 mt-2">
                            Note: the set disbursement time will start when the order is marked as delivered by either coach or player. E.g. if the disbursement
                            time is 5 days then seller will receive the payment of the order 5 days after they marked the orders as delivered.
                          </small>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <h4 className="dashTitle">Payout Logs</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={PayoutManagementHeader}
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
                      {payoutLogs.map((item, index) => (
                        <tr key={item?.id}>
                          <td width="33%">{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td width="34%">{`${item?.disbursement_time} Days`}</td>
                          <td width="33%">{dateFormat(item?.date)}</td>
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

export default withModal(withFilters(PayoutsManagement));
