import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import VideoUploader from "../../../Components/VideoUploader";
import { useNavigate } from "react-router-dom";
import withModal from "../../../HOC/withModal";

const addFaqSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  text: Yup.string().when("answerType", {
    is: (val) => val?.includes("Text"),
    then: Yup.string().required("Text answer is required"),
  }),
  photo: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Image"),
    then: Yup.mixed().required("Image is required"),
  }),
  video: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Video"),
    then: Yup.mixed().required("Video is required"),
  }),
});

const FaqAdd = ({ showModal }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    // console.log(values);
    showModal("", `FAQ has been added successfully`, () => navigate(-1), true);
    resetForm();
  };

  return (
    <DashboardLayout pageTitle="Add FAQ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row">
                <div className="col-12 mb-4 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Add FAQ</h2>
                </div>
              </div>

              <Formik
                initialValues={{
                  question: "",
                  text: "",
                  photo: "",
                  video: "",
                  answerType: [], // Array for selected checkboxes
                }}
                // validationSchema={addFaqSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                  <Form className="category-wrap">
                    <div className="row">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 my-2">
                        <CustomInput
                          label="Question"
                          type="text"
                          required
                          placeholder="Enter Question"
                          id="question"
                          name="question"
                          value={values.question}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.question && errors.question}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <label className="form-label fw-medium">Answer Type</label>
                        <div className="d-flex gap-4 flex-wrap">
                          {["Text", "Image", "Video"].map((opt) => (
                            <div key={opt} className="form-check form-check-inline">
                              <Field name="answerType" type="checkbox" value={opt} className="form-check-input" id={`answer-${opt}`} />
                              <label className="form-check-label" htmlFor={`answer-${opt}`}>
                                {opt}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Conditionally Show Text Field */}
                    {values.answerType.includes("Text") && (
                      <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 my-2">
                          <CustomInput
                            label="Text"
                            type="text"
                            placeholder="Enter Text Answer"
                            id="text"
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.text && errors.text}
                          />
                        </div>
                      </div>
                    )}
                    {/* Conditionally Show Image Upload */}
                    {values.answerType.includes("Image") && (
                      <div className="row mb-4">
                        <label className="mainLabel ps-3">Image</label>
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                          <ImageUpload onChange={(file) => setFieldValue("photo", file)} numberOfFiles={1} errorFromParent={touched.photo && errors.photo} />
                        </div>
                      </div>
                    )}
                    {/* Conditionally Show Video Upload */}
                    {values.answerType.includes("Video") && (
                      <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                          <VideoUploader
                            name="video"
                            label="Video"
                            onChange={handleChange}
                            // onChange={(file) => setFieldValue("video", file)}
                            errorFromParent={touched.video && errors.video}
                          />
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12 mt-3">
                        <CustomButton variant="btn btn-primary min-width-180" text="Add FAQ" type="submit" />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(FaqAdd);
