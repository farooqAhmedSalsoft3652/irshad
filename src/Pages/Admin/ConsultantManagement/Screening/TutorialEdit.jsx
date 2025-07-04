import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import VideoUploader from "../../../../Components/VideoUploader";
import { useNavigate, useParams } from "react-router-dom";
import withModal from "../../../../HOC/withModal";
import { useEffect, useState } from "react";
import { images } from "../../../../Assets";

// Your dummy data
const FaqData = [
  {
    id: 1,
    question: "Q? This FAQ has text only?",
    answer: "A) This is a text-based FAQ answer.",
  },
  {
    id: 2,
    question: "Q? This FAQ shows an image only?",
    poster: images.BannerImg,
  },
  {
    id: 3,
    question: "Q? This FAQ plays a video with poster?",
    // video: TestVideo,
    poster: images.BannerImg,
  },
];

const editFaqSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().when("answerType", {
    is: (val) => val?.includes("Text"),
    then: Yup.string().required("Text answer is required"),
  }),
  poster: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Image"),
    then: Yup.mixed().required("Image is required"),
  }),
  video: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Video"),
    then: Yup.mixed().required("Video is required"),
  }),
});

const TutorialEdit = ({ showModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    question: "",
    answer: "",
    poster: "",
    video: "",
    answerType: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    const fetchFaq = () => {
      try {
        const faqData = FaqData?.find((item) => item.id === Number(id));

        if (!faqData) {
          throw new Error("FAQ not found");
        }

        // Transform the dummy data to match our form structure
        const answerType = [];
        if (faqData.answer) answerType.push("Text");
        if (faqData.poster && !faqData.video) answerType.push("Image");
        if (faqData.video) answerType.push("Video");

        setInitialValues({
          question: faqData.question || "",
          answer: faqData.answer || "",
          poster: faqData.poster || "",
          video: faqData.video || "",
          answerType,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching FAQ:", error);
        showModal("Error", "Failed to load FAQ data", () => navigate(-1), true);
      }
    };

    fetchFaq();
  }, [id, showModal, navigate]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      //   console.log("Updated FAQ values:", values);

      showModal(
        "",
        `FAQ has been updated successfully`,
        () => navigate(-1),
        true
      );
      resetForm();
    } catch (error) {
      showModal("", "Failed to update FAQ", null, true);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout pageTitle="Edit FAQ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="dashCard mb-4">
                <p>Loading FAQ data...</p>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageTitle="Edit FAQ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row">
                <div className="col-12 mb-4 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Edit FAQ</h2>
                </div>
              </div>

              <Formik
                initialValues={initialValues}
                //    validationSchema={editFaqSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                }) => (
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
                        <label className="form-label fw-medium">Answer</label>
                        <div className="d-flex gap-4 flex-wrap">
                          {["Text", "Image", "Video"].map((opt) => (
                            <div
                              key={opt}
                              className="form-check form-check-inline"
                            >
                              <Field
                                name="answerType"
                                type="checkbox"
                                value={opt}
                                className="form-check-input"
                                id={`answer-${opt}`}
                                checked={values.answerType.includes(opt)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`answer-${opt}`}
                              >
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
                            label="Answer Text"
                            type="text"
                            placeholder="Enter Text Answer"
                            id="answer"
                            name="answer"
                            value={values.answer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.answer && errors.answer}
                          />
                        </div>
                      </div>
                    )}
                    {/* Conditionally Show Image Upload */}
                    {values.answerType.includes("Image") && (
                      <div className="row mb-4">
                        <label className="mainLabel ps-3">Image</label>
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                          <ImageUpload
                            onChange={(file) => setFieldValue("poster", file)}
                            numberOfFiles={1}
                            errorFromParent={touched.poster && errors.poster}
                            images={initialValues.poster}
                          />
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
                            onChange={(file) => setFieldValue("video", file)}
                            errorFromParent={touched.video && errors.video}
                            initialVideo={initialValues.video}
                            posterImage={initialValues.poster}
                            onPosterChange={(file) =>
                              setFieldValue("poster", file)
                            }
                          />
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12 mt-3">
                        <CustomButton
                          variant="btn btn-primary min-width-180"
                          text="Update"
                          type="submit"
                        />
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

export default withModal(TutorialEdit);
