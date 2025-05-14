import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { images } from '../../../Assets'
import "./style.css";
import CustomFilters from '../../../Components/CustomFilters';
import { normalStatus } from '../../../Config/TableStatus';
import withFilters from '../../../HOC/withFilters ';
import CustomButton from '../../../Components/CustomButton';
import { servicesData, servicesProviderData, } from '../../../Config/data';
import ServicesCard from '../../../Components/UserComponents/ServicesCard';
import CustomPagination from '../../../Components/CustomPagination';
import ShopCard from '../../../Components/UserComponents/ShopCard';
import { useParams } from 'react-router-dom';
import ServicesTab from './Tabs/ServicesTab';
import ProductTab from './Tabs/ProductTab';
import NewsFeedTab from './Tabs/NewsFeedTab';


const ServicesProvider = ({filters, setFilters, pagination, updatePagination}) => {

  const  {id} = useParams()
  const [data, setData] = useState()
  const [activeTab, setActiveTab] = useState("services-tab");

  const fethchData = async() =>{
    const response = servicesProviderData.detail.data.find((e) => e.id === Number(id))
    if(response){
      setData(response)
    }
  }
  useEffect(() => {
    fethchData();
  }, [id]);

   // Function to filter data based on active tab
const filteredData = (type) => {
  switch (type) {
    case "services-tab":
      return <ServicesTab />;;
    case "product-tab":
      return <ProductTab />;
    case "newsfeed-tab":
      return <NewsFeedTab />;
    default:
      return [];
  }
};


  return (
    <>
    <section className='service-intro py-2 py-lg-4 py-xl-5'>
      <Container fluid>
        <Row>
          <Col xs={10} className='mx-auto col-10 d-flex flex-column align-items-center gap-3 text-center'>
            <img src={images.srvProviderPic} alt="" />
            <h4 className='fw-bold mb-1 mt-2'>{data?.name}</h4>
            <p className='mb-0'>{data?.biodata}</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='page-content all-services pt-4'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Tab.Container
            defaultActiveKey={activeTab}
            onSelect={(key) => setActiveTab(key)} // Update active tab
            >
              <Nav variant="tabs" className="mb-3 mb-xl-4 mb-xxl-5 justify-content-center style-underline-tabs fixed-width">
                <Nav.Item>
                  <Nav.Link eventKey="services-tab">All services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="product-tab">Shop Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="newsfeed-tab">Newsfeed</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey={activeTab}>
                {filteredData(activeTab)}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default withFilters(ServicesProvider);