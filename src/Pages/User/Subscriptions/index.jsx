import {React, useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscriptionData } from "../../../Config/data";
import { Link, useNavigate } from "react-router-dom";
import { usePageTitle } from "../../../Utils/helper";

import Subscriptionscard from "../../../Components/SubscriptionsCard";
import './style.css';

const Subscriptions = (props) => {
  usePageTitle("Subscription", true);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const fetchUsers = async () => {
    try {
      const response = SubscriptionData;
      if (response.status) {
        const { data } = response.detail;
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  const handlePlanClick = (id) => {
    navigate(`/subscriptions/payment/${id}`);
    console.log(`Plan selected: ${id}`);
    // Add your logic here, e.g., redirect or update state
  };
  
  return (
    <>
      <section className="page-content subscriptions">
        <Container fluid>
          <Row>
              <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
                <h2 className="page-title fw-bold">Subscription Plan</h2>
                <Link className="btn btn-primary" to="/subscriptions/subscriptions-logs/">View Subscription logs</Link>
              </Col>
              <Col xs={12} xxl={11} className="mb-3 mb-xxl-4">
                <p className="lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor  Cum sociis natoque penatibus et magnis dis
                </p>
              </Col>
          </Row>
          <Row>
            <Col xs={12} lg={10} className="mx-auto">
              <Row>
                {data.map((item) => (
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={item.id}>
                    <Subscriptionscard
                      data={{ ...item, onClick: handlePlanClick }}
                    />
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Subscriptions;