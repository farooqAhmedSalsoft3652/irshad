import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab} from "react-bootstrap";

import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import { educationArticlesData } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';

const OfflineArticlesTab = ({filters, setFilters, pagination, updatePagination}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [articleData, setArticleData] = useState([]);
  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = educationArticlesData;
    // Handle the response for videos
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      setArticleData(data);
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

  console.log(articleData)

  return (
    <>
    <Row>
      {articleData?.map((item, index) => (
        <Col xs={12} lg={3} xl={4} key={index} className="mb-2 mb-xl-3 mb-xxl-4">
          <GeneralCard data={item}
            educationCard={true}
            isReadingLink={true}
            isSaved={item.is_save}
            linkPath="/education/offline/article/" 
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

export default withFilters(OfflineArticlesTab)
