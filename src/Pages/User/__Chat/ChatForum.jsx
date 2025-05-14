import { faCheck, faEllipsisV, faPlus, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { Col, Dropdown, FormCheck, Row } from 'react-bootstrap';
import InputEmoji from "react-input-emoji";
import { useParams, } from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom';
import { images } from "../../../Assets";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { AdminLayout } from "../../../Components/Layout/AdminLayout";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { chatManageData, chat_box, currentUser, sidebar } from "../../../Config/Data";

import "./style.css";

import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import socketIO from "socket.io-client";
const socket = socketIO.connect("https://custom-dev.onlinetestingserver.com:8031", { transports: ["websocket"] });

import ChatSubmitBtn from "../../../Assets/images/chat-send-btn.svg?react";
import { Select } from "../../../Components/Select";
import { chatSorting } from "../../../Config/TableStatus";


const ChatForum = ({ showModal }) => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({});

  const [forumModal, setforumModal] = useState(false);
  const [forumImage, setForumImage] = useState();

  const handleClose = () => setforumModal(false);




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

  //  //Leave Group Modal
  //  const leaveGroup  = (id, status) => {
  //   showModal(
  //     `leave group`,
  //     `Are you sure you wants to leave this Group?`,
  //     () => updateleaveGroup(status, id),
  //   );
  // };

  // //Leave Group Updates Modal Modal
  // const updateleaveGroup = async (status, id) => {
  //   showModal(
  //     `Successfully`,
  //     `Leave this Group Successfully!`,
  //     null,
  //     true
  //   );    
  // };

  //BLock User Modal
  const handleLeaveForum  = (id, status) => {
    showModal(
      `leave Forum`,
      `Are you sure you wants to leave this chat Forum`,
      () => updateLeaveForum(status, id),
    );
  };

  //Leave Group Updates Modal Modal
  const updateLeaveForum = async (status, id) => {
    showModal(
      `Successfully`,
      `Leave this Forum Successfully!`,
      null,
      true
    );    
  };


   //First Modal
   const handleNewForum = () => {
    setforumModal(true)
  };
  
   const handleForumCreate = () => {
    setforumModal(false);
    showModal(
      `create Chat Forum`,
      `Request to create chat forum has been send to sub admin wait for their approval.`,
      null,
      true
    ); 
  };

  //Second Modal
  const updateStatus = async (status, id) => {
    showModal(
      `Successfully`,
      `Request has been approved Successfully!`,
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





useEffect(() => {
  setSideData(sidebar);
  setChatBox(chat_box);
  setCurrentUserData(currentUser);
}, []);



// Chat

const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [sideData, setSideData] = useState([]);
  const [chatBox, setChatBox] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]); // State for handling file uploads
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(0);
  const [currentFirstName, setCurrentFirstName] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");
  const [currentPhoto, setCurrentPhoto] = useState("");
  const [currentUserId, setCurrentUserId] = useState(0);

  //audio recording states
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [intervalId, setIntervalId] = useState(null);



const stopRecording = (e) => {
  if (mediaRecorder) {
    setRecording(false);

    // blinking effect stop
    const targetElement = e.target;
    clearInterval(intervalId);
    setIntervalId(null);
    targetElement.classList.add("blinkMicroPhone");
    mediaRecorder.stop();
  }
};

const startRecording = (e) => {
  if (mediaRecorder) {
    setRecording(true);

    // blinking effect start
    const targetElement = e.target;
    const id = setInterval(() => {
      targetElement.classList.toggle("blinkMicroPhone");
    }, 500);
    setIntervalId(id);

    mediaRecorder.start();

    mediaRecorder.ondataavailable = (e) => {
      const audioBlob = new Blob([e.data], { type: "audio/wav" });
      const audioURL = URL.createObjectURL(audioBlob);
      setAudioURL(audioURL);
      setRecording(false);

      // Create a file and store it
      const file = new File([audioBlob], "recording.wav", { type: "audio/wav" });

      // Create a DataTransfer object and attach the file
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      // Create a hidden file input element and set its files
      // const inputElement = document.createElement('input');
      // inputElement.type = 'file';
      // inputElement.files = dataTransfer.files;

      const selectedFiles = Array.from(dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };
  }
};

const toggleMicrophone = (e) => {
  if (recording) {
    stopRecording(e);
  } else {
    startRecording(e);
  }
};

const readAll = async (chat_id) => {
  let response = await axios.get(`admin/read-all?chat_id=${chat_id}`).catch((e) => {
    console.log(e?.response?.data?.message);
  });
  if (response?.status) {
    getChats();
  }
};

const getChats = async () => {
  let response = await axios.get(`admin/chats?search=${searchQuery}`).catch((e) => {
    console.log(e.response.data.message);
  });
  if (response?.status) {
    setChats(response.data.data);
  }
};

const getChatMessages = async (
  chatID = chatId,
  user_id = currentUserId,
  firstName = currentFirstName,
  lastName = currentLastName,
  profile = currentPhoto
) => {
  let response = await axios.get(`admin/chat-messages?chat_id=${chatID}`).catch((e) => {
    console.log(e.response.data.message);
  });
  if (response?.status) {
    setMessages(response.data.data);
    setChatId(chatID);
    readAll(chatID);
    setCurrentFirstName(firstName);
    setCurrentLastName(lastName);
    setCurrentPhoto(profile);
    setCurrentUserId(user_id);
  }
};

  useEffect(() => {
    document.title = "Mande Clan | Chat";
    getChats();

    setSideData(sidebar);
    setChatBox(chat_box);
    setCurrentUserData(currentUser);

    // Request access to the user's microphone

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
      })
      .catch((err) => console.error("Error accessing microphone:", err));
  }, []);

  useEffect(() => {
    socket.on(JSON.parse(sessionStorage.getItem("user"))?.id, function (msg) {
      let data = JSON.parse(msg);
      data.is_mine = false;
      getChats();
      if (data?.sender?.id == currentUserId) {
        // setMessages([...messages, data]);
        messages.push(data);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off(JSON.parse(sessionStorage.getItem("user"))?.id);
    };
  }, [chatId]);

  const handleUserClick = (chat_id, user_id, firstName, lastName, profile) => {
    getChatMessages(chat_id, user_id, firstName, lastName, profile);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = (e) => {
    // Handle file selection
    // setFile(e.target.files[0]);
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const deleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };
  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  const handleSend = async () => {
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

    if (recording) {
      return;
    } else if (!messageInput && !files.length) return;

    // console.log(files);
    // return;

    const formData = new FormData();
    formData.append("user_id", currentUserId);
    formData.append("message", messageInput);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      formData.append(`attachments[${i}]`, files[i]);
    }

    // return;

    await axios
      .post("admin/message", formData)
      .then((response) => {
        let data = response?.data?.data;
        // console.log(data?.receiver?.id);
        socket.emit("chat_message", data);
        setMessageInput("");
        getChats();
        setMessages([...messages, data]);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });

    setFiles([]);
  };

  const handleImageChange = (e) => {
    setForumImage(URL.createObjectURL(e.target.files[0]));
    setImageObject(e.target.files[0]);
  };


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
          <div className="chat-module">
            <Row>
              <Col xs={12} xl={4} xxl={3}>
                <div id="chat-sidebar" className={`chat-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                  <header className="mb-3">
                    <CustomButton
                      type="button"
                      variant="transparent"
                      className="px-0 btn-new-forum mb-2"
                      onClick={handleNewForum}
                    >
                      <span><FontAwesomeIcon icon={faPlus} /></span>New forum
                    </CustomButton>
                    <div className="search-wrap mb-3">
                      <CustomInput
                        type="search"
                        id="subscription_title"
                        name="subscription_title"
                        placeholder="Search"
                        inputIcon={faSearch}
                        iconPosition="left"
                      />
                    </div>
                    <Select
                        className="rounded-5 mt-3"
                        // value={selectedValue}
                        // onChange={handleStatusChange}
                        labelClassName="pe-3 mb-0 align-self-center"
                        selectWrapClass="chat-selector"
                      >
                        {chatSorting}
                      </Select>
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
                            <div className="flex-shrink-0 dropdown-group">
                              <Dropdown align="end">
                                <Dropdown.Toggle variant="" className="">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                              <Dropdown.Menu className="tableDropdownMenu">
                                <Dropdown.Item onClick={handleLeaveForum}>Leave</Dropdown.Item>
                                {/* <Dropdown.Item onClick={handleBlockUser}>block user</Dropdown.Item> */}
                              </Dropdown.Menu>
                            </Dropdown>
                            </div>
                          </div>
                          {/* <div className="d-flex">
                              <p className="flex-grow-1">{user.message}</p>
                              {user.delivered && (<span className='flex-shrink-0 chatBadge ms-auto'>{user.notification}</span>)}
                          </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={12} xl={8} xxl={9}>
                <div className="main chat-area">
                      <header className="mb-2 d-flex ps-4 gap-3 py-3">
                        <div className="flex-shrink-0">
                          <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        </div>
                        <div className="flex-grow-1 align-self-center">
                            <h2 className="fw-medium mb-0">Chat Forum Name</h2>
                        </div>
                        <div className="flex-shrink-0 dropdown-group">
                          <Dropdown align="end">
                            <Dropdown.Toggle variant="" className="">
                              <FontAwesomeIcon icon={faEllipsisV} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="tableDropdownMenu">
                              <Dropdown.Item>Mute</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </header>
                <ScrollToBottom className="messages">
                  {chatBox ? (
                    <>
                      <div className="messages pt-3">
                          
                          {chatBox.map((message, index) => (
                            <div key={index} className={`message ${message.user_id !== currentUserData?.user_id ? 'my-message' : 'other-message'}`}>
                                {message.user_id !== currentUserData?.user_id ?
                                    <div className='d-flex align-items-center gap-3 user-info mb-3'>
                                        <div>
                                            <img src={message.picture} alt="" className='img-fluid user-image' />
                                        </div>
                                        <h5 className='mb-0'>{message.name}</h5>
                                    </div> : " "
                                }
                                <div className="message-box">
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
                              </div>
                          ))}
                          
                      </div>
                      {files.length > 0 &&
                        <div className={files ? "uploadedFiles" : ""}>
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
                        </>
                      ) : (
                          <div className="no-chat-selected">Select a user to start chat</div>
                      )}
                </ScrollToBottom>
                <footer className="mx-3">
                  <div className="input-area d-flex">
                    <div className="fileUpload align-self-center flex-shrink-0 me-2">
                        <label className="mb-0" htmlFor="uploader">
                            <img src={images.chatImgUpload} alt="" className='img-fluid' />
                        </label>
                        <input type="file" id='uploader' onChange={handleFileChange} multiple hidden={true} />
                    </div>
                    <InputEmoji 
                      keepOpened={true}
                      borderRadius={5}
                      borderColor="#e4e4e4"
                      value={messageInput}
                      onChange={setMessageInput}
                      onKeyDown={handlePressEnter}
                      placeholder="Type a message"
                    ></InputEmoji>

                    <div className="input-area-inner flex-shrink-0 ms-3">
                        <CustomButton
                          type="button"
                          variant="transparent"
                          className="chat-send p-0"
                          onClick={handleSend}
                        >
                          <ChatSubmitBtn />
                        </CustomButton>
                    </div>
                  </div>
                      </footer>
                </div>
              </Col>
            </Row>
          </div>
        </div>
            </section>
            <Modal show={forumModal} onHide={handleClose} centered  size = "md" className="">
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                <button type="button" className="btn close" onClick={handleClose} >
                  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> 
                </button>
              </Modal.Header>
              <Modal.Body>
                <div className="new-forum-modal px-4">
                  <h3 className="modal-title text-center mb-4 fw-semibold">New Forum</h3>

                  <div className="mb-4 d-flex align-items-center gap-3">
                    <div className="flex-shrink-0">
                        <input
                          type="file"
                          accept="image/*"
                          className="d-none"
                          id="forumImage"
                          onChange={(event) => handleImageChange(event)}
                        />
                        <label
                        className="mb-0 ps-0"
                          htmlFor="forumImage"
                        >
                          <img
                          src={forumImage ?? images.newForum}
                          alt="User"
                          className="forum-image"
                        />
                        </label>
                    </div>
                    <div className="flex-grow-1">
                      <CustomInput
                        type="text"
                        id="chat_forum"
                        name="chat_forum"
                        placeholder="Chat Forum name"
                        />
                    </div>
                  </div>
                  <div className="mx-1 forum-list">
                    <FormCheck className="d-flex align-items-center">
                      <FormCheck.Label className="flex-grow-1">
                        <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        User Name
                      </FormCheck.Label>
                      <FormCheck.Input
                        type="checkbox"
                        name="eventEntryForm"
                        checked
                        readOnly
                      />
                    </FormCheck>
                    <FormCheck className="d-flex align-items-center">
                      <FormCheck.Label className="flex-grow-1">
                        <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        User Name
                      </FormCheck.Label>
                      <FormCheck.Input
                        type="checkbox"
                        name="eventEntryForm"
                        checked
                        readOnly
                      />
                    </FormCheck>
                    <FormCheck className="d-flex align-items-center">
                      <FormCheck.Label className="flex-grow-1">
                        <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        User Name
                      </FormCheck.Label>
                      <FormCheck.Input
                        type="checkbox"
                        name="eventEntryForm"
                        checked
                        readOnly
                      />
                    </FormCheck>
                    <FormCheck className="d-flex align-items-center">
                      <FormCheck.Label className="flex-grow-1">
                        <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        User Name
                      </FormCheck.Label>
                      <FormCheck.Input
                        type="checkbox"
                        name="eventEntryForm"
                        checked
                        readOnly
                      />
                    </FormCheck>
                    <FormCheck className="d-flex align-items-center">
                      <FormCheck.Label className="flex-grow-1">
                        <img src={images.chatUser} alt="" className="img-fluid user-img" />
                        User Name
                      </FormCheck.Label>
                      <FormCheck.Input
                        type="checkbox"
                        name="eventEntryForm"
                        checked
                        readOnly
                      />
                    </FormCheck>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0 pt-1 pb-4 text-center d-flex justify-content-center flex-column flex-sm-row align-items-stretch gap-2">
              <CustomButton onClick={handleForumCreate}>Create</CustomButton>
              </Modal.Footer>
            </Modal>
    </AdminLayout>


  );
};

export default withModal(ChatForum);
