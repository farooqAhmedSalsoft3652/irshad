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
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Query</h2>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-7">
                <div className="row d-flex justify-content-between align-items-center my-4">
                  {[
                    { label: "Full Name", value: fullName },
                    { label: "email Address", value: emailAddress },
                    { label: "User Type", value: userType },
                    { label: "Date", value: date },
                  ].map(({ label, value }) => (
                    <div className="col-md-6 mb-3" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0" style={{ textTransform: label === "User Type" ? "capitalize" : "none" }}>
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="col-md-6">
                    <CustomButton text="Initiate Chat" onClick={()=>setInitiateModal(true)} />
                  </div>
                </div>
                <div className="row ">
                  {[
                    { label: "Subject", value: subject },
                    { label: "Message", value: message },
                  ].map(({ label, value }) => (
                    <div className="col-md-10 col-12 mb-3" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <CustomModal show={initiateModal} close={() => setInitiateModal(false)}>
        <div className="text-center">
            <img src={images.Check} alt="" className="" style={{width: "90px"}} />
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
