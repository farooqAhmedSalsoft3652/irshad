import { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { FaBars, FaFilter, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import CustomInput from "../../../Components/CustomInput/index";
import { chat_box, loginCredentials, sidebar } from "../../../Config/data";
import { usePageTitleUser } from "../../../Utils/helper";
import Styles from "./chat.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserChatAnnouncement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [sideData, setSideData] = useState([]);
  const [chatBox, setChatBox] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]); // State for handling file uploads

  useEffect(() => {
    setSideData(sidebar);
    setChatBox(chat_box);
    setCurrentUserData(loginCredentials);
  }, []);
  usePageTitleUser("Announcement");
  const handleUserClick = (user) => {
    // Handle user click logic
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card p-0 bg-white">
            <h2 className="text-center fw-bold pt-3">Chat</h2>
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
                <div className="d-flex align-items-center gap-2 px-2">
                   <div className="chat-search flex-grow-1">
                    <CustomInput
                      type="text"
                      placeholder="Search..."
                      name="search"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="searchButton notButton">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                  <div className="flex-shrink-0">
                    <Dropdown className="chat_filter">
                      <Dropdown.Toggle className="btn_filter p-0">
                        <FaFilter size={20} color="white" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="end">
                        <h6 className="mb-1 ps-3" style={{ color: "#333" }}>
                          Chat
                        </h6>
                        <Dropdown.Item>
                          <Link className="text-decoration-none" style={{ color: "#999999" }}>
                            Reports
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link className="text-decoration-none" style={{ color: "#999999" }}>
                            Contact Us
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
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
                      <div className="">
                        <div className="">
                          <div className="">
                            <h4 className="fw-medium mb-0">Announcement</h4>
                          </div>
                        </div>
                      </div>
                    </header>

                    <div className={Styles.messages}>
                      <ScrollToBottom className={Styles.messages}>
                        {chatBox.map((message, index) => (
                          <div
                            key={index}
                            className={`${Styles.message} ${
                              message["user-id"] !== currentUserData?.["user-id"] ? Styles["other-message"] : Styles["my-message"]
                            }`}
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
                                      <p className={`mb-0`}>
                                        {message?.seen ? <BiCheckDouble size={25} color="#53A6EC" /> : <BiCheck size={24} color="#666" />}
                                      </p>
                                    )}{" "}
                                  </div>
                                </div>
                              }
                            </div>
                          </div>
                        ))}
                      </ScrollToBottom>
                    </div>
                  </div>
                ) : (
                  <div className={`${Styles["no-chat-selected"]}`}>Select a user to start chat</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserChatAnnouncement;
