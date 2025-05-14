import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";

import { postData } from "../../../Components/UserComponents/NewsFeedPost/PostData";
import SocialMediaPost from "../../../Components/UserComponents/NewsFeedPost/SocialMediaPost";

const MyPosts = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
  reasonModal,
}) => {
  // const [showReactions, setShowReactions] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // const { user, content, interactions, comments, privacy, postId } = postData;
  // const [usersReacted, setUsersReacted] = useState(interactions?.usersReacted);
  // let IconToBeUsed;
  // const reactionsIcons = {
  //   like: Like,
  //   love: Love,
  //   haha: Haha,
  //   wow: Wow,
  //   sad: Sad,
  //   angry: Angry,
  // };

  // const onhandleBlock = async (status, id) => {
  //   showModal(
  //     "Block User",
  //     "Are you sure you want to block this user?",
  //     () => updateBlock(id),
  //     false
  //   );
  // };
  // const updateBlock = async (status, id) => {
  //   showModal(`Successful`, `ABC user blocked Successfully`, null, true);
  // };

  // const onhandleReport = async (status, id, reason) => {
  //   reasonModal(
  //     "Report Post",
  //     "Are you sure you want to Report this post?",
  //     (reason, id) => {
  //       reasonReport(reason, id);
  //       // console.log(reason);
  //     },
  //     false,
  //     true
  //   );
  // };

  // const reasonReport = async (reason, id) => {
  //   reasonModal(
  //     `Successful`,
  //     `User abc's post reported successfully`,
  //     null, //action
  //     true //success
  //   );
  // };

  return (
    <>
    <section className="page-content newsfeed-page">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2 className="fw-bold mb-0 page-title">My Posts</h2>
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
        </Container>
    </section>
    </>
  );
};
export default withModal(withFilters(MyPosts));
