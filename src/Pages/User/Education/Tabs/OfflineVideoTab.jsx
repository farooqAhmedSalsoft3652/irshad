import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab} from "react-bootstrap";

import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import { educationVideoData } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';

const OfflineVideoTab = ({filters, setFilters, pagination, updatePagination}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = educationVideoData;
    // Handle the response for videos
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      setVideoData(data);
      updatePagination({
        showData: to,
        currentPage: current_page,
        totalRecords: total,
        totalPages: Math.ceil(total / per_page),
      });
    }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);


  const toggleSave = (id) => {
    setVideoData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, is_save: !item.is_save } : item
      )
    );
    // let newState = !currentItem.is_save;
    //   setVideoData((prevData) =>
    //     prevData.map((item) => (item.id === id ? { ...item, is_save: newState } : item))
    //   );  
  };



  return (
    <>
    <Row>
      {videoData?.map((item, index) => (
        <Col xs={12} lg={3} xl={4} key={index} className="mb-2 mb-xl-3 mb-xxl-4">
          <GeneralCard data={item}
            educationCard={true}
            playIcon={true}
            isSave={true}
            isSavedId={item.is_save}
            toggleSave={() => toggleSave(item.id)}
            linkPath="/education/offline/video/" 
              />
        </Col>
      ))}
    </Row>

    <Row>
      <Col xs={12}>
        <CustomPagination
          pagination={pagination}
          setFilters={setFilters}
        />
      </Col>
    </Row>
  </>
  )
}

export default withFilters(OfflineVideoTab)
