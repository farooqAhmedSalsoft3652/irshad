import React, { useState } from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { Card, Dropdown } from "react-bootstrap";
import { FaEllipsisH, FaTrash, FaUserFriends } from "react-icons/fa";
import Like from "./reactions/like.svg?react";
import Love from "./reactions/love.svg?react";
import Haha from "./reactions/haha.svg?react";
import Wow from "./reactions/wow.svg?react";
import Sad from "./reactions/sad.svg?react";
import Angry from "./reactions/angry.svg?react";
import "./SocialMediaPost.css";
import "./style.css";

import { IoClose } from "react-icons/io5";
import { calculateTimePassed, formatNumber, sumReactions } from "../../../Utils/helper";
import withModal from "../../../HOC/withModal";
import CustomModal from "../../CustomModal";
import ImageGallery from "../../ImageGallery/ImageGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faEllipsisH, faExclamationCircle, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const SocialMediaPost = ({ postData, showModal, reasonModal  }) => {
  const [showReactions, setShowReactions] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const { user, content, interactions, comments, privacy, postId } = postData;
  const [usersReacted, setUsersReacted] = useState(interactions?.usersReacted);
  let IconToBeUsed;
  const reactionsIcons = {
    like: Like,
    love: Love,
    haha: Haha,
    wow: Wow,
    sad: Sad,
    angry: Angry,
  };

  // const LikeIcon = reactionsIcons.like;
  // const LoveIcon = reactionsIcons.love;
  // const HahaIcon = reactionsIcons.haha;
  // const WowIcon = reactionsIcons.wow;
  // const SadIcon = reactionsIcons.sad;
  // const AngryIcon = reactionsIcons.angry;


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


  const handleDeletePost = (e, userId) => {
    showModal(`delete post`, `Are you sure you wants to delete this post?`, () => onConfirmDeletePost());
  };

  // Confirm status change and update the state
  const onConfirmDeletePost = async () => {
    showModal("Successful", `this post has been deleted successfully!`, null, true);
  };
  const handleDeleteComment = (e, userId) => {
    showModal(`delete comment`, `Are you sure you wants to delete this Comment?`, () => onConfirmDeleteComment());
  };

  // Confirm status change and update the state
  const onConfirmDeleteComment = async () => {
    setShowComments(false);
    showModal("Successful", `this comment has been deleted successfully!`, null, true);
  };
  return (
    <>
    <Card className='card-newsfeed border-0 p-4 mb-4'>
      <Card.Header className='border-0 d-flex justify-content-between gap-2 bg-transparent pt-2 p-4 pb-1'>
        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-3">
            <div className="flex-shrink-0">
              <img className="allign-slf-start" src={user.profileImage} alt={user.name} />
            </div>
            <div className="flex-grow-1 align-self-center">
              <h5 className="mb-2 text-black fw-semibold">{user.name}</h5>
              <p className="mb-0 ">{calculateTimePassed(new Date(user.timestamp))}</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 align-self-start">
          <Dropdown align="end" className='post-dropdown'>
            <Dropdown.Toggle id="dropdown-basic" className='btn-transparent'>
                <FontAwesomeIcon icon={faEllipsisH} />
            </Dropdown.Toggle>
            <Dropdown.Menu className=''>
              <Dropdown.Item onClick={onhandleBlock} >
                <FontAwesomeIcon icon={faBan} />
                <span>Block</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={onhandleReport}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>Report</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body className='px-2'>
        <div className="px-4">
          <Card.Text className='mb-4'>{content.text}</Card.Text>
        </div>
        {content?.image?.length ?
        <ImageGallery scaleOnHover={false} width="100%" maxHeight="400px" images={content?.image} />
        : null}
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent d-flex align-items-center justify-content-between py-0">
        <div className="reactions-wrapper d-flex flex-grow-1" onClick={() => setShowReactions(true)}>
          <div className="flex-grow-1 d-flex">
            <div className="d-flex me-3 align-items-center">
              <div className="reactions me-2">
                {Object.entries(interactions.reactions)
                  .slice(0, Math.min(3, Object.entries(interactions.reactions).length))
                  .reverse()
                  .map(([reaction], i) => (
                    <div key={reaction} className="reaction" style={{ zIndex: i + 1 }}>
                      {(IconToBeUsed = reactionsIcons[reaction])}
                      <IconToBeUsed width={20} height={20} />
                    </div>
                  ))}
              </div>
              <span>{formatNumber(sumReactions(interactions.reactions))}</span>
            </div>
            <div className="react-now">
              <button className="bg-transparent  border-0 p-md">
                <FontAwesomeIcon icon={faThumbsUp} /> <span className="d-sm-inline-block d-none"> Like</span>
              </button>
              {/* <div className="post-reactions user-post-reactions gap-3">
                <button className="transparent-btn">
                  <LikeIcon width={20} height={20} />
                </button>
                <button className="transparent-btn">
                  <LoveIcon width={20} height={20} /> 
                </button>
                <button className="transparent-btn">
                  <HahaIcon width={20} height={20} />
                </button>
                <button className="transparent-btn">
                  <WowIcon width={20} height={20} />
                </button>
                <button className="transparent-btn">
                  <SadIcon width={20} height={20} />
                </button>
                <button className="transparent-btn">
                  <AngryIcon width={20} height={20} />
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="likes-comments flex-shrink-0">
          <span className="me-0" onClick={() => setShowComments(true)}>{formatNumber(interactions.comments)} Comments</span>
        </div>
      </Card.Footer>
    </Card>
       {/* <div className="post-comments">
          {comments.map((comment) => (
            <div className="single-comment">
              <div className="post-comments-header">
                <img src={comment.userProfileImage} alt={comment.userName} className="comments-profile-image" />
                <div className="post-comments-user-info">
                  <h4>{comment.userName}</h4>
                  <div className="d-flex align-items-center gap-2">
                    <p>{calculateTimePassed(new Date(comment.timestamp))}</p>
                  </div>
                </div>
                <Dropdown className="elipses-wrapper" style={{ height: 10, position: "relative", top: "-15px" }}>
                  <Dropdown.Toggle variant="transparent " className="notButton classicToggle">
                    <FaEllipsisH />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    align="end"
                    className="dropdownMenu px-3 cp"
                    onClick={() => {
                      handleDeleteComment();
                    }}
                  >
                    <button className="d-flex gap-3 align-items-center border-0 bg-transparent rounded">
                      <FaTrash />
                      <p className="text-decoration-none m-0">Delete</p>
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div key={comment.commentId} className="comment">
                <p>{comment.text}</p>{" "}
                <div className="post-interactions mt-1 mb-0 px-3">
                  <div className="reactions-wrapper" onClick={() => setShowReactions(true)}>
                    <div className="reactions">
                      {Object.entries(interactions.reactions)
                        .slice(0, Math.min(3, Object.entries(interactions.reactions).length))
                        .reverse()
                        .map(([reaction], i) => (
                          <div key={reaction} className="reaction" style={{ zIndex: i + 1 }}>
                            {(IconToBeUsed = reactionsIcons[reaction])}
                            <IconToBeUsed width={20} height={20} />
                          </div>
                        ))}
                    </div>
                    <span>{formatNumber(sumReactions(interactions.reactions))}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      <CustomModal
        show={showReactions}
        hideClose={true}
        close={() => {
          setShowReactions(false);
        }}
        size="lg"
        className="likes-modal"
      >
        <div className="d-flex justify-content-between align-items-start reactionsModal">
          <h4 className="modalHeading">People Who Reacted</h4>
          <button className="closeButton" onClick={() => setShowReactions(false)}>
            <IoClose size={24} />
          </button>
        </div>
        <div className="reactions justify-content-end my-2 flex-wrap">
          {Object.entries(interactions.reactions)
            .reverse()
            .map(([reaction], i) => (
              <div key={reaction} className="reaction me-2" style={{ zIndex: i + 1 }}>
                {(IconToBeUsed = reactionsIcons[reaction])}
                <IconToBeUsed width={20} height={20} />
                <span className="ms-1">{formatNumber(interactions.reactions[reaction])}</span>
              </div>
            ))}

          <div className="d-flex flex-row-reverse">
            <span className="mx-2 me-3">All ({formatNumber(sumReactions(interactions.reactions))})</span>
            {Object.entries(interactions.reactions)
              .slice(0, Math.min(3, Object.entries(interactions.reactions).length))
              .reverse()
              .map(([reaction], i) => (
                <div key={reaction} className="reaction" style={{ zIndex: i + 1 }}>
                  {(IconToBeUsed = reactionsIcons[reaction])}
                  <IconToBeUsed width={20} height={20} />
                </div>
              ))}
          </div>
        </div>
        {usersReacted?.length && (
          <div className="reactions-user-list">
            {usersReacted?.map((user) => (
              <div className="reaction-user align-items-center gap-2 justify-content-start">
                <div className="position-relative">
                  <img src={user?.profileImage} alt={`${user.name} photo`} />
                  {(IconToBeUsed = reactionsIcons[user.reacted])}
                  <IconToBeUsed width={18} height={18} className="user-reacted-icon" />
                </div>
                <p>{user.name}</p>
              </div>
            ))}
          </div>
        )}
      </CustomModal>

      <CustomModal
        show={showComments}
        hideClose={true}
        close={() => {
          setShowComments(false);
        }}
        size="lg"
        background="gray"
      >
        <div className="d-flex justify-content-between align-items-start reactionsModal">
          <h2 className="modalHeading">Comments</h2>
          <button className="closeButton" onClick={() => setShowComments(false)}>
            <IoClose size={24} />
          </button>
        </div>
        {comments?.length && (
          <div className="comments-user-list">
            <div className="modal-title "></div>
            {comments?.map((comment) => (
              <div className="comment-user align-items-start gap-2 justify-content-start">
                <img src={comment?.userProfileImage} alt={`${comment.userName} photo`} />
                <div style={{ flex: 1 }}>
                  <div className="d-flex justify-content-between">
                    <h6>{comment.userName}</h6>
                    <Dropdown className="elipses-wrapper" style={{ height: 10, position: "relative", top: "-15px" }}>
                      <Dropdown.Toggle variant="transparent " className="notButton classicToggle p-0">
                        <FaEllipsisH />
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="end" className="dropdownMenu px-3 cp">
                        <button
                          className="d-flex gap-3 align-items-center border-0 bg-transparent rounded p-0"
                          onClick={() => {
                            handleDeleteComment();
                          }}
                        >
                          <FaTrash />
                          <p className="text-decoration-none m-0">Delete</p>
                        </button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>{comment.text}</p>
                  <div className="d-flex justify-content-end">
                    {comment?.reactions && (
                      <div className="reactions">
                        {Object.entries(comment.reactions)
                          .slice(0, Math.min(3, Object.entries(comment.reactions).length))
                          .reverse()
                          .map(([reaction], i) => (
                            <div key={reaction} className="reaction" style={{ zIndex: i + 1 }}>
                              {(IconToBeUsed = reactionsIcons[reaction])}
                              <IconToBeUsed width={20} height={20} />
                            </div>
                          ))}
                      </div>
                    )}
                    {comment?.reactions && <span className="ms-1">{formatNumber(sumReactions(comment.reactions))}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CustomModal>
    </>
  );
};

export default withModal(SocialMediaPost);
