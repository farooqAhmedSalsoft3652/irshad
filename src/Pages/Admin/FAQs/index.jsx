import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Accordion } from "react-bootstrap";
import { images } from "../../../Assets";
import './index.css';
import { useEffect, useState } from "react";

const FAQs = () => {
  const FaqData = [
    {
      id: 1,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
    },
    {
      id: 2,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
    },
    {
      id: 3,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
    },
    {
      id: 4,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      poster: images.BannerImg,
    },
    {
      id: 5,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
    },
    {
      id: 6,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
    },
    {
      id: 7,
      question: "Q? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "A) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....",
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
                  <Link className="btn btn-primary px-5" to="/faq-management/add-faq">
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
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                          {item.poster ? (
                            <video poster={item.poster} controls className="videoPlayer">
                              <source src="movie.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <p className="mb-0">{item.answer}</p>
                          )}
                          <div className="text-end">
                            <Link className="customButton secondaryButton text-decoration-none custWidth" to={`/faq-management/edit-faq/${item.id}`}>
                              Edit{" "}
                            </Link>
                          </div>
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
