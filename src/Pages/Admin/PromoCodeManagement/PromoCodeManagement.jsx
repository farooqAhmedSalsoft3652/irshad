import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { VscPercentage } from "react-icons/vsc";
import { images } from "../../../Assets";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { promoCodeData } from "../../../Config/data";
import { PromoCodeManagementHeader } from "../../../Config/TableHeaders";
import { promoCode } from "../../../Config/Validations";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { dateFormat, serialNum } from "../../../Utils/helper";
import "./PromoCodeManagement.css";

const PromoCodeManagement = ({ filters, setFilters, pagination, updatePagination, onSubmit, isSubmitting, showModal }) => {
  const [promoCodes, setPromoCodes] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState(null); // For holding row data

  const fetchCommission = async () => {
    try {
      const response = promoCodeData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setPromoCodes(data);
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

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  const handleFormSubmit = (values, { resetForm }) => {
    showModal(``, `Promo Code has been added successfully!`, null, true);
    const newEntry = {
      id: Date.now(),
      disbursement_time: values.disbursement_time,
      date: getCurrentDate(),
    };

    setPromoCodes((prevpromocode) => [...prevpromocode, newEntry]);

    resetForm();

    onSubmit(values);
  };

  const handleFormUpdate = (values) => {
    const payload = {
      id: editData?.id,
      promo_name: values.promo_name,
      promo_discount: values.discount,
    };
    // console.log("Update Payload:", payload);
    setEditModal(false);
    showModal(``, `promo code Has Been Updated successfully.`, null, true);
  };
  const handleDelete = (id) => {
      showModal(``, `promo code Has Been deleted successfully.`, null, true);
    //   console.log("Deleted ID:", id); // Just for confirmation
  };

  return (
    <DashboardLayout pageTitle="Promo Code Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Table Section */}
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mainTitle mb-0">Promo Code Management</h2>
                </div>
              </div>
              <div className="mb-4">
                <Formik
                  initialValues={{
                    promo_name: "",
                    discount: "",
                  }}
                  validationSchema={promoCode}
                  onSubmit={handleFormSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className="payout-wrap">
                      <div className="row mb-3">
                        <div className="col-md-10 col-lg-11 col-xl-11 col-xxl-10 promo-code">
                          {/* Flexbox layout with mobile responsiveness */}
                          <div className="d-flex align-items-xl-end flex-xl-row flex-column gap-2">
                            <div className="flex-shrink-0">
                              <CustomInput
                                inputclass="code-name"
                                label="Promo Name"
                                type="text"
                                required
                                placeholder="Enter Promo Name"
                                id="promo_name"
                                value={values.promo_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // error={touched.promo_name && errors.promo_name}
                              />
                              <div className="d-xl-none d-block">
                                <ErrorMessage name="promo_name" component="p" className="error-message red-text mb-0 " />
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <CustomInput
                                inputclass="code-amount"
                                label="Discount"
                                labelclass=""
                                type="number"
                                required
                                placeholder="05"
                                id="discount"
                                value={values.discount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rightIcon={() => <VscPercentage />}
                              />
                              <div className="d-xl-none d-block">
                                <ErrorMessage name="discount" component="p" className="error-message red-text mb-0" />
                              </div>
                            </div>
                            {/* Update Button */}
                            <div className="flex-grow-1 mt-xl-0 mt-2">
                              <CustomButton variant="btn btn-primary" className={`px-5 min-width-200`} text="Add" type="submit" />
                            </div>
                          </div>

                          <div className="d-flex gap-4 d-xl-flex d-none">
                            <div className="code-name">
                              <ErrorMessage name="promo_name" component="p" className="error-message red-text mb-0 " />
                            </div>
                            <div className="">
                              <ErrorMessage name="discount" component="p" className="error-message red-text mb-0" />
                            </div>
                          </div>
                          {/* Commission rate input */}
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <h4 className="dashTitle">Promo Logs</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={PromoCodeManagementHeader}
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
                      {promoCodes.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item.promo_name}</td>
                          <td>{`${item.promo_discount} %`}</td>
                          <td>{dateFormat(item?.date)}</td>
                          <td>
                            <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                              <span className="tooltip-toggle" aria-label="Edit">
                                <CustomButton
                                  className="btn bg-transparent border-0 p-0"
                                  onClick={() => {
                                    setEditData(item);
                                    setEditModal(true);
                                  }}
                                >
                                  <FaEdit size={20} color="#C5E4F6" />
                                </CustomButton>
                              </span>
                              <span className="tooltip-toggle" aria-label="Delete">
                                <CustomButton className="btn bg-transparent border-0 p-0">
                                  <FaTrashAlt size={18} color="#C5E4F6" onClick={() => handleDelete(item.id)} />
                                </CustomButton>
                              </span>
                            </div>
                          </td>
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
      <CustomModal show={editModal} close={() => setEditModal(false)}>
        <div className="text-center">
          <img src={images.Check} alt="check" className="modalImage" />
        </div>
        <div className="px-sm-4">
          <Formik
            enableReinitialize // Important to reset form when editData changes
            initialValues={{
              promo_name: editData?.promo_name || "",
              discount: editData?.promo_discount || "",
            }}
            validationSchema={promoCode}
            onSubmit={handleFormUpdate}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="category-wrap">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-md-4 mb-3">
                      <CustomInput
                        label="Promo Name"
                        type="text"
                        required
                        placeholder="Enter Promo Name"
                        id="promo_name"
                        name="promo_name"
                        value={values.promo_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.promo_name && errors.promo_name}
                      />
                    </div>
                    <div>
                      <CustomInput
                        label="Discount"
                        type="number"
                        required
                        placeholder="05"
                        id="discount"
                        name="discount"
                        value={values.discount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.discount && errors.discount}
                        rightIcon={() => <VscPercentage />}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3 mt-3">
                  <div className="col-12 text-center">
                    <CustomButton variant="btn btn-primary" className="px-5" text="Update" type="submit" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
};

export default withModal(withFilters(PromoCodeManagement));
