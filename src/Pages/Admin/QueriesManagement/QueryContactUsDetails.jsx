import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../../Assets";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { contactUsTableData } from "../../../Config/data";
import { chatInitiate2Schema } from "../../../Config/Validations";
import { Col, Row } from "react-bootstrap";

const QueryContactUsDetails = () => {
  const { id } = useParams();
  const [queriesData, setQueriesData] = useState({});
  const [initiateModal, setInitiateModal] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const response = contactUsTableData.detail.data.find((e) => e.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setQueriesData(response.detail);
        setQueriesData(response);
      }
    };
    getUser();
  }, [id]);

  const { emailAddress, userType, fullName, date, subject, message } = queriesData;
  const handleSubmit = async (values, { resetForm }) => {
    // console.log(values, "title value");
    resetForm();
    setInitiateModal(false);
  };
  return (
    <DashboardLayout pageTitle="View Query">
      <div className="dashCard ">
        <div className="row mb-lg-4 mb-3">
          <div className="col-12">
            <div className="d-flex">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Query</h2>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} className="d-flex flex-column flex-lg-row gap-3">
            <div className="flex-grow-1 order-2 order-lg-1">
              <Col lg={12} xl={11} xxl={7}>
                <Row>
                  {[
                    { label: "Full Name", value: fullName },
                    { label: "email Address", value: emailAddress },
                    { label: "User Type", value: userType },
                    { label: "Date", value: date },
                  ].map(({ label, value }) => (
                    <Col md={6} className="mb-3 mb-lg-4" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0" style={{ textTransform: label === "User Type" ? "capitalize" : "none" }}>
                          {value}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row>
                  {[
                    { label: "Subject", value: subject },
                    { label: "Message", value: message },
                  ].map(({ label, value }) => (
                    <Col xs={12} className="mb-3 mb-lg-4" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0">{value}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
            <div className="flex-shrink-0 order-1 order-lg-2">
              <CustomButton text="Initiate Chat" onClick={() => setInitiateModal(true)} />
            </div>
          </Col>
        </Row>
      </div>
      <CustomModal show={initiateModal} close={() => setInitiateModal(false)}>
        <div className="text-center">
          <img src={images.Check} alt="" className="" style={{ width: "90px" }} />
        </div>
        <Formik
          initialValues={{
            subject: "",
          }}
          validationSchema={chatInitiate2Schema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="category-wrap px-sm-4">
              <div className="row">
                <div className="col-12 mb-md-4 mb-3 mt-3">
                  <CustomInput
                    label="Give Subject To Initiate Chat"
                    labelclass="mainLabel"
                    type="text"
                    rows={4}
                    placeholder="Enter Subject Here"
                    id="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.subject && errors.subject}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3 text-center">
                  <CustomButton variant="btn btn-primary" className="px-5" text="Okay" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </DashboardLayout>
  );
};

export default QueryContactUsDetails;
