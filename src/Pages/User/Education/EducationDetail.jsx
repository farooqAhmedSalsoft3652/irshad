import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import "./style.css";
import CustomButton from '../../../Components/CustomButton';
import {  educationVideoData, educationEBooksData,   educationArticlesData, educationOfflineData  } from "../../../Config/data";

import { useLocation, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { dateFormat, usePageTitle } from '../../../Utils/helper';
import withModal from '../../../HOC/withModal';
import GeneralCard from '../../../Components/UserComponents/GeneralCard';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';

const EducationDetail = ({showModal }) => {
  usePageTitle("Booking Details", true);
  const [data, setData] = useState([]);
  const { id, } = useParams();
  const location = useLocation();
  const { type } = location.state || {};
  const [isPlaying, setIsPlaying] = useState(false);


  const fetchBookings = async () => {
    try {
      console.log("Fetching data for id:", id);
  
  
      // Combine all data into one array
      const allData = [
        ...educationVideoData.detail.data,
        ...educationEBooksData.detail.data,
        ...educationArticlesData.detail.data,
        ...educationOfflineData.detail.data
      ];

      console.log(allData,'allData')
  
      // Find the data that matches the id
      const response = allData.find((item) => item.id === Number(id) && item.type === type);
  
      // Log the response to verify it's correct
      console.log("Found response:", response);
  
      // Set the data if found
      if (response) {
        setData(response);
      } else {
        console.log("No data found for the given ID");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    // console.log("Fetching bookings for id:", id);
    // console.log("Fetching bookings for Status:", data.status);
    fetchBookings();
    // window.scrollTo(0, 0); // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: 'auto' });

  }, [id]);
  


  // const fetchBookings = async () => {

  //   const response = bookingsData.detail.data.find((e) => e.id === Number(id));
  //   // const response = await getDetails(`/admin-api/users/${id}`);
  //   if (response) {
  //     setData(response);
  //   }
  // };
  
  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  }

  return (
    <>
    {data?.video_path ? (
      <div className="education-video-player position-relative">
        <ReactPlayer
          height={"100%"}
          width={"100%"}
          onReady={(x)=> console.log(":::::",x.getInternalPlayer().videoHeight)}
          controls={isPlaying}
          playing={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          url={data?.video_path}
        />
        {/* Conditionally show the FaPlay icon when the video is paused */}
        {!isPlaying && (
          <div
            onClick={handlePlayPause} // Play the video on clicking the icon
            className="videoPlayButton"
          >
            <FaPlay className="ps-2" />
          </div>
        )}
      </div>
    ) : (
      <section className='page-banner py-5'>
        <Container fluid>
          <Row>
            <Col xs={12} className='g-0 ps-3'>
              <BackButton2 />
            </Col>
          </Row>
        </Container>
      </section>
    )}

    <section className='page-content booking-detail pb-5'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="d-flex booking-detail-header mb-2 mb-xl-2 mb-xxl-4 pb-3">
              <div className="flex-grow-1 align-self-center">
                <h2 className='fw-bold mb-3 page-title'>{data?.title}</h2>  
                <div className="booking-detail-card inline-card d-md-flex detail-meta gap-md-5">
                  <div className="mb-2 mb-md-0 d-flex align-items-center me-md-3">
                    <h5 className="mb-0 text-black fw-semibold">Date</h5>
                    <p className=''>{dateFormat(data?.date)}</p>
                  </div>
                  <div className="mb-2 mb-md-0 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">Language</h5>
                    <p className=''>{data?.language}</p>
                  </div>
                </div>
                
              </div>
              <div className="shrink-0 d-flex justify-content-end align-self-center">
               <CustomButton
               variant="primary-btn"
               className="btn"
               >
               Save as Online
               </CustomButton>
              </div>
            </div>
            <div className="booking-charges">
              <div className="booking-detail-card inline-card">
                
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="booking-detail-decsription">
                <h5 className="mb-3 text-black fw-semibold">Description</h5>
                <p className=''>{data?.description}</p> 
            </div>
          </Col>       
        </Row>
        <Row className='mt-4'>
          
        {data.type === "video" ? (
          data?.relatedArticles?.map((item, index) => (
            <Col xs={12} lg={3} xl={4} key={index} className="mb-2 mb-md-3 mb-xxl-0">
              <GeneralCard
                data={item}
                linkPath={`/education/${item.type}`}
                educationCard={true}
                isSave={true}
                playIcon={true}
              />
            </Col>
          ))
        ) : ""}
          
        </Row>
      </Container>
    </section>
    </>
  )
}

export default withModal(EducationDetail)