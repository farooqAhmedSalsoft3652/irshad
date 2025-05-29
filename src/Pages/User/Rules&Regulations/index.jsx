import { Container } from "react-bootstrap";
import VideoVerificationQuiz from "../../../Assets/images/videoVerificationQuiz.png";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { usePageTitleUser } from "../../../Utils/helper";

const RuleRegulations = () => {
  usePageTitleUser("Rules & Regulations");
  return (
    <Container fluid>
    <div className="py-sm-5 py-3 px-sm-0 px-1">
      <div className="site_card">
        <div className="d-flex flex-wrap align-items-center mb-3">
          <BackButton2 />
          <h2 className="mx-auto fw-bold mb-0">Rules & Regulations</h2>
        </div>
        <div className="mb-3">
          <img src={VideoVerificationQuiz} alt="video-quiz" className="img-fluid w-100" />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        </p>
        <div>
          <button className="siteBtn primaryBtn" type="button">
            Continue
          </button>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default RuleRegulations;
