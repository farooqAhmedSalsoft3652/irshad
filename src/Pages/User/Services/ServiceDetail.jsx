import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { servicesData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./style.css";
import CustomButton from "../../../Components/CustomButton";

const ServicesDetails = () => {
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

  // UseEffect for calling the async function and handling other side effects
  useEffect(() => {
    getServices();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  // console.log(services, "services")

  return (
    <>
      <div className="p-sm-5 p-3">
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
                <div className="">
                  <h2 className="fw-bold mb-1 ">{services?.title}</h2>
                  <h4 className="provide-name fw-normal" style={{ color: "#262932" }}>
                    Sub-Category Name:{" "}
                    <span className="text-capitalize" style={{ color: "#727A84" }}>
                      {services?.category}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="service-des mb-3 mt-4">
                <h4 className="fw-medium mb-0">Description</h4>
                <p className="mb-2">{services?.description}</p>
                <div className="d-flex gap-5 align-items-center">
                  <div>
                    <h6 className="fw-medium mb-0">Chat</h6>
                    <p>$30.00</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Call</h6>
                    <p>$30.00</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Video Call</h6>
                    <p>$30.00</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="fw-bold mb-0">Quick Service</h2>
                <div className="d-flex gap-5 align-items-center">
                  <div>
                    <h6 className="fw-medium mb-0">Chat</h6>
                    <p>$30.00</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Call</h6>
                    <p>$30.00</p>
                  </div>
                  <div>
                    <h6 className="fw-medium mb-0">Video Call</h6>
                    <p>$30.00</p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <CustomButton className="siteBtn primaryBtn" text="Manage Slots" />
                <CustomButton className="siteBtn secondaryBtn" text="Remove" />
                <Link className="siteBtn secondaryBtn">Edit</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default withModal(ServicesDetails);
