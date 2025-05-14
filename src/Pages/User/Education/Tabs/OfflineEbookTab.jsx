import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab} from "react-bootstrap";

import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import { educationEBooksData } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';

const OfflineEbookTab = ({filters, setFilters, pagination, updatePagination}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [ebookData, setEbookData] = useState([]);
  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = educationEBooksData;
    // Handle the response for videos
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      setEbookData(data);
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

  console.log(ebookData)

  return (
    <>
    <Row>
      {ebookData?.map((item, index) => (
        <Col xs={12} lg={3} xl={4} key={index} className="mb-2 mb-xl-3 mb-xxl-4">
          <GeneralCard data={item}
            educationCard={true}
            isReadingLink={true}
            isSaved={item.is_save}
            linkPath="/education/offline/ebook" 
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

export default withFilters(OfflineEbookTab)
