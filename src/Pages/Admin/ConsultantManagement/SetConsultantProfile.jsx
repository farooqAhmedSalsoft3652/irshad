import { Form, Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import {
  categoryStatus,
  statusOptions,
  language,
  servicesOptions,
  categoryOptions,
  serviceOptions,
} from "../../../Config/TableStatus";
import {
  addSubCategorySchema,
  setConsultantProfileSchema,
} from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { Col, FormCheck, Row } from "react-bootstrap";
import ReactSelect from "react-select";
import { consultantManagerData } from "../../../Config/data";

const SetConsultantProfile = ({ showModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errorsData, setErrorsData] = useState({});
  const [formData, setFormData] = useState({});

  const getFormData = async () => {
    const response = consultantManagerData?.detail?.data?.find(
      (item) => item.id === id
    );

    if (response) {
      setFormData(response);
    }
  };

  useEffect(() => {
    getFormData();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  console.log(formData, "formData");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // 5 second delay with await
      // const response = await axios.post("/api/add-sub-category", values);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // remove this when call Api

      console.log("Submit Values", values);

      showModal(
        "",
        `Consultant profile has been updated successfully!`,
        () => navigate(-1),
        true
      );

      resetForm({
        values: {
          working_hours: "",
          commission_rate: "",
          category: [],
          services: [],
          sessionTypes: {
            standard: [],
            quick: [],
          },
          sessionAmounts: {
            standard: {},
            quick: {},
          },
          change_from_default: false,
        },
      });
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setSubmitting(false); // ✅
    }
  };

  const formattedCategoryOptions = categoryOptions
    .filter((option) => option.value !== "") // "Select Category" hatao
    .map((option) => ({
      value: option.value,
      label: option.text, // ReactSelect ke liye label chahiye
    }));

  const formattedServiceOptions = serviceOptions
    .filter((option) => option.value !== "") // "Select language" waala option hata rahe ho
    .map((option) => ({
      value: option.value,
      label: option.text,
    }));

  const sessionOptions = [
    { label: "Chat", value: "chat" },
    { label: "Call", value: "call" },
    { label: "Video", value: "video" },
  ];

  return (
    <DashboardLayout pageTitle="Add Sub-Category">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-4 page-header">
            <Col xs={12} className="">
              <div className="d-flex gap-2">
                <BackButton2 />
                <h2 className="align-self-start mainTitle mb-0">
                  Set Consultant Profile
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={11} xxl={8}>
              {console.log(formData?.quick_chat_min, "Quick Check")}
              <Formik
                initialValues={{
                  category: [],

                  working_hours: formData?.total_hours || "",
                  commission_rate: formData?.commission_rate || "",
                  category: formattedCategoryOptions.filter((opt) =>
                    formData?.given_category?.some(
                      (cat) => cat.category_name === opt.label
                    )
                  ),
                  services: formattedServiceOptions.filter((opt) =>
                    formData?.given_service?.some(
                      (srv) => srv.service_name === opt.label
                    )
                  ),
                  change_from_default: formData?.change_from_default || false,
                  sessionTypes: {
                    standard: [],
                    quick: [],
                  },

                  sessionAmounts: {
                    standard: {
                      chat: {
                        min: formData?.standard_chat_min || "",
                        max: formData?.standard_chat_max || "",
                      },
                      call: {
                        min: formData?.standard_call_min || "",
                        max: formData?.standard_call_max || "",
                      },
                      video: {
                        min: formData?.standard_video_min || "",
                        max: formData?.standard_video_max || "",
                      },
                    },
                    quick: {
                      chat: {
                        min: formData?.quick_chat_min || "",
                        max: formData?.quick_chat_max || "",
                      },
                      call: {
                        min: formData?.quick_call_min || "",
                        max: formData?.quick_call_max || "",
                      },
                      video: {
                        min: formData?.quick_video_min || "",
                        max: formData?.quick_video_max || "",
                      },
                    },
                  },
                }}
                // validationSchema={setConsultantProfileSchema(formData)}
                validationSchema={setConsultantProfileSchema(formData)}
                // validationSchema={(values) => setConsultantProfileSchema(formData, values.sessionTypes)}
                //  context={{ sessionTypes: values.sessionTypes }}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  isSubmitting,
                }) => {
                  useEffect(() => {
                    const updateSessionTypesFromAmounts = (type) => {
                      const existing = values.sessionTypes?.[type] || [];
                      const updated = [...existing];

                      sessionOptions.forEach(({ value }) => {
                        const min = values.sessionAmounts?.[type]?.[value]?.min;
                        const max = values.sessionAmounts?.[type]?.[value]?.max;

                        if (min && max && !updated.includes(value)) {
                          updated.push(value);
                        }
                      });

                      setFieldValue(`sessionTypes.${type}`, updated);
                    };

                    if (
                      values.sessionAmounts?.standard &&
                      values.sessionAmounts?.quick
                    ) {
                      updateSessionTypesFromAmounts("standard");
                      updateSessionTypesFromAmounts("quick");
                    }
                  }, [values.sessionAmounts]);

                  return (
                    <Form>
                      {console.log("Erro", errors)}
                      <Row className="border-bottom-after position-relative pb-3 mb-4">
                        <Col xs={12}>
                          <h3 className="mb-4">Set Amount</h3>
                        </Col>
                        <Col
                          xs={12}
                          lg={6}
                          className="set-amount border-right-after position-relative"
                        >
                          <h3 className="fw-regular">Standard</h3>

                          {sessionOptions.map(({ label, value }) => (
                            <div key={value}>
                              
                              <div className="d-flex align-items-center gap-3 mb-4 mb-sm-3 flex-wrap">
                                <FormCheck
                                  type="checkbox"
                                  id={`standard-sessionType-${value}`}
                                  label={label}
                                  checked={values.sessionTypes?.standard?.includes(
                                    value
                                  )}
                                  onChange={(e) => {
                                    const current =
                                      values.sessionTypes?.standard || [];
                                    const updated = e.target.checked
                                      ? [...current, value]
                                      : current.filter(
                                          (type) => type !== value
                                        );

                                    setFieldValue(
                                      "sessionTypes.standard",
                                      updated
                                    );
                                    setFieldTouched(
                                      "sessionTypes.standard",
                                      true
                                    );
                                  }}
                                />
                                {touched.sessionAmounts?.standard?.[value]?.min &&
  errors.sessionAmounts?.standard?.[value]?.min && (
    <div className="error-message">
      {errors.sessionAmounts.standard[value].min}
    </div>
)}

                                <Field
                                  name={`sessionAmounts.standard.${value}.min`}
                                  value={
                                    values.sessionAmounts?.standard?.[value]
                                      ?.min || ""
                                  }
                                  type="number"
                                  className="form-control w-auto"
                                  disabled={
                                    !values.sessionTypes?.standard?.includes(
                                      value
                                    )
                                  }
                                  placeholder="Enter Amount"
                                  min={0}
                                  max={100}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `sessionAmounts.standard.${value}.min`,
                                      e.target.value
                                    )
                                  }
                                  // onBlur={() => {
                                  //   setFieldTouched(
                                  //     `sessionAmounts.${value}`,
                                  //     true
                                  //   );
                                  // }}

                                  onBlur={() =>
                                    setFieldTouched(
                                      `sessionAmounts.standard.${value}.min`,
                                      true
                                    )
                                  }
                                />

                                <span className="seprator">-</span>

                                <Field
                                  name={`sessionAmounts.standard.${value}.max`}
                                  value={
                                    values.sessionAmounts?.standard?.[value]
                                      ?.max || ""
                                  }
                                  type="number"
                                  className="form-control w-auto"
                                  disabled={
                                    !values.sessionTypes?.standard?.includes(
                                      value
                                    )
                                  }
                                  placeholder="Enter Amount"
                                  min={0}
                                  max={100}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `sessionAmounts.standard.${value}.max`,
                                      e.target.value
                                    )
                                  }
                                  onBlur={() =>
                                    setFieldTouched(
                                      `sessionAmounts.standard.${value}.min`,
                                      true
                                    )
                                  }
                                />
                                {touched.sessionAmounts?.standard?.[value]
                                  ?.min &&
                                  errors.sessionAmounts?.standard?.[value]
                                    ?.min && (
                                    <div className="error-message">
                                      {
                                        errors.sessionAmounts.standard[value]
                                          .min
                                      }
                                    </div>
                                  )}

                                {touched.sessionAmounts?.standard?.[value]
                                  ?.max &&
                                  errors.sessionAmounts?.standard?.[value]
                                    ?.max && (
                                    <div className="error-message">
                                      {
                                        errors.sessionAmounts.standard[value]
                                          .max
                                      }
                                    </div>
                                  )}
                              </div>
                            </div>
                          ))}
                        </Col>

                        {formData?.is_quick && (
                          <Col xs={12} lg={6} className="set-amount">
                            <h3 className="fw-regular">Quick</h3>
                            {sessionOptions.map(({ label, value }) => (
                              <div key={value}>
                                <div className="d-flex align-items-center gap-3 mb-4 mb-sm-3 flex-wrap">
                                  <FormCheck
                                    type="checkbox"
                                    id={`quick-sessionType-${value}`}
                                    label={label}
                                    checked={values.sessionTypes?.quick?.includes(
                                      value
                                    )}
                                    onChange={(e) => {
                                      const current =
                                        values.sessionTypes?.quick || [];
                                      const updated = e.target.checked
                                        ? [...current, value]
                                        : current.filter(
                                            (type) => type !== value
                                          );

                                      setFieldValue(
                                        "sessionTypes.quick",
                                        updated
                                      );
                                      setFieldTouched(
                                        "sessionTypes.quick",
                                        true
                                      );
                                    }}
                                  />

                                  <Field
                                    name={`sessionAmounts.quick.${value}.min`}
                                    value={
                                      values.sessionAmounts?.quick?.[value]
                                        ?.min || ""
                                    }
                                    type="number"
                                    className="form-control w-auto"
                                    disabled={
                                      !values.sessionTypes?.quick?.includes(
                                        value
                                      )
                                    }
                                    placeholder="Enter Amount"
                                    min={0}
                                    max={100}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `sessionAmounts.quick.${value}.min`,
                                        e.target.value
                                      )
                                    }
                                    onBlur={() =>
                                      setFieldTouched(
                                        `sessionAmounts.quick.${value}.min`,
                                        true
                                      )
                                    }
                                  />

                                  <span className="seprator">-</span>

                                  <Field
                                    name={`sessionAmounts.quick.${value}.max`}
                                    value={
                                      values.sessionAmounts?.quick?.[value]
                                        ?.max || ""
                                    }
                                    type="number"
                                    className="form-control w-auto"
                                    disabled={
                                      !values.sessionTypes?.quick?.includes(
                                        value
                                      )
                                    }
                                    placeholder="Enter Amount"
                                    min={0}
                                    max={100}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `sessionAmounts.quick.${value}.max`,
                                        e.target.value
                                      )
                                    }
                                    onBlur={() =>
                                      setFieldTouched(
                                        `sessionAmounts.quick.${value}.max`,
                                        true
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            ))}
                          </Col>
                        )}
                      </Row>
                      <Row className="border-bottom-after position-relative pb-3 mb-4">
                        <Col xxl={6}>
                          <Row>
                            <Col xs={12} className="mb-3">
                              <label
                                htmlFor="working_hours"
                                className="form-label "
                              >
                                Given Sub Category
                              </label>
                              <ReactSelect
                                isMulti
                                id="category"
                                name="category"
                                className="multi-select"
                                classNamePrefix="select"
                                value={values.category}
                                onChange={(selectedOption) => {
                                  setFieldValue("category", selectedOption);
                                }}
                                onBlur={() => setFieldTouched("category", true)}
                                isClearable={true}
                                isSearchable={true}
                                options={formattedCategoryOptions}
                                placeholder="Select Category"
                              />

                              {touched.category && errors.category && (
                                <div className="error-message">
                                  <p>{errors.category}</p>
                                </div>
                              )}
                            </Col>
                            <Col xs={12} className="mb-3">
                              <label
                                htmlFor="working_hours"
                                className="form-label "
                              >
                                Given Services
                              </label>
                              <ReactSelect
                                isMulti
                                id="services"
                                name="services"
                                className="multi-select"
                                classNamePrefix="select"
                                value={values.services}
                                onChange={(selectedOptions) => {
                                  setFieldValue("services", selectedOptions);
                                }}
                                onBlur={() => setFieldTouched("services", true)}
                                isClearable={true}
                                isSearchable={true}
                                options={formattedServiceOptions}
                                placeholder="Select Services"
                              />
                              {touched.services && errors.services && (
                                <div className="error-message">
                                  <p>{errors.services}</p>
                                </div>
                              )}
                            </Col>
                            <Col xs={12}>
                              <CustomInput
                                label="Working Hours"
                                type="text"
                                required
                                placeholder="Enter Working Hours"
                                id="working_hours"
                                inputclass="input-working"
                                value={values.working_hours}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                  touched.working_hours && errors.working_hours
                                }
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xxl={6}>
                          <Row>
                            <Col xs={12}>
                              <h3 className="mb-3">Commission</h3>
                            </Col>
                            <Col xs={12} className={`mb-3`}>
                              <FormCheck
                                type="checkbox"
                                id="change_from_default"
                                name="change_from_default"
                                label="Change from default"
                                checked={values.change_from_default}
                                onChange={(e) => {
                                  setFieldValue(
                                    "change_from_default",
                                    e.target.checked
                                  );
                                }}
                                onBlur={() =>
                                  setFieldTouched("change_from_default", true)
                                }
                              />
                              {touched.change_from_default &&
                                errors.change_from_default && (
                                  <div className="error-message">
                                    <p>{errors.change_from_default}</p>
                                  </div>
                                )}
                            </Col>
                            <Col xs={12}>
                              <CustomInput
                                label="Commission Rate"
                                type="text"
                                required
                                placeholder="Enter Commission Rate"
                                id="commission_rate"
                                value={values.commission_rate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                  touched.commission_rate &&
                                  errors.commission_rate
                                }
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <CustomButton
                            variant="btn btn-primary"
                            className="px-5"
                            text="Update"
                            pendingText="Submitting..."
                            isPending={isSubmitting}
                            type="submit"
                            disabled={isSubmitting}
                          />
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(SetConsultantProfile);
