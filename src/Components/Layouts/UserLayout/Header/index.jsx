import { useEffect, useRef, useState } from "react";
import { Link, NavLink,  useLocation,  useNavigate } from "react-router-dom";
import { Container, Offcanvas, Button, Row, Col, Dropdown, ListGroup } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faBars, faEnvelope,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { images } from "../../../../Assets";
import CustomModal from "../../../CustomModal";
import Toast, { showToast } from "../../../Toast";
// import { notifications } from "../../config/data";
// import { NotificationDropDown } from "../../components/notificationDropDown";
import { useAuth } from "../../../../Hooks/useAuth";
import { useLogout } from "../../../../Services/Auth";
import "./style.css";
import { fullName, generateLinks, generateProviderLinks } from "../../../../Utils/helper";
import HeaderNotification from "../../../HeaderNotification";
import { notificationsData } from "../../../../Config/Data";
// import { notificationsData } from "../../../../Config/data";


export const Header = () => { 
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dropDown, setDropDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [notiData, setNotiData] = useState(notifications);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const { role, token, user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loginRequireModal, setLoginRequireModal] = useState(false);
  const [profilePic, setProfilePic] = useState();
  const location = useLocation();
  const isProviderPath = location.pathname.includes('provider');

  useEffect(() => {
    if (user) {
      setProfilePic(user.photo_path || images.userImage);
    }
  }, [user]);

  const handleLogout = useLogout();
  const logout = async () => {
    showToast("Logout Successfully", "success");
    await handleLogout(role);
    isProviderPath &&
    setTimeout(() => {
      navigate(`/provider`);
    }, 1000);
    
    !isProviderPath &&
    setTimeout(() => {
      navigate(`/`);
    }, 1000);

  };

  const hideDropdown = () => setDropDown(false);
  const navbarRef = useRef(null);

  const checkScrollButtons = () => {
    if (navbarRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navbarRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
  useEffect(() => {
    checkScrollButtons();
  }, [checkScrollButtons]);

  useEffect(() => {
    window.addEventListener("resize", checkScrollButtons);
    return () => {
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const pageAcces = ["", "about-us", "contact-us", "provider", "provider/about-us", "provider/contact-us"];

  const [userRole, setUserRole] = useState({});
  useEffect(() => {
    setUserRole(role);
  }, []);

  const handleClick = (path) => {
    if (!userRole && !pageAcces.includes(path.replace("/", "").toLowerCase())) {
      setLoginRequireModal(true);
    } else {
      window.location.href = path;
    }
  };



  // const PUBLIC_PAGES = ["about-us", "/provider", "/provider/about-us", "/provider/contact-us", "/provider/newsfeed"];
  // const handleClick = (path) => {
  //   if (token || PUBLIC_PAGES.includes(path)) {
  //     window.location.href = path; // Navigate if token exists or page is public
  //   } else {
  //     setLoginRequireModal(true); // Show restrict modal if no token & restricted page
  //   }
  // };

//  const pageAcces = ["home","contact-us", "about-us",];

//  const handleClick = () => {
//   setLoginRequireModal(true);
// };


const [notificationData, setNotificationData] = useState([]);
const getNotification = async () => {
  // let url = `/${role}-api/notifications`;
  // const response = await getAll(url);
  const response = notificationsData;
  if (response) {
    setNotificationData(response?.detail?.notifications?.data);
  }
};


let currentLinks = isProviderPath ? generateProviderLinks(role) : generateLinks(role);


// let Links = generateLinks(role);
// let ProviderLinks = generateProviderLinks(role);
// console.log(ProviderLinks)

// console.log(user)
  return (
    <>
      <header id="header" className="w-100 z-inxed-2 w-100 bg-white user-header">
        <div className="top-header">
          <Container fluid>
            <Row>
              <Col md={6} className="align-self-center">
                <Nav as="ul" className="top-info justify-content-center justify-content-md-start">
                  <Nav.Item as="li">
                    <a href="tel:123456789">
                      <FontAwesomeIcon icon={faPhone} className="me-2" /> 000-000-0000
                    </a>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <a href={`mailto:abc@gmail.com`}><FontAwesomeIcon icon={faEnvelope} className="me-2" />abc@gmail.com</a>
                  </Nav.Item>
                </Nav>

              </Col>
              <Col md={6} className="text-center text-md-end">
                <div className="social-icons">
									<Link to="" target="_blank">
										<FontAwesomeIcon icon={faFacebookF} />
									</Link>
									<Link to="" target="_blank">
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
									<Link to="" target="_blank">
										<FontAwesomeIcon icon={faLinkedinIn} />
									</Link>
								</div>
              </Col>
            </Row>    
          </Container>
        </div>

        <Navbar bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand as={Link} to={isProviderPath ? "/provider/" : "/"} className="me-3">
              <img src={images.HeaderLogo} alt="" />
            </Navbar.Brand>
              <Offcanvas className="main-nav-wrap flex-grow-1 me-0 me-lg-3" show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                  id="basic-navbar-nav"
                  className="justify-content-between"
                >
                  {token ? (
                    // Logged-in User Navigation
                    <div className="d-flex scroll-nav-wrapper flex-grow-1 justify-content-start justify-content-lg-end">
                      {showLeftButton && (
                        <button
                          className="scroll-button d-lg-inline-block d-none left"
                          onClick={scrollLeft}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                      )}
                      <Nav className="mx-0 scrollable-nav" ref={navbarRef} onScroll={checkScrollButtons} onMouseLeave={hideDropdown}>
                        {currentLinks.map((element, index) => (
                          <Nav.Item as="li" key={index}>
                            <NavLink className="nav-link" to={element.path}>
                              {element.label}
                            </NavLink>
                          </Nav.Item>
                        ))}
                      </Nav>
                      {showRightButton && (
                        <button className="scroll-button d-lg-inline-block d-none right" onClick={scrollRight}>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      )}
                    </div>
                  ) : (
                     // Guest Navigation
                    <div className="d-flex scroll-nav-wrapper flex-grow-1 justify-content-start justify-content-lg-end">
                      {showLeftButton && (
                        <button className="scroll-button d-lg-inline-block d-none left" onClick={scrollLeft}>
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                      )}
                     <Nav className="mx-0 scrollable-nav" ref={navbarRef} onScroll={checkScrollButtons} onMouseLeave={hideDropdown}>
                      {currentLinks.map((element, index) => {
                        const isAccessible = userRole || pageAcces.includes(element.path.replace("/", "").toLowerCase()); 

                        return (
                          <Nav.Item as="li" key={index}>
                            <NavLink
                              className={({ isActive }) => `nav-link ${isAccessible && isActive ? "active" : ""}`}
                              to={isAccessible ? element.path : "#"}
                              onClick={(e) => {
                                if (!isAccessible) {
                                  e.preventDefault();
                                  handleClick(element.path);
                                }
                              }}
                            >
                              {element.label}
                            </NavLink>

                            {/* <NavLink
                              className={({ isActive }) => `nav-link ${isAccessible && isActive ? 'active' : ''}`}
                              to={isAccessible ? element.path : "#"}
                              onClick={(e) => {
                                if (!isAccessible) {
                                  e.preventDefault();
                                  handleClick(element.path);
                                }
                              }}
                            >
                              {element.label}
                            </NavLink> */}
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                      {showRightButton && (
                        <button className="scroll-button d-lg-inline-block d-none right" onClick={scrollRight}>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      )}
                    </div>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
              <Navbar.Collapse id="" className="flex-grow-0 h-100 justify-content-end">
                {token ? (
                  <Nav as="ul" className="gap-3 gap-xxl-4 navbar-login align-items-center">
                    {isProviderPath ? (
                      <>
                        {/* to={isProviderPath ? "/provider/signup" : "/signup"} */}
                        <Nav.Item as="li">
                          <Link to={isProviderPath ? "/provider/chat" : "/chat"}><images.ChatIcon /></Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <HeaderNotification viewAllLink="/provider/notifications" notificationData={notificationData} getNotification={getNotification} />
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Dropdown className="dropdown-user">
                            <Dropdown.Toggle className="after-none" variant="" id="dropdown-basic">
                              <images.UserIcon />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                              {user && (
                                <Dropdown.Item as="div" className="text-center login-user">
                                  <span className="avatar avatar-online">
                                    <img src={profilePic ?? images.userImage} alt="avatar" />
                                  </span>
                                  <span className="user-name fw-semibold">{fullName(user)}</span>
                                </Dropdown.Item>
                              )}
                              <Dropdown.Item as={Link} to="/provider/profile">View Profile</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/provider/my-bank">My Bank</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/provider/order-logs">Order Logs</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/provider/my-posts">My Posts</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/provider/blocked-users">Block Users</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/provider/booking-logs">Bookings Logs</Dropdown.Item>
                              <Dropdown.Item className="logout" onClick={() => setShowModal(true)}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Nav.Item>
                      </>
                    ) : (
                      <>
                        <Nav.Item as="li">
                          <Link to="/wishlist" className="align-self-center"><images.HeartIcon /></Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Link to="/view-cart"><images.CartIcon /></Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Link to="/chat"><images.ChatIcon /></Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <HeaderNotification viewAllLink="/notifications" notificationData={notificationData} getNotification={getNotification} />
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Dropdown className="dropdown-user">
                            <Dropdown.Toggle className="after-none" variant="" id="dropdown-basic">
                              <images.UserIcon />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                              {user && (
                                <Dropdown.Item as="div" className="text-center login-user">
                                  <span className="avatar avatar-online">
                                    <img src={profilePic ?? images.userImage} alt="avatar" />
                                  </span>
                                  <span className="user-name fw-semibold">{fullName(user)}</span>
                                </Dropdown.Item>
                              )}
                              <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/my-posts">My Posts</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/order-logs">My Order Logs</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/bookings">My Bookings</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/blocked-users">Block Users</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/subscriptions">Buy Subscription</Dropdown.Item>
                              <Dropdown.Item as={Link} to="/emergency-contacts">Emergency Contacts</Dropdown.Item>
                              <Dropdown.Item className="logout" onClick={() => setShowModal(true)}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Nav.Item>
                      </>
                    )}
                  </Nav>
                ) : (
                  <Nav as="ul" className="navbar-right flex-grow-1 flex-lg-grow-0 justify-content-end align-items-center">
                    <Nav.Item as="li">
                      <NavLink className="nav-link" to={isProviderPath ? "/provider/signup" : "/signup"}>Sign up</NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link to={isProviderPath ? "/provider/login" : "/login"} className="btn btn-blue">Login</Link>
                    </Nav.Item>
                  </Nav>
                )}

                <Button variant="primary" className="menu-toggle mobile-nav d-lg-none ms-3" onClick={handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </Navbar.Collapse>

          </Container>
        </Navbar>
      </header>

      <Toast />
      <CustomModal
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
        action={() => {
          logout();
          setShowModal(false);
        }}
        heading="Logout?"
        para="Are you sure you want to logout?"
      />
      <CustomModal
        show={loginRequireModal}
        close={() => {
          setLoginRequireModal(false);
        }}
        action={() =>{
          setLoginRequireModal(false);
          navigate(`login`);
        }}
        heading="Login Required"
        para=""
        alert
      />
    </>
  );
};