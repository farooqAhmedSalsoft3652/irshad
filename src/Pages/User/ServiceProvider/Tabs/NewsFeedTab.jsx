import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/CustomButton";
import withFilters from "../../../../HOC/withFilters ";
import withModal from "../../../../HOC/withModal";

import { postData } from "../../../../Components/UserComponents/NewsFeedPost/PostData";
import SocialMediaPost from "../../../../Components/UserComponents/NewsFeedPost/SocialMediaPost";
import CustomModal from "../../../../Components/CustomModal";

const NewsFeedTab = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
  reasonModal,
}) => {
  const [showComments, setShowComments] = useState(false);


  const onhandleBlock = async (status, id) => {
    showModal(
      "Block User",
      "Are you sure you want to block this user?",
      () => updateBlock(id),
      false
    );
  };
  const updateBlock = async (status, id) => {
    showModal(`Successful`, `ABC user blocked Successfully`, null, true);
  };

  const onhandleReport = async (status, id, reason) => {
    reasonModal(
      "Report Post",
      "Are you sure you want to Report this post?",
      (reason, id) => {
        reasonReport(reason, id);
        // console.log(reason);
      },
      false,
      true
    );
  };

  const reasonReport = async (reason, id) => {
    reasonModal(
      `Successful`,
      `User abc's post reported successfully`,
      null, //action
      true //success
    );
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
            <div className="flex-shrink-0 align-self-center">
              <h2 className="fw-bold mb-0 page-title">Newsfeed</h2>
            </div>
            <div className="flex-grow-1 d-flex justify-content-end gap-3">
              <Link to="/chat" className="btn btn-outline-primary chat-btn">
                Chat
              </Link>
              <CustomButton
                className="btn btn-primary block-btn"
                onClick={onhandleBlock}
              >
                Block
              </CustomButton>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xxl={6} className="mx-auto">
          {postData.map((post, index) => (
            <React.Fragment key={`post-${index}`}>
              <SocialMediaPost  postData={post} />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </>
  );
};
export default withModal(withFilters(NewsFeedTab));
