import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import {  bookingsData, } from '../../../Config/data';
import CustomButton from '../../../Components/CustomButton';
import { Link, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { dateFormat, getCountryFlag, usePageTitle } from '../../../Utils/helper';
import withModal from '../../../HOC/withModal';
import CustomModal from '../../../Components/CustomModal';
import "./style.css";
import { ratingValidationSchema } from '../../../Config/Validations';
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Rating from "react-rating";
import CustomInput from '../../../Components/CustomInput';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import { images } from "../../../Assets";


const BookingsDetails = ({showModal }) => {
  usePageTitle("Google Map", true);
  const { id } = useParams();

  // const fetchBookings = async () => {
  //   // const response = await getDetails(`/admin-api/users/${id}`);
  //   if (response) {
  //     setData(response);
  //   }
  // };
  // useEffect(() => {
  //   fetchBookings();
  // }, [id]);



  return (
    <>
    <section className='page-content google-map py-0'>
      <div className="bg-white py-3 text-center">
        <h3>Location Abc</h3>
      </div>
    <div style={{ width: "100%", height: "92vh", overflow: "hidden" }}>
      <iframe
        title="USA Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557370.816004984!2d-125.4025076977969!3d37.27548843828879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8b080704de08f%3A0xdf2c391542e6a70!2sUnited%20States!5e0!3m2!1sen!2sus!4v1692106852536!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </section>

    </>
  )
}

export default withModal(BookingsDetails)