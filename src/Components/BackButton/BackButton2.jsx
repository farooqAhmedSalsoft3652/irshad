import { useNavigate } from "react-router";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton2 = ({ url = "", className }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (url) {
      navigate(url);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={`back-button ${className || ''}`} onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackButton2;
