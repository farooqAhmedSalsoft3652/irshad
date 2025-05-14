import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { addEmergencyContactSchema } from "../../../Config/Validations";

const AddEmergencyContacts = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();

  // Function to handle adding the emergency contact
  const handleAddContact = async (values) => {
    // Logic for adding the contact goes here (e.g., API call)
    // You can implement this logic according to your API setup
    // For example: await api.addEmergencyContact(values);
  };

  // Handle the submit event
  const handleSubmit = (values) => {
    startSubmitting();
    showModal(
      "Add Emergency Contact",
      `Are you sure you want to add this emergency contact?`,
      async () => {
        try {

          await handleAddContact(values);
          showModal(
            "Successful",
            "Emergency contact has been added successfully!",
            () => navigate(-1), 
            true
          );
        } catch (error) {
          showModal("Error", "There was an error adding the emergency contact. Please try again.", null, true);
        }
        stopSubmitting();
      }
    );

    stopSubmitting(); 
  };

  return (
    <DashboardLayout pageTitle="Add Emergency Number">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton />
              Add Emergency Number
            </h2>
          </div>
        </div>
        <div className="mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                }}
                validationSchema={addEmergencyContactSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched }) => (
                  <form onSubmit={handleSubmit} className="emergencyContact-wrap">
                    <div className="dashCard">
                      <div className="row">
                        <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-4">
                          <div className="row">
                            <div className="col-12 my-2">
                              <CustomInput
                                label="Title"
                                labelclass="mainLabel"
                                type="text"
                                required
                                placeholder="Add Title"
                                inputclass="mainInput"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && errors.name}
                              />
                            </div>
                            <div className="col-12">
                              <label htmlFor="phoneInput" className="mainLabel">
                                Phone number<span className="text-danger">*</span>
                              </label>
                              <PhoneInput
                                defaultCountry="US"
                                placeholder="Enter phone number"
                                value={values.phone}
                                onChange={(phone) => setFieldValue("phone", phone)}
                                onBlur={() => setFieldTouched("phone", true)}
                                className="mainInput"
                              />
                              {touched.phone && errors.phone ? <div className="text-danger">{errors.phone}</div> : null}
                            </div>
                            <div className="col-12 mt-4">
                              <CustomButton
                                variant="site-btn primary-btn"
                                className="px-5"
                                text="Add"
                                pendingText="Submitting..."
                                isPending={isSubmitting}
                                type="submit"
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(AddEmergencyContacts);
