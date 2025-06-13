import { useRoutes } from "react-router-dom";

/* Admin Routes */

import AdminErrorPage from "../Pages/Admin/ErrorPage";

import ForgetPassword from "../Pages/Admin/Auth/ForgetPassword";
import ForgetPassword2 from "../Pages/Admin/Auth/ForgetPassword2";
import ForgetPassword3 from "../Pages/Admin/Auth/ForgetPassword3";
import AdminLogin from "../Pages/Admin/Auth/Login";
import { Dashboard } from "../Pages/Admin/Dashboard";
import NotificationsAdmin from "../Pages/Admin/Notifications";
import Profile from "../Pages/Admin/Profile";
import ChangePassword from "../Pages/Admin/Profile/ChangePassword";
import EditProfile from "../Pages/Admin/Profile/EditProfile";
import UserManagement from "../Pages/Admin/UserManagement";
import UserDetails from "../Pages/Admin/UserManagement/UserDetails";
import GuestRoutes from "./GuestRoutes";
import PreventAdmin from "./PreventAdmin";
import PreventUser from "./PreventUser";
import ProtectedRoutes from "./ProtectedRoutes";

import AppointmentDetails from "../Pages/Admin/AppointmentLogs/AppointmentDetails";
import AppointmentLogs from "../Pages/Admin/AppointmentLogs/AppointmentLogs";
import CommissionManagement from "../Pages/Admin/CommissionManagement/CommissionManagement";
import ViewArticles from "../Pages/Admin/ContentManagement/Articles/ViewArticles";
import AddBlog from "../Pages/Admin/ContentManagement/Blogs/AddBlog";
import ViewBlogs from "../Pages/Admin/ContentManagement/Blogs/ViewBlogs";
import ContentManagement from "../Pages/Admin/ContentManagement/ContentManagement";
import AddEBook from "../Pages/Admin/ContentManagement/EBooks/AddEBook";
import ViewEBooks from "../Pages/Admin/ContentManagement/EBooks/ViewEBooks";
import AddVideo from "../Pages/Admin/ContentManagement/Videos/AddVideo";
import ViewVideo from "../Pages/Admin/ContentManagement/Videos/ViewVideo";
import PayoutsManagement from "../Pages/Admin/PayoutsManagement/PayoutsManagement";
import Product from "../Pages/Admin/Product/Product";
import AddProductCategory from "../Pages/Admin/ProductCategoryManagement/AddProductCategory";
import EditProductCategory from "../Pages/Admin/ProductCategoryManagement/EditProductCategory";
import ProductCategoryManagement from "../Pages/Admin/ProductCategoryManagement/ProductCategoryManagement";
import ViewProductCategoryDetail from "../Pages/Admin/ProductCategoryManagement/ViewProductCategoryDetail";
import QueriesDetails from "../Pages/Admin/QueriesManagement/QueriesDetail";
import QueriesManagement from "../Pages/Admin/QueriesManagement/QueriesManagement";
import AddServiceCategory from "../Pages/Admin/ServiceCategoryManagement/AddServiceCategory";
import EditServiceCategory from "../Pages/Admin/ServiceCategoryManagement/EditServiceCategory";
import ServiceCategoryManagement from "../Pages/Admin/ServiceCategoryManagement/ServiceCategoryManagement";
import ViewServiceCategory from "../Pages/Admin/ServiceCategoryManagement/ViewServiceCategory";
import ServiceDetails from "../Pages/Admin/ServiceProviderManagement/ServiceDetails";
import ServiceProviderDetails from "../Pages/Admin/ServiceProviderManagement/ServiceProviderDetails";
import ServiceProviderManagement from "../Pages/Admin/ServiceProviderManagement/ServiceProviderManagement";
import ServiceProviderProfile from "../Pages/Admin/ServiceProviderManagement/ServiceProviderProfile";
import ServiceProviderRequests from "../Pages/Admin/ServiceProviderManagement/ServiceProviderRequests";
import ServiceProviderServices from "../Pages/Admin/ServiceProviderManagement/ServiceProviderServices";
import ShopDetails from "../Pages/Admin/ServiceProviderManagement/ShopDetails";
import UserOrderDetails from "../Pages/Admin/UserManagement/OrderDetail";

import MainLayout from "../Components/Layouts/UserLayout/MainLayout/index";
import AddBankDetail from "../Pages/Admin/BankDetail/AddBankDetail";
import EditBankDetail from "../Pages/Admin/BankDetail/EditBankDetail";
import MyBankDetail from "../Pages/Admin/BankDetail/MyBankDetail";
import AddBanner from "../Pages/Admin/BannerAdsManagement/AddBanner";
import BannerAdDetails from "../Pages/Admin/BannerAdsManagement/BannerAdDetails";
import BannerAdsManagement from "../Pages/Admin/BannerAdsManagement/BannerAdsManagement";
import EditBanner from "../Pages/Admin/BannerAdsManagement/EditBanner";
import Chat from "../Pages/Admin/Chat/Chat";
import AddArticle from "../Pages/Admin/ContentManagement/Articles/AddArticle";
import EditArticle from "../Pages/Admin/ContentManagement/Articles/EditArticle";
import EditBlog from "../Pages/Admin/ContentManagement/Blogs/EditBlog";
import EditEBook from "../Pages/Admin/ContentManagement/EBooks/EditEBook";
import EditVideo from "../Pages/Admin/ContentManagement/Videos/EditVideo";
import AddEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/AddEmergencyContacts";
import EditEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/EditEmergencyContacts.";
import EmergencyContactsManagement from "../Pages/Admin/EmergencyContactsManagement/EmergencyContactsManagement";
import PaymentLogs from "../Pages/Admin/PaymentLogs/PaymentLogs";
import ReportDetails from "../Pages/Admin/ReportsManagement/ReportDetails";
import ReportedPost from "../Pages/Admin/ReportsManagement/ReportedPost";
import ReportsManagement from "../Pages/Admin/ReportsManagement/ReportsManagement";
import ViewReport from "../Pages/Admin/ReportsManagement/ViewReport";
import AddNewPlanProvider from "../Pages/Admin/SubscriptionLogs/AddNewPlanProvider";
import AddNewPlanUser from "../Pages/Admin/SubscriptionLogs/AddNewPlanUser";
import EditSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanProvider";
import EditSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanUser";
import SubscriptionPlansManagementProvider from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementProvider";
import SubscriptionPlansManagementUser from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementUser";
import ViewSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanProvider";
import ViewSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanUser";
import SubscriptionLogs from "../Pages/Admin/SubscriptionLogs/subscriptionLogs";
import UserPosts from "../Pages/Admin/UserManagement/UserPosts";

/* User Routes */
import UserForgetPassword from "../Pages/User/Auth/ForgetPassword";
import UserForgetPassword2 from "../Pages/User/Auth/ForgetPassword2";
import UserForgetPassword3 from "../Pages/User/Auth/ForgetPassword3";
import Home from "../Pages/User/Home";

import AboutUs from "../Pages/User/AboutUs";
import UserLogin from "../Pages/User/Auth/Login";
import UserSignup from "../Pages/User/Auth/Signup";
import ContactUs from "../Pages/User/ContactUs";
import Services from "../Pages/User/Services";
import ServicesDetails from "../Pages/User/Services/ServiceDetail";
import ServicesEdit from "../Pages/User/Services/ServicesEdit";
import ScrollToTop from "../Components/UserComponents/ScrollToTop";
import BlockedUsers from "../Pages/User/BlockedUsers";
import UserChat from "../Pages/User/Chat/Chat";
import UserNotifications from "../Pages/User/Notifications";
import UserProfile from "../Pages/User/Profile";
import UserChangePassword from "../Pages/User/Profile/UserChangePassword";
import UserEditProfile from "../Pages/User/Profile/UserEditProfile";

import ServicesReview from "../Pages/User/Services/Review";

import Appointment from "../Pages/User/Appointment";
import AppointmentsDetails from "../Pages/User/Appointment/AppointmentDetails";
import JoinSession from "../Pages/User/Appointment/JoinSession";
import VoiceCall from "../Pages/User/Appointment/VoiceCall";
import PersonalDetails from "../Pages/User/Auth/PersonalDetails";
import UserChatAnnouncement from "../Pages/User/Chat/Announcement";
import UserChatContactUs from "../Pages/User/Chat/ChatContactUs";
import UserChatReports from "../Pages/User/Chat/ChatReports";
import ErrorPage from "../Pages/User/ErrorPage";
import FinalQuiz from "../Pages/User/FinalQuiz";
import MeetingWithAdmin from "../Pages/User/MeetingWithAdmin/MeetingWithAdmin";
import PaymentLogsUser from "../Pages/User/PaymentLogsUser";
import RatingsAndReviews from "../Pages/User/RatingAndReviews";
import RuleRegulations from "../Pages/User/Rules&Regulations";
import SlotManagement from "../Pages/User/SlotManagement";
import NewSlot from "../Pages/User/SlotManagement/NewSlot";
import EditSlot from "../Pages/User/SlotManagement/EditSlot";
import SlotDetails from "../Pages/User/SlotManagement/SlotDetails";
import SlotsHistoryManagement from "../Pages/User/SlotManagement/history";
import Tutorials from "../Pages/User/Tutorials";
import VideoVerification from "../Pages/User/VideoVerification";
import WithDrawAmount from "../Pages/User/WithDraw";
// import SlotManagement from "../Pages/User/SlotManagement";
import BankDetailsUser from "../Pages/User/BankDetailsUser/BankDetailsUser";
import BankDetailsUserAdd from "../Pages/User/BankDetailsUser/BankDetailsUserAdd";
import BankDetailsUserEdit from "../Pages/User/BankDetailsUser/BankDetailsUserEdit";
import ChatReportDetails from "../Pages/User/Chat/ReportDetails";
import NewServices from "../Pages/User/NewServices";
import NewServicesAdd from "../Pages/User/NewServices/ServicesAdd";
import ScreeningHome from "../Pages/User/ScreeningHome/HomeAfterSignUp";

// import ScrollToTop from "../Components/UserComponents/ScrollToTop";

const roles = {
  admin: "admin",
  user: "user",
};

// Refactor code - Change layout implementation
const routes = [
  {
    path: "/",
    element: <ScrollToTop />,
    children: [
      {
        element: <GuestRoutes admin />,
        children: [
          { path: "admin", element: <AdminLogin /> },
          { path: "admin/login", element: <AdminLogin /> },
          { path: "admin/forget-password", element: <ForgetPassword /> },
          { path: "admin/forget-password2", element: <ForgetPassword2 /> },
          { path: "admin/forget-password3", element: <ForgetPassword3 /> },
          { path: "admin/*", element: <PreventAdmin /> },
        ],
      },
      {
        element: <ProtectedRoutes admin roles={[roles.admin]} />,
        children: [
          { path: "admin/*", element: <PreventAdmin /> },
          { path: "admin/dashboard", element: <Dashboard /> },
          { path: "admin/profile", element: <Profile /> },
          { path: "admin/edit-profile", element: <EditProfile /> },
          { path: "admin/change-password", element: <ChangePassword /> },

          // User Mangement //
          { path: "admin/user-management", element: <UserManagement /> },
          { path: "admin/user-management/:id", element: <UserDetails /> },
          {
            path: "admin/user-management/:id/order/:orderid",
            element: <UserOrderDetails />,
          },
          { path: "/admin/order/:orderid", element: <UserOrderDetails /> },
          { path: "admin/posts", element: <UserPosts /> },
          // --- End --- //

          // Service Provider Mangement //
          {
            path: "admin/service-provider-management",
            element: <ServiceProviderManagement />,
          },
          {
            path: "admin/service-provider-management/requests",
            element: <ServiceProviderRequests />,
          },
          {
            path: "admin/service-provider-management/requests/:id",
            element: <ServiceProviderProfile />,
          },
          {
            path: "admin/service-provider-management/:id",
            element: <ServiceProviderDetails />,
          },
          {
            path: "admin/service-provider-management/:id/shop",
            element: <ShopDetails />,
          },
          {
            path: "admin/service-provider-management/:id/services",
            element: <ServiceProviderServices />,
          },
          {
            path: "admin/service-provider-management/:id/services/:serviceId",
            element: <ServiceDetails />,
          },
          // --- End --- //

          // Service Category Mangement //
          {
            path: "admin/service-category-management",
            element: <ServiceCategoryManagement />,
          },
          {
            path: "admin/service-category-management/add",
            element: <AddServiceCategory />,
          },
          {
            path: "admin/service-category-management/:id",
            element: <ViewServiceCategory />,
          },
          {
            path: "admin/service-category-management/:id/edit",
            element: <EditServiceCategory />,
          },
          // --- End --- //
          { path: "admin/products/:productId", element: <Product /> },

          // Content Mangement //
          { path: "admin/content-management", element: <ContentManagement /> },
          {
            path: "admin/content-management/blogs/:id",
            element: <ViewBlogs />,
          },
          {
            path: "admin/content-management/articles/:id",
            element: <ViewArticles />,
          },
          {
            path: "admin/content-management/videos/:id",
            element: <ViewVideo />,
          },
          {
            path: "admin/content-management/e-books/:id",
            element: <ViewEBooks />,
          },
          { path: "admin/content-management/add-video", element: <AddVideo /> },
          { path: "admin/content-management/add-blog", element: <AddBlog /> },
          {
            path: "admin/content-management/add-article",
            element: <AddArticle />,
          },
          {
            path: "admin/content-management/add-e-book",
            element: <AddEBook />,
          },
          {
            path: "admin/content-management/videos/:id/edit",
            element: <EditVideo />,
          },
          {
            path: "admin/content-management/blogs/:id/edit",
            element: <EditBlog />,
          },
          {
            path: "admin/content-management/articles/:id/edit",
            element: <EditArticle />,
          },
          {
            path: "admin/content-management/e-books/:id/edit",
            element: <EditEBook />,
          },
          // --- End --- //

          // Appointments //
          { path: "admin/appointments", element: <AppointmentLogs /> },
          { path: "admin/appointments/:id", element: <AppointmentDetails /> },
          // --- End --- //

          // Product Category Management //
          {
            path: "admin/product-category-management",
            element: <ProductCategoryManagement />,
          },
          {
            path: "admin/product-category-management/add-product",
            element: <AddProductCategory />,
          },
          {
            path: "admin/product-category-management/:id",
            element: <ViewProductCategoryDetail />,
          },
          {
            path: "admin/product-category-management/:id/edit",
            element: <EditProductCategory />,
          },
          // --- End --- //

          // Subscription Logs //
          { path: "admin/subscription-logs", element: <SubscriptionLogs /> },
          {
            path: "admin/subscription-logs/user/management",
            element: <SubscriptionPlansManagementUser />,
          },
          {
            path: "admin/subscription-logs/user/management/add-plan",
            element: <AddNewPlanUser />,
          },
          {
            path: "admin/subscription-logs/user/management/:id/edit",
            element: <EditSubscriptionPlanUser />,
          },
          {
            path: "admin/subscription-logs/user/management/:id",
            element: <ViewSubscriptionPlanUser />,
          },
          {
            path: "admin/subscription-logs/provider/management",
            element: <SubscriptionPlansManagementProvider />,
          },
          {
            path: "admin/subscription-logs/provider/management/add-plan",
            element: <AddNewPlanProvider />,
          },
          {
            path: "admin/subscription-logs/provider/management/:id",
            element: <ViewSubscriptionPlanProvider />,
          },
          {
            path: "admin/subscription-logs/provider/management/:id/edit",
            element: <EditSubscriptionPlanProvider />,
          },
          // --- End --- //

          // Queries Management //
          { path: "admin/queries-management", element: <QueriesManagement /> },
          { path: "admin/queries-management/:id", element: <QueriesDetails /> },
          // --- End --- //

          // Payment Logs //
          { path: "admin/payment-logs", element: <PaymentLogs /> },
          // --- End --- //

          // Reports Management //
          { path: "admin/reports-management", element: <ReportsManagement /> },
          {
            path: "admin/reports-management/view-report/:id",
            element: <ViewReport />,
          },
          {
            path: "admin/reports-management/report/:id",
            element: <ReportDetails />,
          },
          {
            path: "admin/reports-management/report/:id/post",
            element: <ReportedPost />,
          },
          // --- End --- //

          // Payment Logs //
          { path: "admin/banner-ads", element: <BannerAdsManagement /> },
          { path: "admin/banner-ads/:id", element: <BannerAdDetails /> },
          { path: "admin/banner-ads/:id/edit", element: <EditBanner /> },
          { path: "admin/banner-ads/add", element: <AddBanner /> },
          // --- End --- //

          // Bank Details //
          { path: "admin/mybank-detail", element: <MyBankDetail /> },
          { path: "admin/add-bank-details", element: <AddBankDetail /> },
          { path: "admin/mybank-detail/edit", element: <EditBankDetail /> },
          // --- End --- //

          // Emergency Contact Management //
          {
            path: "admin/emergency-contact-management",
            element: <EmergencyContactsManagement />,
          },
          {
            path: "admin/emergency-contact-management/add",
            element: <AddEmergencyContacts />,
          },
          {
            path: "admin/emergency-contact-management/:id/edit",
            element: <EditEmergencyContacts />,
          },
          // --- End --- //

          { path: "admin/notifications", element: <NotificationsAdmin /> },
          {
            path: "admin/commission-management",
            element: <CommissionManagement />,
          },
          { path: "admin/chat", element: <Chat /> },
          { path: "admin/payout-management", element: <PayoutsManagement /> },
          { path: "admin/*", element: <AdminErrorPage /> },
        ],
      },
      {
        element: <GuestRoutes user />,
        children: [
          {
            element: <MainLayout />,
            children: [
              { path: "", element: <Home /> },
              { path: "about-us", element: <AboutUs /> },
              { path: "contact-us", element: <ContactUs /> },
            ],
          },
          {
            element: <MainLayout />,
            children: [
              {
                element: <PreventUser />, // Wrap provider routes with PreventProvider
                children: [
                  { path: "/signup", element: <UserSignup /> },
                  { path: "/personal-details", element: <PersonalDetails /> },
                  { path: "/screening", element: <ScreeningHome /> },
                  {
                    path: "/video-verification",
                    element: <VideoVerification />,
                  },
                  { path: "/meeting-admin", element: <MeetingWithAdmin /> },
                  { path: "/rules-regulations", element: <RuleRegulations /> },
                  { path: "/tutorials", element: <Tutorials /> },
                  { path: "/final-quiz", element: <FinalQuiz /> },
                  { path: "/login", element: <UserLogin /> },
                  { path: "/forget-password", element: <UserForgetPassword /> },
                  {
                    path: "/forget-password2",
                    element: <UserForgetPassword2 />,
                  },
                  {
                    path: "/forget-password3",
                    element: <UserForgetPassword3 />,
                  },
                ],
              },
            ],
          },
          { path: "*", element: <ErrorPage /> },
        ],
      },
      {
        element: <ProtectedRoutes user roles={[roles.user]} />,
        children: [
          // { path: "/", element: <Home /> },
          {
            element: <MainLayout />,
            children: [
              { path: "/appointments/", element: <Appointment /> },
              { path: "/appointments/:id", element: <AppointmentsDetails /> },
              { path: "/video-call", element: <JoinSession /> },
              { path: "/call", element: <VoiceCall /> },
              { path: "/payment-logs-user", element: <PaymentLogsUser /> },
              { path: "/rating-reviews", element: <RatingsAndReviews /> },

              { path: "/profile", element: <UserProfile /> },
              { path: "/edit-profile", element: <UserEditProfile /> },
              { path: "/change-password", element: <UserChangePassword /> },
              { path: "/withdraw-amount", element: <WithDrawAmount /> },

              { path: "/services", element: <Services /> },
              { path: "/services/:id", element: <ServicesDetails /> },
              { path: "/services/:id/edit", element: <ServicesEdit /> },
              { path: "/services/review/:id", element: <ServicesReview /> },

              { path: "/new-services", element: <NewServices /> },
              { path: "/new-services/add", element: <NewServicesAdd /> },
              { path: "/bank-details", element: <BankDetailsUser /> },
              { path: "/bank-details-add", element: <BankDetailsUserAdd /> },
              { path: "/bank-details-edit", element: <BankDetailsUserEdit /> },

              { path: "/notifications", element: <UserNotifications /> },

              { path: "/blocked-users", element: <BlockedUsers /> },

              { path: "/chat", element: <UserChat /> },
              { path: "/chat-announcement", element: <UserChatAnnouncement /> },
              { path: "/chat-contact-us", element: <UserChatContactUs /> },
              { path: "/chat-reports", element: <UserChatReports /> },

              { path: "/slot-management", element: <SlotManagement /> },
              { path: "/slot-management/add", element: <NewSlot /> },
              { path: "/slot-management/:id/edit", element: <EditSlot /> },
              {
                path: "/slot-management/history/:id",
                element: <SlotsHistoryManagement />,
              },
              {
                path: "/slot-management/details/:id",
                element: <SlotDetails />,
              },
              { path: "/chat-report-details", element: <ChatReportDetails /> },

              // { path: "", element: <Home /> },
            ],
          },
          { path: "*", element: <ErrorPage /> },
        ],
      },
      {
        path: "*",
        element: <h2>404</h2>,
        // element: <GlobalErrorPage />,
      },
    ],
  },
];

const Routers = () => {
  const element = useRoutes(routes);
  return element;
};

export default Routers;
