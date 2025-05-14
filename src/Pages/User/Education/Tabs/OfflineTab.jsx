import React, { useState } from 'react'
import { Col, Container, Row, Tab , Nav} from "react-bootstrap";
import OfflineVideoTab from './OfflineVideoTab';
import OfflineEbookTab from './OfflineEbookTab';
import OfflineArticlesTab from './OfflineArticlesTab';




const OfflineTab = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("videos-tab");

   // Function to filter data based on active tab
 const filteredData = (type) => {
  switch (type) {
    case "videos-tab":
      return <OfflineVideoTab />;
    // case "videos-tab":
    //   return videoData;
    case "ebooks-tab":
      return <OfflineEbookTab />;
    case "articles-tab":
      return <OfflineArticlesTab />;
    default:
      return [];
  }
};

  return (
    <Row>
      <Col xs={12}> 
        <Tab.Container 
          defaultActiveKey="videos-tab"
          onSelect={(key) => setActiveTab(key)} // Update active tab
        >
          <Nav variant="tabs" className="mb-3 mb-xl-4 mb-xxl-5 justify-content-start style-underline-tabs">
            <Nav.Item>
              <Nav.Link eventKey="videos-tab">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ebooks-tab">E-books</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="articles-tab">Articles</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={activeTab}>
              <Row>{filteredData(activeTab)}</Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
      {/* <Col xs={12}>
        <CustomPagination
          pagination={pagination}
          setFilters={setFilters}
        />
      </Col> */}
    </Row>
  )
}

export default OfflineTab
