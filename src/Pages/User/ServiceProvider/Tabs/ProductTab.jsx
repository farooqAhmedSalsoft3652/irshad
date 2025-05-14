import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab} from "react-bootstrap";

import { useParams } from "react-router-dom";
import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import {  servicesData } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';
import CustomFilters from '../../../../Components/CustomFilters';
import { serviceCategories } from '../../../../Config/TableStatus';

const ProductTab = ({filters, setFilters, pagination, updatePagination}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [productData, setProductData] = useState([]);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = servicesData;
    // Handle the response for videos
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      // const response = productsData?.detail?.data?.find( item=> item.id === Number(id));

      setProductData(data);
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

  console.log(productData ,"Product Data")

  return (
    <>
     <Row>
      <Col xs={12}>
        <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
          <div className="flex-shrink-0 align-self-center">
            <h2 className='fw-bold mb-0 page-title'>Shop Product</h2>
          </div>
          <div className="flex-grow-1 d-flex justify-content-end gap-3">
          <div className="fw-semibold align-self-center me-2">$ 10 Delivery Fee</div>
            <CustomFilters
              filters={filters}
              setFilters={setFilters}
              showEntries={false}
              // selectOptions={props?.selectOptions}
              // dateFilters={props?.dateFilters}
              checkboxOptions={[
                {
                  title: "Category",
                  options: serviceCategories
                },
              ]}
            />
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      {productData.map((item, index) => (  
          <Col xs={12} lg={3} xl={3} className="mb-2 mb-xl-3 mb-xxl-4"  key={`${index}-${index}`}>
            <GeneralCard
              data={item}
              className="shop-card"
              productCard={true}
              linkPath="/product-detail/" 
            />
          </Col>
        )
      )}
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

export default withFilters(ProductTab)
