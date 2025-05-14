import React, { useEffect, useState } from 'react'
import { Col,  Row} from "react-bootstrap";
import GeneralCard from '../../../../Components/UserComponents/GeneralCard';
import { servicesData,  } from '../../../../Config/data';
import CustomPagination from '../../../../Components/CustomPagination';
import withFilters from '../../../../HOC/withFilters ';
import { useFormStatus } from '../../../../Hooks/useFormStatus';
import CustomFilters from '../../../../Components/CustomFilters';
import { serviceCategories } from '../../../../Config/TableStatus';
import CustomButton from '../../../../Components/CustomButton';
import { Link } from 'react-router-dom';

const ServicesTab = ({filters, setFilters, pagination, updatePagination}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [services, setServices] = useState([]);
  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = servicesData;
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      setServices(data);
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


  const handleToggleWishList  = (id) => {
    // Find the current item based on the ID
    const currentItem = services.find((item) => item.id === id);
 
    // Toggle the wishList state
    const updatedWishListState  = !currentItem.isWishListed;
  
    // Update the videoData state
    setServices((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isWishListed: updatedWishListState  } : item
      )
    );
  };

  return (
    <>
     <Row>
      <Col xs={12}>
        <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
          <div className="flex-shrink-0 align-self-center">
            <h2 className='fw-bold mb-0 page-title'>All Services</h2>
          </div>
          <div className="flex-grow-1 d-flex justify-content-end gap-3">
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
            <Link
              to={`/services-provider/request`}
              className="btn btn-primary"
            >
              Additional Requests 
            </Link>
          </div>
        </div>
      </Col>
    </Row>

    <Row>
      {services.map((item, index) => (  
        <Col xs={12} lg={3} xl={4} className="mb-2 mb-xl-3 mb-xxl-4"  key={`${index}-${index}`}>
          <GeneralCard
          data={item}
          serviceCard={true}
          showCategory={true}
          showWishList={true}
          isWishList={item.wishList}
          linkPath="/services/" 
          toggleWishList={() => handleToggleWishList(item.id)}
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

export default withFilters(ServicesTab)
