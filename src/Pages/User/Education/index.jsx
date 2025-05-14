import {React, useState, useEffect} from "react";
import { Col, Container, Row, Tab , Nav} from "react-bootstrap";
import { usePageTitle } from "../../../Utils/helper";
import {  educationVideoData, educationEBooksData,   educationArticlesData, educationOfflineData  } from "../../../Config/data";
import ServicesCard from "../../../Components/UserComponents/ServicesCard";
import CustomPagination from "../../../Components/CustomPagination";
import withFilters from "../../../HOC/withFilters ";
import CustomFilters from "../../../Components/CustomFilters";
import { languageOptions } from "../../../Config/TableStatus";
import "./style.css"
import GeneralCard from "../../../Components/UserComponents/GeneralCard";
import EbookTab from "./Tabs/EbookTab";
import VideoTab from "./Tabs/VideoTab";
import OfflineTab from "./Tabs/OfflineTab";
import ArticlesTab from "./Tabs/ArticlesTab";

const Education = ({filters, setFilters, pagination, }) => {
  usePageTitle("Education", true);

  const [activeTab, setActiveTab] = useState("videos-tab");

 // Function to filter data based on active tab
 const filteredData = (type) => {
  switch (type) {
    case "videos-tab":
      return <VideoTab />;
    // case "videos-tab":
    //   return videoData;
    case "ebooks-tab":
      return <EbookTab />;
    case "articles-tab":
      return <ArticlesTab />;
    case "offline-content-tab":
      return <OfflineTab />;
    default:
      return [];
  }
};

// // Function to toggle the save state
// const toggleSave = (id) => {
//   setVideoData((prevData) =>
//     prevData.map((item) =>
//       item.id === id ? { ...item, is_save: !item.is_save } : item
//     )
//   );
//   // let newState = !currentItem.is_save;
//   //   setVideoData((prevData) =>
//   //     prevData.map((item) => (item.id === id ? { ...item, is_save: newState } : item))
//   //   );  
// };


// // useEffect(() => {
//   // console.log("Initial video data:", videoData);
// // }, [videoData]); 


  return (
    <>
        <section className="page-content education-page">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="d-flex service-header mb-3 mb-xl-4 mb-xxl-5">
                  <div className="flex-shrink-0 align-self-center">
                    <h2 className='fw-bold mb-0 page-title'>Education</h2>
                  </div>
                  <div className="flex-grow-1 d-flex justify-content-end gap-3">
                    <CustomFilters
                      filters={filters}
                      setFilters={setFilters}
                      showEntries={false}
                      // selectOptions={props?.selectOptions}
                      // dateFilters={props?.dateFilters}
                      selectOptions={[
                        {
                          title: "Language",
                          options: languageOptions
                        }
                      ]}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}> 
                <Tab.Container 
                  defaultActiveKey="videos-tab"
                  onSelect={(key) => setActiveTab(key)} // Update active tab
                >
                  <Nav variant="pills" className="mb-4 justify-content-center gap-3 gap-xl-4 gap-xxl-5">
                    <Nav.Item>
                      <Nav.Link eventKey="videos-tab">Videos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ebooks-tab">E-books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="articles-tab">Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="offline-content-tab">Offline Content</Nav.Link>
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
  );
};


export default withFilters(Education);
