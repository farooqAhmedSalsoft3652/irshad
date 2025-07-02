import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Accordion } from "react-bootstrap";
import { images } from "../../../Assets";
import "./index.css";
import { useEffect, useState } from "react";
import TestVideo from "../../../Assets/images/video_dummy.mp4";

const FAQs = () => {
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
      video: TestVideo,
      poster: images.BannerImg,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(FaqData);
  }, []);

  return (
    <DashboardLayout pageTitle="FAQ Management">
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12">
            <div className="dashCard">
              <div className="row mb-3  align-item-baseline">
                <div className="col-md-6  d-sm-flex justify-content-between">
                  <h2 className="mainTitle">FAQ's Management</h2>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-md-end gap-2">
                    <Link className="btn btn-primary px-5" to="/admin/faq-management/add-faq">
                      Add FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <Accordion defaultActiveKey="0">
                    {data.map((item, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                          <div className="d-flex justify-content-between align-items-center w-100 flex-wrap gap-3">
                            <div>{item.question}</div>
                            <div className="">
                              <Link className="fw-bold" style={{ color: "#15355E" }} to={`/admin/faq-management/edit-faq/${item.id}`}>
                                Edit
                              </Link>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* Case 1: Show Video with Poster if video exists */}
                          {item.video ? (
                            <video poster={item.poster} controls className="videoPlayer">
                              <source src={item.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : item.poster && !item.answer ? (
                            // Case 2: Show Image Only if poster exists but no video or text
                            <img src={item.poster} alt="FAQ Visual" className="img-fluid" />
                          ) : (
                            // Case 3: Show Answer Text Only
                            <p className="mb-0">{item.answer}</p>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FAQs;
