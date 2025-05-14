import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { images } from '../../../Assets'
import "./style.css";
import CustomFilters from '../../../Components/CustomFilters';
import CustomButton from '../../../Components/CustomButton';
import { wishListData } from '../../../Config/data';
import { normalStatus } from '../../../Config/TableStatus';
import withFilters from '../../../HOC/withFilters ';
import ServicesCard from '../../../Components/UserComponents/ServicesCard';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import CustomPagination from '../../../Components/CustomPagination';
import { usePageTitle } from '../../../Utils/helper';
import GeneralCard from '../../../Components/UserComponents/GeneralCard';



const Wishlist = ({filters, setFilters, pagination, updatePagination}) => {
  usePageTitle("All Services", true);

  const [wishList, setWishList] = useState([]); // Initialize as an array
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  
  
  const fetchBookings = async () => {
    try {
      startSubmitting(true);
      const response = wishListData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setWishList(data);
        // updatePagination({
        //   showData: to,
        //   currentPage: current_page,
        //   totalRecords: total,
        //   totalPages: Math.ceil(total / per_page),
        // });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };
  
  useEffect(() => {
    fetchBookings();
  }, [filters]);

  const handleToggleWishList  = (id) => {
    // Find the current item based on the ID
    const currentItem = wishList.find((item) => item.id === id);
    // console.log(currentItem.id, "Item")
 
    // Toggle the wishList state
    const updatedWishListState  = !currentItem.isWishListed;
  
    // Update the videoData state
    setWishList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isWishListed: updatedWishListState  } : item
      )
    );
  };

  return (
    <>
    <section className='page-content all-services'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
              <div className="flex-shrink-0 align-self-center">
                <h2 className='fw-bold mb-0 page-title'>Wishlist</h2>
              </div>
              <div className="flex-grow-1 d-flex justify-content-end gap-3">
                <CustomFilters
                  filters={filters}
                  setFilters={setFilters}
                  showEntries={false}
                  // selectOptions={props?.selectOptions}
                  // dateFilters={props?.dateFilters}
                  dateFilters={[
                    {
                      title: "Registration Date",
                      from: "fromDate",
                      to: "toDate",
                    },
                  ]}
                  selectOptions={[
                    {
                      title: "Status",
                      options: normalStatus
                    }
                  ]}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {wishList?.map((item, index) => (
            <Col xs={12} lg={3} xl={4} key={index} className='mb-3 mb-xl-4 mb-xxl-5'>
              <GeneralCard
                data={item}
                serviceCard={true}
                showWishList={true}
                isWishList={item.wishList}
                linkPath="/services/" 
                toggleWishList={() => handleToggleWishList(item.id)}
              />
            </Col>
          ))}
        </Row>
        <CustomPagination
          pagination={pagination}
          setFilters={setFilters}

          // showingItem={props.showingItem}
          // totalItems={props.totalItems}
          // currentPage={props.currentPage}
          // totalPages={props.totalPages}
          // setCurrentPage={props.setCurrentPage}
        />
      </Container>
    </section>
    </>
  )
}

// export default Services
export default withFilters(Wishlist);
