import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";

const RulesRegulationsView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rulesData, setRulesData] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === 'rules' && state?.id) {
      // Fetch rules data based on ID
      // This is dummy data - replace with actual API call
      setRulesData({
        id: state.id,
        title: "Consultant Rules & Regulations",
        description: "These are the main rules and regulations that all consultants must follow.",
        rules: [
          {
            rule: "Professional Conduct",
            explanation: "Maintain professional behavior at all times when interacting with clients."
          },
          {
            rule: "Timely Response",
            explanation: "Respond to client inquiries within 24 hours during business days."
          },
          {
            rule: "Confidentiality",
            explanation: "Maintain strict confidentiality of all client information and data."
          }
        ]
      });
    } else {
      navigate('/admin/consultant-management/category-links');
    }
  }, [location, navigate]);

  return (
    <DashboardLayout pageTitle="View Rules & Regulations">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Rules & Regulations</h2>
            </Col>
          </Row>

          {rulesData ? (
            <div className="rules-details">
              <Row>
                <Col xs={12} xxl={8}>
                  <div className="info-section mb-4">
                    <h3 className="section-title mb-3">General Information</h3>
                    <div className="info-item mb-3">
                      <label className="fw-bold">Title:</label>
                      <p className="mb-0">{rulesData.title}</p>
                    </div>
                    <div className="info-item mb-3">
                      <label className="fw-bold">Description:</label>
                      <p className="mb-0">{rulesData.description}</p>
                    </div>
                  </div>

                  <div className="rules-section">
                    <h3 className="section-title mb-4">Rules</h3>
                    {rulesData.rules.map((rule, index) => (
                      <div key={index} className="rule-card mb-4 p-4 border rounded bg-light">
                        <h4 className="rule-title mb-3">
                          Rule {index + 1}: {rule.rule}
                        </h4>
                        <div className="explanation p-3 bg-white rounded">
                          <label className="fw-bold">Explanation:</label>
                          <p className="mb-0">{rule.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="actions mt-4">
                    <CustomButton
                      variant="btn btn-primary min-width-180 me-2"
                      text="Edit Rules"
                      onClick={() => navigate(`../edit-rules/${rulesData.id}`, {
                        state: {
                          ...location.state,
                          id: rulesData.id
                        }
                      })}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <div className="text-center py-5">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RulesRegulationsView; 