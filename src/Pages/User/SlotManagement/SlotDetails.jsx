import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import SlotCard from "../../../Components/SlotCard";
import { slotManagementHistoryData, slotsData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitleUser } from "../../../Utils/helper";
import CustomModal from "../../../Components/CustomModal";
import { Form, Formik } from "formik";
import CustomInput from "../../../Components/CustomInput";
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";
import { modalReasonValidation } from "../../../Config/Validations";

const SlotDetails = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
  reasonModal,
  closeModal,
}) => {
  usePageTitleUser("Slots Details");
  const { id } = useParams();
  const navigate = useNavigate();

  const [daySlots, setDaySlots] = useState([]);
  const [allData, setAllData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [reasonBookModal, setReasonBookModal] = useState(false);
  const [reasonReduceHourModal, setReasonReduceHourModal] = useState(false);

  const fetchUsers = async () => {
    try {
      startSubmitting(true);

      const response = slotManagementHistoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;

        const slotData = data?.find((item) => item.slot_id == Number(id));

        // Add new_entry property to slotData if it doesn't exist
        // if (slotData) {
        //   slotData.new_entry =
        //     slotData.new_entry !== undefined ? slotData.new_entry : false;
        // }

        const filteredSlots = slotsData?.detail?.data.filter(
          (item) => item.slot_id == slotData?.slot_id
        );

        setDaySlots(filteredSlots || []);
        setAllData(slotData);

        console.log(filteredSlots, "filteredSlots 0.");
        console.log(slotData, "slotData with new_entry property");

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
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters, slotsData, slotManagementHistoryData, id]);

  const BookedNextWeek = () => {
    showModal(
      "", // heading
      "Are you sure you want to Book Next week?", // para
      () => {
        closeModal(); // ✅ now it works
        setTimeout(() => setReasonBookModal(true), 300);
      },
      null,
      false
    );
  };

  const handleReasonBookSubmit = (values, { resetForm }) => {
    console.log("Request submitted with values:", values);

    // Create FormData for file upload if needed
    if (values.documents && values.documents.length > 0) {
      const formData = new FormData();
      formData.append("description", values.description);

      // Append each document to the FormData
      values.documents.forEach((file, index) => {
        formData.append(`document_${index}`, file);
      });

      console.log("FormData created with files for upload");
    }

    // Show success message
    showModal(
      "",
      "Booked Request for next week has been send Sucessfully. Wait for the admin's Apporval",
      null,
      true // success
    );

    // Close the modal and reset form
    setReasonBookModal(false);
    resetForm();
  };

  const ReduceHours = () => {
    showModal(
      "",
      "Are you sure you want to reduce working hour for Next week?",
      () => {
        closeModal(); // ✅ now it works
        setTimeout(() => setReasonReduceHourModal(true), 300);
      }
    );
  };

  const handleReduceHoursSubmit = (values, { resetForm }) => {
    console.log("Request submitted with values:", values);

    // Create FormData for file upload if needed
    if (values.documents && values.documents.length > 0) {
      const formData = new FormData();
      formData.append("description", values.description);

      // Append each document to the FormData
      values.documents.forEach((file, index) => {
        formData.append(`document_${index}`, file);
      });

      console.log("FormData created with files for upload");
    }

    // Show success message
    showModal(
      "",
      "Your working hour deduction Request for the next week has been send Successfully. Wait for the admin's Approval",
      null,
      true // success
    );

    // Close the modal and reset form
    setReasonReduceHourModal(false);
    resetForm();
  };

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between mb-3">
                  <div className="flex-shrink-0">
                    <BackButton2 />
                  </div>
                  <div className="flex-grow-1 text-center">
                    <h2 className="fw-bold mb-1 page-title">
                      {allData?.new_entry ? "View Slot" : "View History Slots"}
                    </h2>
                  </div>
                </div>
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between">
                  <h5 className="">Week: 19 Oct-27 Oct 2024</h5>
                  <h5 className="">Working Hours: 19</h5>
                </div>
                <Row className="g-3 g-lg-4">
                  {daySlots?.map((daySlot, index) => (
                    <Col xs={12} lg={6} xl={3} key={index}>
                      <SlotCard
                        day={daySlot?.day}
                        date={daySlot.date}
                        slots={daySlot.slots}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} className="mt-4 d-flex gap-3 flex-wrap">
                <CustomButton
                  variant="primary"
                  text="Create same slots for next week"
                  className="px-4"
                  onClick={() => navigate("/slot-management/add")}
                />
                <CustomButton
                  variant="secondary"
                  text="Reduce working hours for next week"
                  className="px-4"
                  onClick={ReduceHours}
                />
                <CustomButton
                  variant="secondary"
                  text="Booked All Next Week"
                  className="px-4"
                  onClick={BookedNextWeek}
                />
                {allData?.new_entry && (
                  <Link
                    to={`/slot-management/${id}/edit`}
                    className="btn btn-secondary min-width-180"
                    // state={{ service_name: item.title }}
                  >
                    Edit Slot
                  </Link>
                )}
              </Col>
            </Row>
          </div>
        </div>
        <CustomModal
          show={reasonBookModal}
          hideClose={false}
          close={() => {
            setReasonBookModal(false);
          }}
          className="rating-modal"
        >
          <Formik
            initialValues={{
              description: "",
              uploadFile: null, // Initialize as null
            }}
            validationSchema={modalReasonValidation}
            onSubmit={handleReasonBookSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <Form>
                <h3 className="modalHeading">Provide Reason for booked week</h3>
                {console.log("Errors", errors)}
                <div className="mb-3">
                  <CustomInput
                    type="textarea"
                    required
                    label="Description:"
                    placeholder="Enter Description"
                    id="description"
                    name="description"
                    rows="4"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && errors.description}
                  />
                </div>

                <div className="modal-file-uploader mb-3">
                  <label className="upload-label" htmlFor="uploadFile">
                    <UploadIcon /> <span>Upload Files (PDF, Docx, JPG)</span>
                  </label>

                  <input
                    id="uploadFile"
                    name="uploadFile"
                    type="file"
                    accept=".pdf,.docx,.jpg,.jpeg"
                    onChange={(event) =>
                      setFieldValue("uploadFile", event.currentTarget.files[0])
                    }
                    className="d-none"
                  />

                  {touched.uploadFile && errors.uploadFile && (
                    <div className="error-message red-text">
                      {errors.uploadFile}
                    </div>
                  )}

                  {values.uploadFile && (
                    <div className="upload-file">
                      <strong>{values.uploadFile.name}</strong>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => setFieldValue("uploadFile", null)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className="text-center d-flex justify-content-center gap-3">
                  <CustomButton
                    variant="primary"
                    text="Post"
                    pendingText="Submitting..."
                    isPending={isSubmitting}
                    type="submit"
                    disabled={isSubmitting}
                  />
                  <CustomButton
                    variant="secondary"
                    text="Cancel"
                    onClick={() => setReasonBookModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </CustomModal>
        <CustomModal
          show={reasonReduceHourModal}
          hideClose={false}
          close={() => {
            setReasonReduceHourModal(false);
          }}
          className="rating-modal"
        >
          <Formik
            initialValues={{
              description: "",
              uploadFile: null, // Initialize as null
            }}
            validationSchema={modalReasonValidation}
            onSubmit={handleReduceHoursSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <Form>
                <h3 className="modalHeading">
                  Provide Reason for reduce hours
                </h3>
                {console.log("Errors", errors)}
                <div className="mb-3">
                  <CustomInput
                    type="textarea"
                    required
                    label="Description:"
                    placeholder="Enter Description"
                    id="description"
                    name="description"
                    rows="4"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && errors.description}
                  />
                </div>

                <div className="modal-file-uploader mb-3">
                  <label className="upload-label" htmlFor="uploadFile">
                    <UploadIcon /> <span>Upload Files (PDF, Docx, JPG)</span>
                  </label>

                  <input
                    id="uploadFile"
                    name="uploadFile"
                    type="file"
                    accept=".pdf,.docx,.jpg,.jpeg"
                    onChange={(event) =>
                      setFieldValue("uploadFile", event.currentTarget.files[0])
                    }
                    className="d-none"
                  />

                  {touched.uploadFile && errors.uploadFile && (
                    <div className="error-message red-text">
                      {errors.uploadFile}
                    </div>
                  )}

                  {values.uploadFile && (
                    <div className="upload-file">
                      <strong>{values.uploadFile.name}</strong>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => setFieldValue("uploadFile", null)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className="text-center d-flex justify-content-center gap-3">
                  <CustomButton
                    variant="primary"
                    text="Post"
                    pendingText="Submitting..."
                    isPending={isSubmitting}
                    type="submit"
                    disabled={isSubmitting}
                  />
                  <CustomButton
                    variant="secondary"
                    text="Cancel"
                    onClick={() => setReasonReduceHourModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </CustomModal>
      </Container>
    </>
  );
};

export default withModal(withFilters(SlotDetails));
