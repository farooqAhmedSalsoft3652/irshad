import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import {  RehabCenterData } from '../../../Config/data';
import { useParams } from 'react-router-dom';
import {  usePageTitle } from '../../../Utils/helper';
import "./style.css"
import GoogleMap from '../../../Components/GoogleMap';


const RehabCenter = () => {
  usePageTitle("Rehab Center", true);
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  const fetchData = async () => {
    try {
      const response = RehabCenterData;
      if (response.status) {
        const { data } = response.detail;
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("tdat",  data)

  const locations = [
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  ];
  
  


  return (
    <>
    <section className='page-content rehab-page pb-5'>
      <Container fluid>
        <Row>
          <Col xs={12} className="mb-3 mb-lg-4">
            <h2 className='fw-bold mb-0 page-title'>{data?.title}</h2>
          </Col>
          <Col xs={12}>
            <p>{data?.text}</p>
          </Col>
          <Col xs={12}>
          <GoogleMap />

          {/* <GoogleMap  zoom={5}>
            {locations.map((location, index) => (
              <Marker key={index} position={location} />
            ))}
          </GoogleMap> */}


          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default RehabCenter;