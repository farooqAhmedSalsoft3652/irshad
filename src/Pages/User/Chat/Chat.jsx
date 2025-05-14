import React, { useEffect, useState } from "react";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { FaBars, FaMicrophone, FaSearch } from "react-icons/fa";
import { FaPaperPlane, FaXmark } from "react-icons/fa6";
import { IoIosCamera } from "react-icons/io";
import InputEmoji from "react-input-emoji";
import ScrollToBottom from "react-scroll-to-bottom";
import Styles from "./chat.module.css";
import CustomInput from "../../../Components/CustomInput/index";
import { chat_box, loginCredentials, sidebar } from "../../../Config/data";
import { usePageTitle } from "../../../Utils/helper";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomButton from "../../../Components/CustomButton";
import { Container } from "react-bootstrap";
import { images } from "../../../Assets";

// Add this css in global styles to change emoji picker icon color
// .react-input-emoji--button__show svg {
//   fill: var(--gradient15) !important;
// }
const UserChat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [sideData, setSideData] = useState([]);
  const [chatBox, setChatBox] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]); // State for handling file uploads
  const [chatFilter, setChatFilter] = useState("all");

  useEffect(() => {
    setSideData(sidebar);
    setChatBox(chat_box);
    setCurrentUserData(loginCredentials);
  }, []);
  usePageTitle("Chat");
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
  const handleSend = () => {
    if (!messageInput && files.length < 1) {
      return;
    }
    // Handle sending message with file
    // Example logic to send message and reset input states
    const newMessage = {
      "user-id": currentUserData["user-id"],
      name: currentUserData["full-name"],
      message: messageInput,
      picture: currentUserData["photo-path"],
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      files: files, // Use 'files' state to include files in the message object
    };

    // Update chatBox state with new message
    setChatBox((prevChatBox) => [...prevChatBox, newMessage]);

    // Clear messageInput and file state
    setMessageInput(``);
    setFiles([]);
  };

  return (
    
      <section className={"border-top"}>
        <Container fluid>

        <div className={`d-flex justify-content-between align-items-center mb-xl-0 mb-3`}>
          <button className={`${Styles[`sidebar-toggle`]} ${Styles[`chatToggleButton`]}`} onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className={`${Styles[`chat-module`]}`}>
          <div className={`${Styles[`chat-sidebar`]} ${isSidebarOpen ? `${Styles.open}` : ``}`}>
            <button className={`d-xl-none d-block ${Styles.sidebarCloseBtn}`} onClick={() => setIsSidebarOpen(false)}>
              <FaXmark />
            </button>
            <div className="px-4">
              <CustomInput
                labelclass="mainLabel flex-shrink-0 mb-0"
                type="text"
                wrapperClass="mb-0 flex-grow-1 "
                placeholder="Search Here..."
                inputclass="mainInput"
                id="search"
                rightIcon={FaSearch}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-3 my-2">
              <CustomButton
                style={{ minWidth: 90 }}
                onClick={() => {
                  setChatFilter("all");
                }}
                className={`site-btn ${chatFilter === "all" ? "primary-btn-2" : "secondary-btn-2"} px-3 py-2 mt-3`}
                text="All"
              />
              <CustomButton
                style={{ minWidth: 90 }}
                onClick={() => {
                  setChatFilter("read");
                }}
                text="Read"
                className={`site-btn ${chatFilter === "read" ? "primary-btn-2" : "secondary-btn-2"} px-3 py-2 mt-3`}
              />
              <CustomButton
                style={{ minWidth: 90 }}
                onClick={() => {
                  setChatFilter("unread");
                }}
                text="Unread"
                className={`site-btn ${chatFilter === "unread" ? "primary-btn-2" : "secondary-btn-2"} px-3 py-2 mt-3`}
              />
            </div>
            <ul>
              {sideData?.map((user, i) => (
                <div className={`${Styles.sidebarChat} my-3 ${user.isOpen ? `isOpen` : `close`}`} key={i} onClick={() => handleUserClick(user)}>
                  <div className={`flex-shrink-0`}>
                    <img src={user["photo-path"]} alt={`asdas`} className={Styles.chatHeaderImg} />
                  </div>
                  <div className={`flex-grow-1`}>
                    <h6 className={`mb-0`}>{user.name}</h6>
                    <p className={`mb-0`}>{user.message}</p>
                  </div>
                  <div>
                    <p className={`img-fluid ${Styles["noti-tag-time"]} mb-0`}>{user.time}</p>
                    {user.delivered && <span className={`${Styles.chatBadge} ms-auto`}>{user.notification}</span>}
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <div className={`${Styles["chat-area"]}`}>
            {chatBox ? (
              <div className={`${Styles["chat-window"]}`}>
                <header className={`${Styles.chatHeader} gap-3 ps-4 py-3`}>
                  <div className="flex-shrink-0">
                    <img src={images.UserImage} alt="" className="user-img" />
                  </div>
                  <div className="flex-grow-1 align-self-center">
                      <h4 className="fw-medium mb-2">Jessica Drew</h4>
                      <h5 className="mb-0">User</h5>
                  </div>
                </header>

                <div className={Styles.messages}>
                  <ScrollToBottom className={Styles.messages}>
                    {chatBox.map((message, index) => (
                      <div
                        key={index}
                        className={`${Styles.message} ${message["user-id"] !== currentUserData?.["user-id"] ? Styles["other-message"] : Styles["my-message"]}`}
                      >
                        {message.message && <p className={``}>{message?.message}</p>}
                        {message.files &&
                          message.files.map((file, index) => (
                            <div className={`my-3 ${Styles.uploadImg}`} key={index}>
                              <img src={URL.createObjectURL(file)} alt={`Uploaded File`} className={`img-fluid`} />
                            </div>
                          ))}
                        <div className={`d-flex justify-content-end align-items-center flex-wrap gap-3`}>
                          {
                            <div className={`d-flex gap-2 align-items-center flex-wrap`}>
                              <div className={`d-flex align-items-center gap-2`}>
                                <p className={`mb-0`}>{message?.time}</p>
                                {message["user-id"] == currentUserData?.["user-id"] && (
                                  <p className={`mb-0`}>{message?.seen ? <BiCheckDouble size={25} color="#53A6EC" /> : <BiCheck size={24} color="#666" />}</p>
                                )}{" "}
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    ))}
                  </ScrollToBottom>
                </div>

                {files.length > 0 && (
                  <div className={files ? Styles.uploadedFiles : ``}>
                    {files.map((item, index) => (
                      <div className={`${Styles.isFileVisible}`}>
                        <div className={`${Styles.fileVisible}`} key={index}>
                          <img src={URL.createObjectURL(item)} alt={`Uploaded File`} className={`img-fluid`} />
                          <button onClick={() => deleteFile(index)} className={`${Styles.deleteBtn}`}>
                            <FaXmark />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className={`${Styles["input-area"]}`}>
                  <div className={`${Styles.fileUpload}`}>
                    {/* <label htmlFor={`uploader`}>
                      <IoIosCamera size={32} />
                    </label> */}
                    <input type={`file`} id={`uploader`} onChange={handleFileChange} multiple hidden={true} />
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
                  <div className={`${Styles["input-area-inner"]}`}>
                    <button>
                      <FaMicrophone size={24} />
                    </button>
                    <button disabled={!(messageInput || files.length)} onClick={handleSend}>
                      <FaPaperPlane size={24} color={messageInput || files.length ? "#1819ff" : "#999"} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${Styles["no-chat-selected"]}`}>Select a user to start chat</div>
            )}
          </div>
        </div>
        </Container>
      </section>
    
  );
};

export default UserChat;
