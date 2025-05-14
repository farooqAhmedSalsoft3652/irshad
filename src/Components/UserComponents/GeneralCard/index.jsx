import React, { useState } from 'react'
import "./style.css"
import { Card } from 'react-bootstrap'
import { images } from '../../../Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { dateFormat } from '../../../Utils/helper'
import {
  faBookmark as solidBookmark,
  faHeart as solidHeart, 

} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark as regularBookmark,
  faHeart as regularHeart 

 } from "@fortawesome/free-regular-svg-icons";


// import { 
//   faHeart as solidHeart, 
//   faHeart as regularHeart 
// } from "@fortawesome/free-solid-svg-icons";
// import { 
//   faBookmark as solidBookmark, 
//   faBookmark as regularBookmark 
// } from "@fortawesome/free-regular-svg-icons";

const GeneralCard = ({
  data,
  linkPath,
  educationCard = false,
  serviceCard = false,
  productCard = false,
  isReadingLink = false,
  playIcon = false,
  showWishList = false, 
  toggleWishList,
  showSave = false,
  showReviews = false,
  toggleSave, 
  className = '',
}) => {
  const {
    id,
    title,
    price,
    rating,
    reviews,
    image,
    isWishListed,
    isSaved,
    category,
    type,
    date,
    language,

  } = data; 

  const formatReviewCount = (count) => {
    if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1) + 'M'; // Convert to "M" for millions
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1) + 'K'; // Convert to "K" for thousands
    }
    return count; // Return the count as is if less than 1000
  };

  return (
    <Card className={`general-card ${className||""}`}>
      {serviceCard && (
        <>
        <Link to={`${linkPath}/${id}`}><Card.Img variant="top" src={image ?? images.placeholder} alt={title} /></Link>
        <Card.Body className="position-relative p-0 mt-3 pb-2 pb-xxl-2 px-2">
          {category && (
            <div className="category-name mb-2">{category}</div>
          )}
          <div className="d-flex">
            <div className="flex-grow-1">
              <Card.Title><Link to={`${linkPath}/${id}`}>{title}</Link></Card.Title>
            </div>
            <div className="flex-shrink-0">
              <div className="price">{price}</div>
            </div>
          </div>
          {(showReviews || showWishList) && (
            <div className="d-flex mt-1">
              {showReviews && (
                <div className="flex-grow-1">
                  <div className="review-rating">
                    <span className="rating fw-light">
                      <FontAwesomeIcon icon={faStar} className="me-2" />
                      {rating}
                    </span>
                    {/* <span className="review position-relative">{formatReviewCount(reviews?.count)} Reviews</span> */}
                    <span className="review position-relative">{reviews?.count} Reviews</span>
                  </div>
                </div>
              )}
              { showWishList && (
                <div className="flex-shrink-0 align-self-center">
                  <button
                    className={`wishlist-btn border-0 ${isWishListed ? "active" : ""}`}
                    onClick={toggleWishList}
                  >
                    <FontAwesomeIcon icon={isWishListed ? solidHeart : regularHeart} />
                  </button>
                  {/* <button className='wishlist-btn border-0'><FontAwesomeIcon icon={faHeart} /></button> */}
                </div>
              )} 
          </div>
          )}
        </Card.Body>
        </>
      )}
      {productCard && (
        <>
        <Link to={`${linkPath}/${id}`}>
          <Card.Img variant="top" src={image} alt={title} />
        </Link>
        <Card.Body className="position-relative p-0 mt-3 pb-2 pb-xxl-0 px-2">
          <div className="d-flex">
            <div className="flex-grow-1">
              <Card.Title><Link to={`${linkPath}/${id}`}>{title}</Link></Card.Title>
            </div>
            <div className="flex-shrink-0">
              <div className="price">{price}</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="category-name mb-1">{category}</div>
            <div className="add-to-card mt-0 text-end">
              <button className='fw-medium btn-add-to-cart'>Add to cart</button>
            </div>
          </div>
        </Card.Body>
        </>
      )}

      {educationCard && (
        <>
          {image &&  (
            <div className="position-relative video-thumb">
              <Link to={`${linkPath}/${id}`}  state={{ type: type }} >
                <Card.Img variant="top" src={image} alt={'test'} />
                {playIcon && <FontAwesomeIcon icon={faPlay} /> }
              </Link>
            </div>
          )}
          <Card.Body className="position-relative p-0 mt-3 pb-0 pb-xxl-0 px-2">
            <div className="d-flex mt-0">
              <div className="flex-grow-1">
                <div className="date mb-2">{dateFormat(date)}</div>
                <Card.Title className='mb-2'><Link to={`${linkPath}/${id}`}  state={{ type: type }}>{title}</Link></Card.Title>
              </div>
              {showSave && (
              <div className="flex-shrink-0 align-self-start">
                <button
                  className={`save-btn border-0 ${isSaved  ? "active" : ""}`}
                  onClick={toggleSave}
                >
                  <FontAwesomeIcon icon={isSaved  ? solidBookmark : regularBookmark} />
                </button>
              </div>
            )}
          </div>
          <div className="language mb-2">
            <p className='mb-0'>{language}</p>
          </div>
          {isReadingLink && 
            <div className="reading-link mt-0 text-end">
              <Link to={`${linkPath}/${id}`}  state={{ type: type }} className='fw-medium'>Start Reading</Link>
            </div>
          }
        </Card.Body>
        </>
      )}

    </Card>
  )}
export default GeneralCard