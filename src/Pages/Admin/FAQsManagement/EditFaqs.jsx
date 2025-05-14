import { ErrorMessage, FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CiCirclePlus, CiTrash } from "react-icons/ci";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import UploadAndDisplayVideo from "../../../Components/UploadAndDisplayVideo/UploadAndDisplayVideo";
import { faqSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { faqs } from "../../../Config/data";
import { isNullOrEmpty } from "../../../Utils/helper";
import { useNavigate } from "react-router-dom";

const EditFaqs = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();

  const [faqsData, setFaqsData] = useState(null);

  useEffect(() => {
    const getFaqsApiData = async () => {
      const response = faqs;
      if (response) {
        setFaqsData(response);
      }
    };
    getFaqsApiData();
  }, []);
  const handleSubmit = (values, { resetForm }) => {
    startSubmitting();

    showModal("Update FAQ", "Are you sure you want to update this FAQ?", async () => {
      await onConfirmStatusChange();
      stopSubmitting();
    });

    const onConfirmStatusChange = async () => {
      showModal("Successful", "FAQ has been updated successfully!", () => navigate(`/admin/faqs`), true);
      resetForm();
      console.log("Submitted Values: ", values);
    };
  };
  if (isNullOrEmpty(faqsData)) {
    return (
      <DashboardLayout>
        <p>loading...</p>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="Edit Faqs">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton />
              Edit FAQs
            </h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <div className="dashCard">
              <Row>
                <Col xs={10}>
                  <Formik
                    initialValues={{
                      faqs: faqsData.map((faq) => ({
                        question: faq.question || "",
                        answerType: faq.answerType || "",
                        answer: faq.answer || "",
                        video: faq.video || "",
                        photo: faq.image || "",
                      })),
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={faqSchema}
                    enableReinitialize
                  >
                    {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, touched, errors }) => (
                      <Form onSubmit={handleSubmit}>
                        <FieldArray name="faqs">
                          {({ push, remove }) => (
                            <div>
                              {values.faqs.map((faq, index) => (
                                <div key={index}>
                                  <div className="faq-section">
                                    {/* CustomInput for Question */}
                                    <CustomInput
                                      label="Question"
                                      required
                                      labelclass="mainLabel"
                                      type="text"
                                      placeholder="Add Question"
                                      inputclass="mainInput"
                                      id={`faqs.${index}.question`}
                                      value={faq.question}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched?.faqs?.[index]?.question && errors?.faqs?.[index]?.question}
                                    />
                                    <div className="d-flex gap-sm-4 gap-1 my-4 circle-wrapper align-items-center">
                                      <Form.Label className="mb-0">Answer: </Form.Label>
                                      <div className="d-flex gap-2">
                                        <label className="d-flex align-items-center gap-2 cp circle">
                                          <Form.Check
                                            type="radio"
                                            name={`faqs.${index}.answerType`}
                                            value="text"
                                            checked={faq.answerType === "text"}
                                            onChange={() => setFieldValue(`faqs.${index}.answerType`, "text")}
                                            disabled={faq.answerType !== "" && faq.answerType !== "text"}
                                            className="cp"
                                          />
                                          <span className={`${faq.answerType !== "text" && "grayLightColor"}`}>Text</span>
                                        </label>
                                      </div>
                                      <div className="d-flex gap-2">
                                        <label className="d-flex align-items-center gap-2 cp circle">
                                          <Form.Check
                                            type="radio"
                                            name={`faqs.${index}.answerType`}
                                            value="image"
                                            checked={faq.answerType === "image"}
                                            onChange={() => setFieldValue(`faqs.${index}.answerType`, "image")}
                                            disabled={faq.answerType !== "" && faq.answerType !== "image"}
                                            className="cp"
                                          />
                                          <span className={`${faq.answerType !== "image" && "grayLightColor"}`}>Image</span>

                                        </label>
                                      </div>
                                      <div className="d-flex gap-2">
                                        <label className="d-flex align-items-center gap-2 cp circle">
                                          <Form.Check
                                            type="radio"
                                            name={`faqs.${index}.answerType`}
                                            value="video"
                                            checked={faq.answerType === "video"}
                                            onChange={() => setFieldValue(`faqs.${index}.answerType`, "video")}
                                            disabled={faq.answerType !== "" && faq.answerType !== "video"}
                                          />
                                          <span className={`${faq.answerType !== "video" && "grayLightColor"}`}>Video</span>

                                        </label>
                                      </div>
                                    </div>

                                    <ErrorMessage name={`faqs.${index}.answerType`} component="div" className="text-danger" />

                                    {faq.answerType === "text" && (
                                      <CustomInput
                                        label="Answer"
                                        required
                                        labelclass="mainLabel"
                                        type="textarea"
                                        rows={3}
                                        placeholder="Add Text Answer"
                                        inputclass="mainInput"
                                        id={`faqs.${index}.answer`}
                                        value={faq.answer}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched?.faqs?.[index]?.answer && errors?.faqs?.[index]?.answer}
                                      />
                                    )}

                                    {faq.answerType === "image" && (
                                      <div className="mt-4">
                                        <UploadAndDisplayImages
                                          id={index}
                                          images={[faq.photo]}
                                          onChange={(files) => {
                                            setFieldValue(`faqs.${index}.photo`, files);
                                          }}
                                          numberOfFiles={1}
                                        />
                                        <ErrorMessage name={`faqs.${index}.photo`} component="div" className="text-danger" />
                                      </div>
                                    )}

                                    {faq.answerType === "video" && (
                                      <div className="mt-4">
                                        <UploadAndDisplayVideo
                                          videos={[faq.video ?? ""]}
                                          id={index}
                                          onChange={(files) => setFieldValue(`faqs.${index}.video`, files)}
                                          numberOfFiles={1}
                                        />
                                        <ErrorMessage name={`faqs.${index}.video`} component="div" className="text-danger" />
                                      </div>
                                    )}
                                  </div>

                                  <div className="d-flex align-items-center justify-content-end text-end gap-2 my-4">
                                    <div className="chek">
                                      {index > 0 && (
                                        <CustomButton className="notButton" pendingText="Submitting..." type="button" onClick={() => remove(index)}>
                                          <div className="d-flex gap-1 align-items-center">
                                            <span>
                                              <CiTrash size={26} color="#FF0000" />
                                            </span>
                                            <span className="text-decoration-underline" style={{ color: "#FF0000" }}>
                                              Remove
                                            </span>
                                          </div>
                                        </CustomButton>
                                      )}
                                    </div>

                                    <div className="chek">
                                      <CustomButton
                                        className="notButton"
                                        pendingText="Submitting..."
                                        type="button"
                                        onClick={() =>
                                          push({
                                            question: "",
                                            answerType: "",
                                            answer: "",
                                            video: "",
                                            photo: "",
                                          })
                                        }
                                      >
                                        <div className="d-flex gap-2 align-items-center">
                                          <span>
                                            <CiCirclePlus size={26} />
                                          </span>
                                          <span className="text-decoration-underline">Add More</span>
                                        </div>
                                      </CustomButton>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </FieldArray>

                        <CustomButton
                          variant="site-btn primary-btn"
                          className="px-5"
                          text="Update"
                          pendingText="Submitting..."
                          isPending={isSubmitting}
                          type="submit"
                          disabled={isSubmitting}
                        />
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(EditFaqs);
