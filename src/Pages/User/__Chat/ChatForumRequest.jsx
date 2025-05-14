import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { AdminLayout } from "../../../Components/Layout/AdminLayout";
import { Row, Col } from 'react-bootstrap';
import { getDetails } from "../../../Services/Api";
import { images } from "../../../Assets";
import { chatManageData } from "../../../Config/Data";
import Breadcrumbs  from "../../../Components/Breadcrumbs";
import CustomButton from "../../../Components/CustomButton";
import withModal from "../../../Components/withModal"; //Higher Order Component

const ChatForumRequest = ({ showModal }) => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({});

 


  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        const response = chatManageData?.detail?.data?.find( item=> item.id === Number(id));
        setRequestData(response);
                
        // if (response.status) {
        //   const { data, total, per_page, current_page, to } = response.detail;
        //   setUserData(data);
        //   setShowData(to);
        //   setCurrentPage(current_page);
        //   setTotalRecords(total);
        //   setTotalPages(Math.ceil(total / per_page));
        //   console.log(response, "User Logs")
        // }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    },
  )

   //First Modal
   const handleApprove = (id, status) => {
    showModal(
      `Chat forum request`,
      `Are you sure you want to approve this chat forum Request?`,
      () => updateStatus(status, id),
    );
  };

  //Second Modal
  const updateStatus = async (status, id) => {
    showModal(
      `Successfully`,
      `Request has been approved Successfully!`,
      null,
      true
    );    
  };

 
  //Reject Modal handleReject
  const handleReject = (id, status) => {
    showModal(
      `Chat forum request`, // heading
      `Are you sure you want to reject this chat forum Request?`, // text
      () => rejectModal(status, id), // action (callback for "Yes" button)
      false, // success
    );
  };
  
  const rejectModal = (id, status) => {
    showModal(
      null, // heading
      null, // defult Action
      null, // text
      false, // success
      "",  // className
      null, // fullscreen
      true, // showReason
      false,
      "Rejected reason",        // label1 (label for reason field)
      "Enter rejection reason",    // place1 (placeholder for reason field)
      () => updateReject(status, id), // action (callback for "Yes" button)
    );
  };

//Update Reject
  const updateReject = async (status, id) => {
    showModal(
      `Successfully`,
      `Request has been rejected Successfully!`,
      null,
      true
    );
  };

  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

const breadcrumbPaths = [
  ['Chat forum Management', '/admin/chat-forum-management/'],
  ['View Chat Forum Request ']
]; 

  return (
    <AdminLayout pageTitle="Advertisement Management Details">
      <section className="adds-detail-page">
        <div className="page-header mb-4">
          <div className="page-title mb-0">
            <Row>
              <Col xs={12}>
                <h2>View Chat Forum Request</h2>
              </Col>
            </Row>
          </div>
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
        <div className="content-body bg-primary-card rounded-10 shadow-sm p-4 p-lg-4 p-xxl-4 mb-4 mb-lg-5">
          <div className="p-sm-3">
            <Row>
              <Col lg={4} className="order-1 order-lg-2">
                <div className="flex-grow-1 profile-status d-flex align-self-start align-items-start align-items-lg-end flex-column me-xxl-3 mb-xl-0 mb-5">
                  <div className="status-primary ps-4 ps-lg-0 pe-lg-4">Status
                    <span className={`ms-3 status-tag ${
                        requestData.status_detail == "Approved" ? 'green-tag' :
                        requestData.status_detail == "Pending" ? 'yellow-tag' :
                        requestData.status_detail == "Rejected" ? 'red-tag'
                        : ''}`}
                      >
                      {requestData?.status_detail}
                    </span>
                  </div>
                  {requestData?.status_detail == "Pending" && (
                    <div className="status-action mt-2 mt-lg-4 d-flex flex-column gap-3">
                      <CustomButton
                        type="button"
                        onClick={handleApprove}
                      >
                        Approve
                      </CustomButton>
                      <CustomButton
                        variant="outline-primary"
                        type="button"
                        onClick={handleReject}
                      >
                        Reject
                      </CustomButton>
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={8} className="order-2 order-lg-1">
                <Row>
                  <Col xs={12} lg={12} xxl={12} className="detail-block">                  
                    <Row>
                        <>
                        <Col xs={12} className="mb-4 mb-md-4 mb-xxl-5">
                          <h5 className="mb-2">Club Name</h5>
                          <p className="fw-medium">{requestData?.club_name}</p>
                        </Col>
                        <Col xs={12} className="mb-4 mb-md-4 mb-xxl-5">
                          <h5 className="mb-2">Email Address</h5>
                          <p className="fw-medium">{requestData?.email}</p>
                        </Col>
                        <Col xs={12} className="mb-sm-3">
                          <h5 className="mb-2">Chat Forum Name</h5>
                          <p className="fw-medium">{requestData?.chat_forum_name}</p>
                        </Col>
                        </>
                    </Row>
                  </Col>
                </Row>
              </Col>
              {requestData.status_detail == "Rejected" && (
                <Col xs={12} lg={8} xxl={6} className="order-3 mt-5">
                  <h4>Rejection Reason</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. </p>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default withModal(ChatForumRequest);
