import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { emergencyContactData } from '../../../Config/data';
import { usePageTitle } from '../../../Utils/helper';
import CustomButton from '../../../Components/CustomButton';
import { Formik, Form, FieldArray  } from 'formik';
import { addUserEmergencyContactSchema } from '../../../Config/Validations';
import CustomInput from '../../../Components/CustomInput';
import PhoneInput from "react-phone-number-input";
import { useFormStatus } from '../../../Hooks/useFormStatus';
import "./style.css";
import {  FaPlus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
const EmergencyContactsAdd = () => {
  usePageTitle("Emergency Contact", true);
  const [emergencyContacts, setEmergencyContacts] = useState(emergencyContactData);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();
  // console.log(emergencyContacts)


  // Handle the submit event
  const handleSubmit = (values, {resetForm}) => {

    startSubmitting();
      console.log("Form submitted", values);
      // alert("Form submitted: " + JSON.stringify(values));
      stopSubmitting(); 
      navigate('/emergency-contacts')
      resetForm();
  };
  
  return (
    <section className='page-content emergency-contect'>
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
            <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">Add Emergency Contacts</h2>
          </Col>
            {emergencyContacts.map((item, index) => (
              <Col xs={12} sm={6} md={4} lg={3} xxl={3} className="mb-2 mb-md-3 mb-lg-3 mb-xxl-4 detail-card" key={index}>
                <h5 className="mb-2 fw-semibold">{item?.name}</h5>
                <p className="fw-normal">{item?.phone}</p>
              </Col>
            ))}
        </Row>
        <Row>
          <Col xs={12} className='mb-4 mb-xxl-4'>
            <h2 className='page-title fw-bold'>User's Added Numbers</h2>
          </Col>
          <Formik
            initialValues={{
              contacts: emergencyContactData || [], // Ensure contacts is always an array
            }}
            validationSchema={addUserEmergencyContactSchema}
            onSubmit={handleSubmit}
          >
            {({ values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched
          }) => (
              <Form onSubmit={handleSubmit}>
                <FieldArray
                  name="contacts"
                  render={(arrayHelpers) => (
                    <Row>
                      {values.contacts?.length > 0 ? (
                        values.contacts.map((contact, index) => (
                          <Col xs={12} sm={6} md={4} lg={3} xxl={3} key={index} className="add-contact mb-1">
                            <div className="d-flex remove-btn justify-content-end">
                              <CustomButton type="button" className=" notButton"  onClick={() => arrayHelpers.remove(index)}>
                              <span className="tooltip-toggle" aria-label="Delete">
                                <FaTrash size={20} className="text-danger" />
                              </span>
                              </CustomButton>
                            </div>
                            <CustomInput
                              label={`Name`}
                              labelclass="mainLabel"
                              type="text"
                              required
                              placeholder="Enter Name"
                              inputclass="mainInput"
                              id={`contacts.${index}.name`}
                              value={contact.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.contacts?.[index]?.name && errors.contacts?.[index]?.name}
                            />
                            <div className="inputWrapper position-relative">
                              <label htmlFor={`contacts.${index}.phone`} className="mainLabel">
                                Phone Number
                                <span className="text-danger">*</span>
                              </label>
                              <PhoneInput
                                defaultCountry="US"
                                placeholder="Enter phone number"
                                value={contact.phone}
                                onChange={(phone) => setFieldValue(`contacts.${index}.phone`, phone)}
                                onBlur={() => setFieldTouched(`contacts.${index}.phone`, true)}
                                className="mainInput"
                              />
                              {touched.contacts?.[index]?.phone && errors.contacts?.[index]?.phone ? (
                                <div className="text-danger">{errors.contacts[index].phone}</div>
                              ) : null}
                            </div>
                          </Col>
                        ))
                      ) : (
                        <div>No contacts available</div>
                      )}

                      <div className="">
                        <CustomButton
                          className="add-btn-secondary fw-bold"
                          onClick={() =>
                            arrayHelpers.push({ name: "", phone: "" }) // Add empty contact
                          }
                          type="button"
                        >
                              <span className="tooltip-toggle" aria-label="Delete">
                                <FaPlus size={18} className="text-blue" />
                              </span> Add More

                        </CustomButton>
                      </div>
                    </Row>
                  )}
                />
                <CustomButton
                  variant="btn btn-primary"
                  className="mt-4"
                  text="Submit All"
                  pendingText="Submitting..."
                  type="submit"
                />
            </Form>
            )}
          </Formik>
        </Row>
      </Container>
    </section>
  )
}

export default EmergencyContactsAdd