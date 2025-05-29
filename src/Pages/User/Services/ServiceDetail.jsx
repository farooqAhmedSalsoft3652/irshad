import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { servicesData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./style.css";
import CustomButton from "../../../Components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ServicesDetails = ({ showModal }) => {
  usePageTitleUser("Service Detail");

  const { id } = useParams();
  const [services, setServices] = useState();

  // console.log(servicesData, "servicesData")
  const getServices = async () => {
    const response = servicesData?.detail?.data?.find((item) => item.id === Number(id));
    if (response) {
      setServices(response);
    }
  };

  const RemoveModal = () => {
    showModal("", `Are you sure you want to remove service abc ?`, ()=>RemoveSuccessModal(), false);
  };
  const RemoveSuccessModal = () => {
    showModal("", `Service Has been removed successfully`, null, true);
  };

  // UseEffect for calling the async function and handling other side effects
  useEffect(() => {
    getServices();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <Row>
            <Col xs={12}>
              <div className="text-center service-header mb-3">
                <div className="flex-shrink-0 mb-3 mb-lg-0 align-self-center">
                  <div className="d-flex">
                    <BackButton2 />
                    <h2 className="fw-bold mb-0 page-title mx-auto">Services New</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="">
                <div className="service_detail_img mb-2">
                  <img src={services?.image} alt="" className="" />
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <div>
                    <h2 className="fw-bold mb-1 ">{services?.title}</h2>
                    <h4 className="provide-name fw-normal" style={{ color: "#262932" }}>
                      Sub-Category Name:{" "}
                      <span className="text-capitalize" style={{ color: "#727A84" }}>
                        {services?.category}
                      </span>
                    </h4>
                  </div>
                  <div>
                    <div className="review-rating d-flex gap-2">
                      <span className="rating fw-light">
                        <FontAwesomeIcon icon={faStar} className="me-1" />
                        {services?.rating}
                      </span>
                      <span className="review">({services?.reviews?.count}+)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-des mb-3 mt-4">
                <h4 className="fw-medium mb-0">Description</h4>
                <p className="mb-2">{services?.description}</p>
                <div className="d-flex gap-sm-5 gap-4 align-items-center flex-wrap">
                  <div>
                    <h6 className="fw-medium mb-0">Chat</h6>
                    <p>{services?.chat}</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Call</h6>
                    <p>{services?.call}</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Video Call</h6>
                    <p>{services?.video_call}</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="fw-bold mb-0">Quick Service</h2>
                <div className="d-flex gap-sm-5 gap-4 align-items-center flex-wrap">
                  <div>
                    <h6 className="fw-medium mb-0">Chat</h6>
                    <p>{services?.chat}</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Call</h6>
                    <p>{services?.call}</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Video Call</h6>
                    <p>{services?.video_call}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <CustomButton className="siteBtn primaryBtn" text="Manage Slots" />
                <CustomButton className="siteBtn secondaryBtn" text="Remove" onClick={RemoveModal} />
                <Link className="siteBtn secondaryBtn">Edit</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default withModal(ServicesDetails);
