import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { AdminLayout } from "../../../Components/Layout/AdminLayout";
import { Row, Col } from 'react-bootstrap';
import { getDetails } from "../../../Services/Api";
import { images } from "../../../Assets";
import { chatManageData, chat_box, currentUser, sidebar  } from "../../../Config/Data";
import Breadcrumbs  from "../../../Components/Breadcrumbs";
import CustomButton from "../../../Components/CustomButton";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheck, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import ScrollToBottom from 'react-scroll-to-bottom';





const ChatForum = ({ showModal }) => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({});


  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [sideData, setSideData] = useState([]);
  const [chatBox, setChatBox] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]); // State for handling file uploads

  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        const response = chatManageData?.detail?.data?.find( item=> item.id === Number(id));
        setRequestData(response);
                
        // if (response.status) {
        //   const { data, total, per_page, current_page, to } = response.detail;
        //   setUserData(data);
        //   setShowData(to);
        //   setCurrentPage(current_page);
        //   setTotalRecords(total);
        //   setTotalPages(Math.ceil(total / per_page));
        //   console.log(response, "User Logs")
        // }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    },
  )

   //First Modal
   const leaveGruop = (id, status) => {
    showModal(
      `leave group`,
      `Are you sure you wants to leave this Group?`,
      () => updateStatus(status, id),
    );
  };

  //Second Modal
  const updateStatus = async (status, id) => {
    showModal(
      `Successfully`,
      `Leave Group Successfully!`,
      null,
      true
    );    
  };

 
  //Reject Modal handleReject
  const handleReject = (id, status) => {
    showModal(
      `Chat forum request`, // heading
      `Are you sure you want to reject this chat forum Request?`, // text
      () => rejectModal(status, id), // action (callback for "Yes" button)
      false, // success
    );
  };
  
  const rejectModal = (id, status) => {
    showModal(
      null, // heading
      null, // defult Action
      null, // text
      false, // success
      "",  // className
      null, // fullscreen
      true, // showReason
      false,
      "Rejected reason",        // label1 (label for reason field)
      "Enter rejection reason",    // place1 (placeholder for reason field)
      () => updateReject(status, id), // action (callback for "Yes" button)
    );
  };

//Update Reject
  const updateReject = async (status, id) => {
    showModal(
      `Successfully`,
      `Request has been rejected Successfully!`,
      null,
      true
    );
  };

  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

const breadcrumbPaths = [
  ['Chat forum Management', '/admin/chat-forum-management/'],
  ['Chat Forum']
]; 





const handleUserClick = (user) => {
  // Handle user click logic
};

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

const handleFileChange = (e) => {
  // Handle file selection
  // setFile(e.target.files[0]);
  const selectedFiles = Array.from(e.target.files);
  setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
};

const deleteFile = (index) => {
  const updatedFiles = [...files];
  updatedFiles.splice(index, 1);
  setFiles(updatedFiles);
};
console.log(files)
const handleSend = () => {
  // Handle sending message with file
  // Example logic to send message and reset input states
  const newMessage = {
      user_id: currentUserData.user_id,
      name: currentUserData.name,
      message: messageInput,
      picture: currentUserData.picture,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      files: files // Use 'files' state to include files in the message object
  };


  // Update chatBox state with new message
  setChatBox(prevChatBox => [...prevChatBox, newMessage]);

  // Clear messageInput and file state
  setMessageInput('');
  setFiles([]);
};


useEffect(() => {
  document.title = "Mande Clan | Chat"
  setSideData(sidebar);
  setChatBox(chat_box);
  setCurrentUserData(currentUser);
}, []);


  return (
    <AdminLayout pageTitle="Advertisement Management Details">
      <section className="dashCard chatDashCard">
        <div className="page-header mb-4">
          <div className="page-title mb-0">
            <Row>
              <Col xs={12}>
                <h2>Chat Forum</h2>
              </Col>
            </Row>
          </div>
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
        <div className="content-body bg-primary-card rounded-10 shadow-sm p-2 p-lg-3 p-xxl-3 mb-0 mb-lg-0">
          <div className="chat-content">
            <Row>
              <Col xs={12} xl={3}>
                <div id="chat-sidebar" className={`chat-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                  <header className="mb-2">
                    <button className='d-xl-none d-block sidebarCloseBtn' onClick={() => setIsSidebarOpen(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <div className="searchWrapper1">
                        <input
                            type="text"
                            placeholder="Search"
                            name="search"
                            className="filterInput searchInput"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="searchButton notButton">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                  </header>
                  <div className='chat-list'>
                    {sideData?.map(user => (
                      <div className={`chat-item ${user.isOpen ? "isOpen" : "close"}`}
                        key={user.id}
                        onClick={() => handleUserClick(user)}
                      >
                          <div className="d-flex gap-3 mb-2">
                            <div className="flex-shrink-0">
                                <img src={user.picture} alt="" className="img-fluid user-img" />
                            </div>
                            <div className="flex-grow-1 align-self-center">
                                <h3 className="fw-medium mb-0">{user.name}</h3>
                                <h6 className="fw-regular mb-0">{user.time}</h6>
                            </div>
                            <div>
                            </div>
                          </div>
                          <div className="d-flex">
                              <p className="flex-grow-1">{user.message}</p>
                              {user.delivered && (<span className='flex-shrink-0 chatBadge ms-auto'>{user.notification}</span>)}
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={12} xl={9}>
                <div className="main">
                  <div className="chat-area">
                      {chatBox ? (
                          <div className="chat-window">
                              <div className="chatHeader gap-3"><img src="" alt="" />Business Name</div>

                              <div className="messages pt-3">
                                  <ScrollToBottom>
                                  {chatBox.map((message, index) => (
                                      <div key={index} className={`message ${message.user_id !== currentUserData?.user_id ? 'my-message' : 'other-message'}`}>
                                          {message.user_id !== currentUserData?.user_id ?
                                              <div className='d-flex align-items-center gap-3'>
                                                  <div>
                                                      <img src={message.picture} alt="" className='img-fluid' />
                                                  </div>
                                                  <h5 className='mb-0'>{message.name}</h5>
                                              </div> : " "
                                          }
                                          {message.message && <p className='mt-3'>{message?.message}</p>}
                                          {message.files && message.files.map((file, index) => (
                                              <div className="my-3 uploadImg" key={index}>
                                                  <img src={URL.createObjectURL(file)} alt="Uploaded File" className='img-fluid' />
                                              </div>
                                          ))}
                                          <div className={`d-flex ${message.user_id !== currentUserData?.user_id && "justify-content-end"}  align-items-center flex-wrap gap-3`}>
                                              <div className='d-flex gap-2 align-items-center flex-wrap'>
                                                  <p className='mb-0'><FontAwesomeIcon icon={faCheck} className='me-2' /> {message?.seen}</p>
                                                  <p className='mb-0'>┃</p>
                                                  <div className='d-flex align-items-center gap-2'>
                                                      <p className='mb-0'>{message?.time}<span className='mx-2'>●</span>{message.date}</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                                  </ScrollToBottom>
                              </div>

                              {files.length > 0 && <div className={files ? "uploadedFiles" : ""}>
                                {files.map((item, index) => (
                                  <div className='isFileVisible'>
                                      <div className="fileVisible" key={index}>
                                          <img src={URL.createObjectURL(item)} alt="Uploaded File" className='img-fluid' />
                                          <button onClick={()=>deleteFile(index)} className='deleteBtn'><FontAwesomeIcon icon={faXmark} />send</button>
                                      </div>
                                  </div>
                              ))}
                              </div>
                              }
                              <div className="input-area">
                                  <input
                                      type="text"
                                      placeholder="Type A Message..."
                                      value={messageInput}
                                      onChange={(e) => setMessageInput(e.target.value)}
                                  />
                                  <div className="fileUpload">
                                      <label htmlFor="uploader">
                                          <img src="" alt="" className='img-fluid camInputImg' />
                                      </label>
                                      <input type="file" id='uploader' onChange={handleFileChange} multiple hidden={true} />

                                  </div>
                                  <button onClick={handleSend}><img src="" className='img-fluid' alt="" /></button>
                                  <div className='input-area-inner'>
                                      <button>send</button>
                                      <button>sas</button>
                                  </div>
                              </div>
                          </div>
                      ) : (
                          <div className="no-chat-selected">Select a user to start chat</div>
                      )}
                  </div>
                </div>
              </Col>
            </Row>

          </div>
        </div>
        
            </section>

      
    </AdminLayout>
  );
};

export default withModal(ChatForum);
