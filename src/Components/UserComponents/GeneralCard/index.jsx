import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images } from "../../../Assets";
import "./style.css";

const GeneralCard = ({ data, linkPath, serviceCard = false, className = "" }) => {
  const { id, title, description, price, rating, reviews, image, category, quick } = data;

  return (
    <Card className={`general-card ${className || ""}`}>
      {serviceCard && (
        <>
        {linkPath ? (
          <Link to={`${linkPath}/${id}`}>
            <Card.Img variant="top" src={image ?? images.placeholder} alt={title} />
          </Link>
        ) : (
           <div >
            <Card.Img variant="top" src={image ?? images.placeholder} alt={title} />
          </div>
        )}
          <Card.Body className="position-relative p-0 mt-3 pb-1 pb-xxl-1 px-2">
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <h5 className="mb-0 fw-bold">{title}</h5>
                <div className="category-name mb-2" style={{ color: "#262932" }}>
                  Sub-Category Name:{" "}
                  <span className="text-capitalize" style={{ color: "#727A84" }}>
                    {category}
                  </span>
                </div>
              </div>
              <div>
                <div className="review-rating d-flex gap-2">
                  <span className="rating fw-light">
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    {rating}
                  </span>
                  <span className="review ">({reviews?.count}+)</span>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-0" style={{ color: "#727A84" }}>
                {description}
              </p>
            </div>
            <div className="d-flex gap-2 align-items-center flex-wrap mt-2">
              <h6 className="mb-0 fw-bold">Amount : {price}</h6>
              {quick && (
                <>
                  <span>
                    <images.VerticalBar />
                  </span>
                  <p className="mb-0 d-flex align-items-center gap-1" style={{ color: "#111" }}>
                    <span><images.QuickService /></span>
                    <span>Quick Service</span>
                  </p>
                </>
              )}
            </div>
          </Card.Body>
        </>
      )}
    </Card>
  );
};
export default GeneralCard;
