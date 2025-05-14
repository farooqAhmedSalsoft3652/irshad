import React, { useState } from "react";
import "./style.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from "react-player";

const FaqAccordion = ({ faqs }) => {
  const [activeKey, setActiveKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Accordion activeKey={activeKey !== null ? activeKey.toString() : null}>
      {faqs.map((faq, index) => (
        <Card key={index} className="faq-card mb-4 mt-2">
          <Card.Header className="d-flex faq-header justify-content-between align-items-center">
            <div className="text-black">
              <b>Q: {faq.question}</b>
            </div>
            <Button onClick={() => handleToggle(index)} aria-expanded={activeKey === index} className={`faq-btn toggle-button ${activeKey === index ? "open" : ""}`}>
              {activeKey === index ? <AiOutlineMinus size={22} fontWeight={600} /> : <AiOutlinePlus size={22} fontWeight={600} />}
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>
              <div className="answer-content accordion-content">
                {faq.answerType === "text" && <p className=" text-wrap">A: {faq.answer}</p>}
                {faq.answerType === "image" && <img src={faq.image} alt="FAQ" className="mt-3 faq-img" />}
                {faq.answerType === "video" && (
                  <div style={{ position: "relative" }}>
                    {faq?.video && (
                      <>
                        <ReactPlayer
                          height={"100%"}
                          width={"100%"}
                          style={{overflow: "hidden" , objectFit:"fill"}}
                          controls={isPlaying}
                          playing={isPlaying}
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          url={faq.video}
                        />
                        {/* Conditionally show the FaPlay icon when the video is paused */}
                        {!isPlaying && (
                          <div
                            onClick={handlePlayPause} 
                            className="videoPlayButton"
                          >
                            <FaPlay className="ps-2" />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
