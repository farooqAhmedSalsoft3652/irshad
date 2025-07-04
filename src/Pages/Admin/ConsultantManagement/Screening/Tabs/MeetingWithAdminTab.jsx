import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CustomTable from "../../../../../Components/CustomTable";
import { queryTableHeaders } from "../../../../../Config/TableHeaders";
import { userTypeStatus } from "../../../../../Config/TableStatus";
import { newRequestConsultantData } from "../../../../../Config/data";
import withFilters from "../../../../../HOC/withFilters";
import { useFormStatus } from "../../../../../Hooks/useFormStatus";
import { isNullOrEmpty, serialNum } from "../../../../../Utils/helper";
import { Col, Row } from "react-bootstrap";

const MeetingWithAdminTab = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchAdminAmount = async () => {
    try {
      startSubmitting(true);
      const response = newRequestConsultantData.detail.data.find(
        (e) => e.id === id
      );
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchAdminAmount();
  }, [id]);

  if (isNullOrEmpty(data)) {
    return (
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">loading...</div>
        </div>
      </div>
    );
  }

  return (
    <Row>
      <Col xs={12} lg={11} xl={8} xxl={7}>
        <Row className="mb-4">
          <Col xxl={8} className="detail-box">
            <h6>Admin's Comment</h6>
            <p className="mb-0">{data.adminComment}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-3">
            <h3 className="mb-0">Amount Set</h3>
          </Col>
          {Object.entries(data?.amountSet || {}).map(([type, values]) => (
            <Col xxl={6} key={type} className="detail-box">
              <h4 className="mb-3">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h4>
              <div className="d-flex gap-5">
                <div className="flex-grow-1">
                  <h6>Chat</h6>
                  <p>{values?.chat || "-"}</p>
                </div>
                <div className="flex-grow-1">
                  <h6>Call</h6>
                  <p>{values?.call || "-"}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={6} className="mt-4 detail-box">
            <h6>Given Sub Category</h6>
            <p className="mb-0">{data?.givenSubCategory?.join(" , ")}</p>
          </Col>
          <Col lg={6} className="mt-4 detail-box">
            <h6>Given Services</h6>
            <p className="mb-0">{data?.givenServices?.join(" , ")}</p>
          </Col>
          <Col lg={6} className="mt-4 detail-box">
            <h6>Given Services</h6>
            <p className="mb-0">{data?.workingHours}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withFilters(MeetingWithAdminTab);
