import React, { useEffect, useState } from 'react'
import CustomFilters from '../../../Components/CustomFilters'
import { Col, Container, Nav, Row, Tab, Card } from 'react-bootstrap'
import withFilters from '../../../HOC/withFilters '
import { normalStatus } from '../../../Config/TableStatus'
import CustomButton from '../../../Components/CustomButton'
import { Link } from 'react-router-dom'
import { AppPurchaseData } from '../../../Config/data'
import { usePageTitle } from '../../../Utils/helper'
import { useFormStatus } from '../../../Hooks/useFormStatus'
import CustomPagination from '../../../Components/CustomPagination'
import { images } from '../../../Assets'

const InAppPurchase = ({filters, setFilters, pagination, updatePagination,}) => {
  usePageTitle("In App Purchase", true);

  const [appData, setAppData] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  
  const fetchAppPurchaseData = async () => {
    try {
      startSubmitting(true);
      const response = AppPurchaseData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setAppData(data);
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
    fetchAppPurchaseData();
  }, [filters]);


  return (
    <section className='page-content app-purchase'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
              <div className="flex-shrink-0 align-self-center">
                <h2 className='fw-bold mb-0 page-title'>In-App Purchase</h2>
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
          <Col xs={12} className=''>
            {appData?.map((item, index) => (
            <Card className={`card card-app px-3 px-md-4 py-3 py-md-4 mb-4 rounded-20 card-primary border-0`}>
              <div className="media d-flex">
                <img src={images.fileIcon} alt="" className='file-icon align-self-start' />
                <div className="media-body d-md-flex align-self-center flex-grow-1 mt-1">
                  <div className="flex-grow-1 pe-0 px-md-3 px-lg-4 px-xxl-4">
                    <h4 className='fw-semibold text-capitalize text-black'>{item.title}</h4>
                    <h6 className='price fw-semibold text-blue'>${item.price}</h6>
                    <p className='fw-regul0ar mb-0 mt-3'>{item.description}</p>
                  </div> 
                  <div className="flex-shrink-0 mt-3 mt-lg-0 align-self-center">
                    <Link to={`/in-app-purchase/payment/${item.id}`}
                    className="btn btn-primary py-2 px-0"
                    //  onClick={() => setIsRead(!isRead)}
                    > <images.CardIconOutline /> Buy Now</Link>
                  </div>
                </div>
              </div>
            </Card>
            ))}
          </Col>
        </Row>
        <CustomPagination
          pagination={pagination}
          setFilters={setFilters}
        />
      </Container>
    </section>
  )
}

export default withFilters(InAppPurchase)