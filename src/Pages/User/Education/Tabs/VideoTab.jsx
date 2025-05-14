import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab} from "react-bootstrap";

import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import { educationVideoData } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';

const VideoTab = ({filters, setFilters, pagination, updatePagination}) => {
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

  const handleToggleSave = (id) => {
    setVideoData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSaved: !item.isSaved } : item
      )
    );
    // let newState = !currentItem.is_save;
    //   setVideoData((prevData) =>
    //     prevData.map((item) => (item.id === id ? { ...item, is_save: newState } : item))
    //   );  
  };

  // console.log(videoData)

  return (
    <>
    <Row>
      {videoData?.map((item, index) => (
        <Col xs={12} lg={3} xl={4} key={index} className="mb-2 mb-xl-3 mb-xxl-4">
          <GeneralCard data={item}
            educationCard={true}
            playIcon={true}
            showSave={true}
            isSaved={item.is_save}
            toggleSave={() => handleToggleSave(item.id)}
            linkPath="/education/video/" 
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

export default withFilters(VideoTab)
