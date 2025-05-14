import { Formik } from "formik";
import { useEffect, useState } from "react";
import { FaPercent } from "react-icons/fa";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomTable from "../../../Components/CustomTable";
import { commissionManagementData } from "../../../Config/data";
import { CommissionManagementHeader } from "../../../Config/TableHeaders";
import { commissionRate } from "../../../Config/Validations";
import withFilters from "../../../HOC/withFilters ";
import { dateFormat, serialNum } from "../../../Utils/helper";

const CommissionManagement = ({ filters, setFilters, pagination, updatePagination, onSubmit, isSubmitting, errors }) => {
  const [commissions, setCommissions] = useState([]);
  const [activeTab, setActiveTab] = useState("booking"); // Active tab state
  const [showInline, setShowInline] = useState(true);

  const fetchCommission = async () => {
    try {
      const response = commissionManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setCommissions(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching commissions:", error);
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
    const newEntry = {
      id: Date.now(), 
      commission_percentege: values.Commission_rate,
      date: getCurrentDate(), 
      type: activeTab, 
    };

    setCommissions((prevCommissions) => [...prevCommissions, newEntry]);

    resetForm();

    onSubmit(values);
  };

  return (
    <DashboardLayout pageTitle="Commission Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row my-4">
              <div className="col-12">
                <h2 className="mainTitle mb-0">Commission Management</h2>
              </div>
            </div>

            {/* Tab buttons */}
            <div className="mt-5 mb-4 d-flex justify-content-center">
              <CustomButton
                className={`site-btn tab-btn ${activeTab === "booking" && "tab-selected"} text-decoration-none leftBordersRounded`}
                text="Service Provider Booking"
                onClick={() => setActiveTab("booking")}
              />
              <CustomButton
                className={`site-btn tab-btn ${activeTab === "order" && "tab-selected"} text-decoration-none rightBordersRounded`}
                text="Service Provider Order"
                onClick={() => setActiveTab("order")}
              />
            </div>

            {/* Form Section */}
            <div className="my-4">
              <Formik
                initialValues={{
                  Commission_rate: "",
                }}
                validationSchema={commissionRate}
                onSubmit={handleFormSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="commission-wrap">
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-10 col-lg-11 col-xl-9 col-xxl-7">
                        {/* Flexbox layout with mobile responsiveness */}
                        <div className="d-flex flex-column flex-sm-row align-items-start gap-2">
                          {/* Commission rate input */}
                          <CustomInput
                            label="Commission rate"
                            showInline={showInline}
                            type="number"
                            wrapperClass="mb-0 flex-grow-1 "
                            labelclass="mainLabel flex-shrink-0 mb-0"
                            inputclass="mainInput flex-grow-1"
                            required
                            placeholder="Enter commission rate"
                            id="Commission_rate"
                            value={values.Commission_rate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rightIcon={FaPercent}
                            error={touched.Commission_rate && errors.Commission_rate}
                          />
                          {/* Update Button */}
                          <div className="mt-3 mt-sm-0">
                            <CustomButton
                              variant="site-btn primary-btn"
                              className="px-5 mt-1half"
                              text="Update"
                              pendingText="Submitting..."
                              isPending={isSubmitting}
                              type="submit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>

            {/* Table Section */}
            <div className="dashCard">
            <div className="row mb-3">
                <div className="col-12">
                  <h4 className="dashTitle">Commission logs</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={CommissionManagementHeader}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Updated On Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                  >
                    <tbody>
                      {commissions
                        .filter((app) => app.type === activeTab) // Filter commissions by activeTab
                        .map((item, index) => (
                          <tr key={item?.id}>
                            <td width="33%">{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                            <td width="34%">{`${item?.commission_percentege}%`}</td>
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

export default withFilters(CommissionManagement);


