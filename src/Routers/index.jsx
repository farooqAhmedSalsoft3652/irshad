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

import ConsultantManagement from "../Pages/Admin/ConsultantManagement/index";
import ConsultantDetails from "../Pages/Admin/ConsultantManagement/ConsultantDetails";
import ConsultantBookingDetails from "../Pages/Admin/ConsultantManagement/ConsultantBookingDetails";
import ConsultantServices from "../Pages/Admin/ConsultantManagement/Services/ConsultantServices";
import ConsultantServicesDetails from "../Pages/Admin/ConsultantManagement/Services/ConsultantServicesDetails";
import ConsultantServiceBookingDetails from "../Pages/Admin/ConsultantManagement/Services/ConsultantServiceBookingDetails";
import ConsultantRequests from "../Pages/Admin/ConsultantManagement/Requests/ConsultantRequests";
import ConsultantProfile from "../Pages/Admin/ConsultantManagement/Requests/ConsultantProfile";
import SetConsultantProfile from "../Pages/Admin/ConsultantManagement/SetConsultantProfile";
import ShowReport from "../Pages/Admin/ConsultantManagement/ShowReport";

import ConsultantScreening from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreening";
import ConsultantScreeningMeetingDetails from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreeningMeetingDetails";
import ConsultantScreeningSession from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreeningSession";
import ConsultantMeetingDocument from "../Pages/Admin/ConsultantManagement/Screening/ConsultantMeetingDocument";

import ScreeningCategory from "../Pages/Admin/ConsultantManagement/Screening/ScreeningCategory";
import TutorialAdd from "../Pages/Admin/ConsultantManagement/Screening/TutorialAdd";
import TutorialEdit from "../Pages/Admin/ConsultantManagement/Screening/TutorialEdit";
import ScreeningFinalReport from "../Pages/Admin/ConsultantManagement/Screening/ScreeningFinalReport";
import ConsultantScreeningDetails from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreeningDetails";
import ConsultantScreeningProfile from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreeningProfile";
import ConsultantScreeningVideo from "../Pages/Admin/ConsultantManagement/Screening/ConsultantScreeningVideo";
import VideoVerificationQuizAdd from "../Pages/Admin/ConsultantManagement/Screening/VideoVerificationQuizAdd";
import VideoVerificationQuizEdit from "../Pages/Admin/ConsultantManagement/Screening/VideoVerificationQuizEdit";
import VideoVerificationQuizView from "../Pages/Admin/ConsultantManagement/Screening/VideoVerificationQuizView";
import CategoryLinks from "../Pages/Admin/ConsultantManagement/Screening/CategoryLinks";

// import ContentManagement from "../Pages/Admin/ContentManagement/ContentManagement";
import PayoutsManagement from "../Pages/Admin/PayoutsManagement/PayoutsManagement";
import QueriesManagement from "../Pages/Admin/QueriesManagement/QueriesManagement";
// import ConsultantManagement from "../Pages/Admin/ConsultantManagement/index";

// import ShopDetails from "../Pages/Admin/ConsultantManagement/ShopDetails";
import UserOrderDetails from "../Pages/Admin/UserManagement/OrderDetail";

import MainLayout from "../Components/Layouts/UserLayout/MainLayout/index";
import AddBankDetail from "../Pages/Admin/BankDetail/AddBankDetail";
import EditBankDetail from "../Pages/Admin/BankDetail/EditBankDetail";
import MyBankDetail from "../Pages/Admin/BankDetail/MyBankDetail";
import Chat from "../Pages/Admin/Chat/Chat";
// import AddArticle from "../Pages/Admin/ContentManagement/Articles/AddArticle";
// import EditArticle from "../Pages/Admin/ContentManagement/Articles/EditArticle";
// import EditBlog from "../Pages/Admin/ContentManagement/Blogs/EditBlog";
// import EditEBook from "../Pages/Admin/ContentManagement/EBooks/EditEBook";
// import EditVideo from "../Pages/Admin/ContentManagement/Videos/EditVideo";
// import AddEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/AddEmergencyContacts";
// import EditEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/EditEmergencyContacts.";
// import EmergencyContactsManagement from "../Pages/Admin/EmergencyContactsManagement/EmergencyContactsManagement";
import PaymentLogs from "../Pages/Admin/PaymentLogs/PaymentLogs";
import ReportsManagement from "../Pages/Admin/ReportsManagement/ReportsManagement";
// import AddNewPlanProvider from "../Pages/Admin/SubscriptionLogs/AddNewPlanProvider";
// import AddNewPlanUser from "../Pages/Admin/SubscriptionLogs/AddNewPlanUser";
// import EditSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanProvider";
// import EditSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanUser";
// import SubscriptionPlansManagementProvider from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementProvider";
// import SubscriptionPlansManagementUser from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementUser";
// import ViewSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanProvider";
// import ViewSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanUser";
// import SubscriptionLogs from "../Pages/Admin/SubscriptionLogs/subscriptionLogs";
import UserPosts from "../Pages/Admin/UserManagement/UserPosts";

/* User Routes */
import UserForgetPassword from "../Pages/User/Auth/ForgetPassword";
import UserForgetPassword2 from "../Pages/User/Auth/ForgetPassword2";
import UserForgetPassword3 from "../Pages/User/Auth/ForgetPassword3";
import Home from "../Pages/User/Home";

import ScrollToTop from "../Components/UserComponents/ScrollToTop";
import AboutUs from "../Pages/User/AboutUs";
import UserLogin from "../Pages/User/Auth/Login";
import UserSignup from "../Pages/User/Auth/Signup";
import BlockedUsers from "../Pages/User/BlockedUsers";
import UserChat from "../Pages/User/Chat/Chat";
import ContactUs from "../Pages/User/ContactUs";
import UserNotifications from "../Pages/User/Notifications";
import UserProfile from "../Pages/User/Profile";
import UserChangePassword from "../Pages/User/Profile/UserChangePassword";
import UserEditProfile from "../Pages/User/Profile/UserEditProfile";
import Services from "../Pages/User/Services";
import ServicesDetails from "../Pages/User/Services/ServiceDetail";
import ServicesEdit from "../Pages/User/Services/ServicesEdit";

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
import EditSlot from "../Pages/User/SlotManagement/EditSlot";
import NewSlot from "../Pages/User/SlotManagement/NewSlot";
import SlotDetails from "../Pages/User/SlotManagement/SlotDetails";
import SlotsHistoryManagement from "../Pages/User/SlotManagement/history";
import Tutorials from "../Pages/User/Tutorials";
import VideoVerification from "../Pages/User/VideoVerification";
import WithDrawAmount from "../Pages/User/WithDraw";
// import SlotManagement from "../Pages/User/SlotManagement";
import AddNewBanner from "../Pages/Admin/BannerManagement/AddNewBanner";
import BannerManagement from "../Pages/Admin/BannerManagement/BannerManagement";
import EditNewBanner from "../Pages/Admin/BannerManagement/EditNewBanner";
import NewBannerDetail from "../Pages/Admin/BannerManagement/NewBannerDetail";
import CancellationPenaltyManagement from "../Pages/Admin/CancellationPenaltyManagement/CancellationPenaltyManagement";
import CancellationTimeManagement from "../Pages/Admin/CancellationPenaltyManagement/CancellationTimeManagement";
import FAQs from "../Pages/Admin/FAQs";
import PromoCodeManagement from "../Pages/Admin/PromoCodeManagement/PromoCodeManagement";
import QueryComplainDetails from "../Pages/Admin/QueriesManagement/QueryComplainDetails";
import QueryContactUsDetails from "../Pages/Admin/QueriesManagement/QueryContactUsDetails";
import QueryQuestionDetails from "../Pages/Admin/QueriesManagement/QueryQuestionDetails";
import QueryReportDetails from "../Pages/Admin/QueriesManagement/QueryReportDetails";
import ReportsDetail from "../Pages/Admin/ReportsManagement/ReportsDetail";
import RequestManagement from "../Pages/Admin/RequestManagement/RequestManagement";
import RequestDetails from "../Pages/Admin/RequestManagement/RequetsDetail";
import AddService from "../Pages/Admin/ServiceManagement/AddService";
import EditServiceManagement from "../Pages/Admin/ServiceManagement/EditServiceManagement";
import ServiceManagement from "../Pages/Admin/ServiceManagement/ServiceManagement";
import ViewServiceDetail from "../Pages/Admin/ServiceManagement/ViewServiceDetail";
import AddSubCategory from "../Pages/Admin/SubCategoryManagement/AddSubCategory";
import EditSubCategory from "../Pages/Admin/SubCategoryManagement/EditSubCategory";
import SubCategoryManagement from "../Pages/Admin/SubCategoryManagement/SubCategoryManagement";
import ViewSubCategory from "../Pages/Admin/SubCategoryManagement/ViewSubCategory";
import BankDetailsUser from "../Pages/User/BankDetailsUser/BankDetailsUser";
import BankDetailsUserAdd from "../Pages/User/BankDetailsUser/BankDetailsUserAdd";
import BankDetailsUserEdit from "../Pages/User/BankDetailsUser/BankDetailsUserEdit";
import ChatReportDetails from "../Pages/User/Chat/ReportDetails";
import NewServices from "../Pages/User/NewServices";
import NewServicesAdd from "../Pages/User/NewServices/ServicesAdd";
import ScreeningHome from "../Pages/User/ScreeningHome/index";
import FaqAdd from "../Pages/Admin/FAQs/FaqAdd";
import FaqEdit from "../Pages/Admin/FAQs/FaqEdit";
import AppReport from "../Pages/Admin/Dashboard/AppReport";

import RulesRegulationsAdd from "../Pages/Admin/ConsultantManagement/Screening/RulesRegulationsAdd";
import RulesRegulationsView from "../Pages/Admin/ConsultantManagement/Screening/RulesRegulationsView";
import RulesRegulationsEdit from "../Pages/Admin/ConsultantManagement/Screening/RulesRegulationsEdit";
import FinalQuizAdd from "../Pages/Admin/ConsultantManagement/Screening/FinalQuizAdd";
import FinalQuizView from "../Pages/Admin/ConsultantManagement/Screening/FinalQuizView";
import FinalQuizEdit from "../Pages/Admin/ConsultantManagement/Screening/FinalQuizEdit";

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
          { path: "admin/dashboard/app-report", element: <AppReport /> },
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

          // Consultant Mangement //
          {
            path: "admin/consultant-management",
            element: <ConsultantManagement />,
          },
          {
            path: "admin/consultant-management/category-links",
            element: <CategoryLinks />,
          },
          {
            path: "admin/consultant-management/category",
            element: <ScreeningCategory />,
          },
          {
            path: "admin/consultant-management/add-rules",
            element: <RulesRegulationsAdd />,
          },
          {
            path: "admin/consultant-management/view-rules",
            element: <RulesRegulationsView />,
          },
          {
            path: "admin/consultant-management/edit-rules/:id",
            element: <RulesRegulationsEdit />,
          },
          {
            path: "admin/consultant-management/add-final-quiz",
            element: <FinalQuizAdd />,
          },
          {
            path: "admin/consultant-management/view-final-quiz",
            element: <FinalQuizView />,
          },
          {
            path: "admin/consultant-management/edit-final-quiz/:id",
            element: <FinalQuizEdit />,
          },
          {
            path: "admin/consultant-management/details/:id",
            element: <ConsultantDetails />,
          },
          {
            path: "admin/consultant-management/:id/booking-logs",
            element: <ConsultantBookingDetails />,
          },
          {
            path: "admin/consultant-management/:id/services",
            element: <ConsultantServices />,
          },
          {
            path: "admin/consultant-management/:id/services/:serviceId",
            element: <ConsultantServicesDetails />,
          },

          {
            path: "admin/consultant-management/:id/services/:serviceId/booking-logs",
            element: <ConsultantServiceBookingDetails />,
          },
          {
            path: "admin/consultant-management/requests",
            element: <ConsultantRequests />,
          },
          {
            path: "admin/consultant-management/requests/:id",
            element: <ConsultantProfile />,
          },
          {
            path: "admin/consultant-management/:id/set-consultant-profile",
            element: <SetConsultantProfile />,
          },
          {
            path: "admin/consultant-management/:id/show-report",
            element: <ShowReport />,
          },
          {
            path: "admin/consultant-management/consultant-screening",
            element: <ConsultantScreening />,
          },
          {
            path: "admin/consultant-management/consultant-screening/:id",
            element: <ConsultantScreeningMeetingDetails />,
          },
          {
            path: "admin/consultant-management/consultant-screening/:id/meeting",
            element: <ConsultantScreeningSession />,
          },
          {
            path: "admin/consultant-management/consultant-meeting-document",
            element: <ConsultantMeetingDocument />,
          },
          {
            path: "admin/consultant-management/add-tutorial",
            element: <TutorialAdd />,
          },
          {
            path: "admin/consultant-management/edit-tutorial",
            element: <TutorialEdit />,
          },
          {
            path: "admin/consultant-management/final-report",
            element: <ScreeningFinalReport />,
          },
          {
            path: "admin/consultant-management/final-report/:id",
            element: <ConsultantScreeningDetails />,
          },
          {
            path: "admin/consultant-management/final-report/:id/profile",
            element: <ConsultantScreeningProfile />,
          },
          {
            path: "admin/consultant-management/final-report/:id/video",
            element: <ConsultantScreeningVideo />,
          },
          {
            path: "admin/consultant-management/add-quiz",
            element: <VideoVerificationQuizAdd />,
          },
          {
            path: "admin/consultant-management/view-quiz",
            element: <VideoVerificationQuizView />,
          },
          {
            path: "admin/consultant-management/edit-quiz/:id",
            element: <VideoVerificationQuizEdit />,
          },

          // {
          //   path: "admin/service-provider-management/:id/shop",
          //   element: <ShopDetails />,
          // },
          // {
          //   path: "admin/service-provider-management/:id/services",
          //   element: <ServiceProviderServices />,
          // },
          // --- End --- //

          // Sub Category Mangement //
          {
            path: "admin/sub-category-management",
            element: <SubCategoryManagement />,
          },
          {
            path: "admin/sub-category-management/add",
            element: <AddSubCategory />,
          },
          {
            path: "admin/sub-category-management/:id",
            element: <ViewSubCategory />,
          },
          {
            path: "admin/sub-category-management/:id/edit",
            element: <EditSubCategory />,
          },
          // --- End --- //

          // { path: "admin/products/:productId", element: <Product /> },

          // Content Mangement //
          // { path: "admin/content-management", element: <ContentManagement /> },
          // {
          //   path: "admin/content-management/blogs/:id",
          //   element: <ViewBlogs />,
          // },
          // {
          //   path: "admin/content-management/articles/:id",
          //   element: <ViewArticles />,
          // },
          // {
          //   path: "admin/content-management/videos/:id",
          //   element: <ViewVideo />,
          // },
          // {
          //   path: "admin/content-management/e-books/:id",
          //   element: <ViewEBooks />,
          // },
          // { path: "admin/content-management/add-video", element: <AddVideo /> },
          // { path: "admin/content-management/add-blog", element: <AddBlog /> },
          // {
          //   path: "admin/content-management/add-article",
          //   element: <AddArticle />,
          // },
          // {
          //   path: "admin/content-management/add-e-book",
          //   element: <AddEBook />,
          // },
          // {
          //   path: "admin/content-management/videos/:id/edit",
          //   element: <EditVideo />,
          // },
          // {
          //   path: "admin/content-management/blogs/:id/edit",
          //   element: <EditBlog />,
          // },
          // {
          //   path: "admin/content-management/articles/:id/edit",
          //   element: <EditArticle />,
          // },
          // {
          //   path: "admin/content-management/e-books/:id/edit",
          //   element: <EditEBook />,
          // },
          // --- End --- //

          // Appointments //
          { path: "admin/appointments", element: <AppointmentLogs /> },
          { path: "admin/appointments/:id", element: <AppointmentDetails /> },
          // --- End --- //

          // Service Management //
          {
            path: "admin/service-management",
            element: <ServiceManagement />,
          },
          {
            path: "admin/service-management/add-service",
            element: <AddService />,
          },
          {
            path: "admin/service-management/:id",
            element: <ViewServiceDetail />,
          },
          {
            path: "admin/service-management/:id/edit",
            element: <EditServiceManagement />,
          },
          // --- End --- //

          // Subscription Logs //
          // { path: "admin/subscription-logs", element: <SubscriptionLogs /> },
          // {
          //   path: "admin/subscription-logs/user/management",
          //   element: <SubscriptionPlansManagementUser />,
          // },
          // {
          //   path: "admin/subscription-logs/user/management/add-plan",
          //   element: <AddNewPlanUser />,
          // },
          // {
          //   path: "admin/subscription-logs/user/management/:id/edit",
          //   element: <EditSubscriptionPlanUser />,
          // },
          // {
          //   path: "admin/subscription-logs/user/management/:id",
          //   element: <ViewSubscriptionPlanUser />,
          // },
          // {
          //   path: "admin/subscription-logs/provider/management",
          //   element: <SubscriptionPlansManagementProvider />,
          // },
          // {
          //   path: "admin/subscription-logs/provider/management/add-plan",
          //   element: <AddNewPlanProvider />,
          // },
          // {
          //   path: "admin/subscription-logs/provider/management/:id",
          //   element: <ViewSubscriptionPlanProvider />,
          // },
          // {
          //   path: "admin/subscription-logs/provider/management/:id/edit",
          //   element: <EditSubscriptionPlanProvider />,
          // },
          // --- End --- //

          // Queries Management //
          { path: "admin/queries-management", element: <QueriesManagement /> },
          {
            path: "admin/queries-management/contact-us/:id",
            element: <QueryContactUsDetails />,
          },
          {
            path: "admin/queries-management/complain/:id",
            element: <QueryComplainDetails />,
          },
          {
            path: "admin/queries-management/report/:id",
            element: <QueryReportDetails />,
          },
          {
            path: "admin/queries-management/question/:id",
            element: <QueryQuestionDetails />,
          },
          // --- End --- //

          // Payment Logs //
          { path: "admin/payment-logs", element: <PaymentLogs /> },
          // --- End --- //

          // Promo Code Management //
          { path: "admin/promo-code", element: <PromoCodeManagement /> },
          // --- End --- //
          // Banner Management //
          { path: "admin/banner-management", element: <BannerManagement /> },
          {
            path: "admin/banner-management/add-new",
            element: <AddNewBanner />,
          },
          {
            path: "admin/banner-management/:id/edit",
            element: <EditNewBanner />,
          },
          { path: "admin/banner-management/:id", element: <NewBannerDetail /> },
          // --- End --- //
          // Request Management //
          { path: "admin/request-management", element: <RequestManagement /> },
          { path: "admin/request-management/:id", element: <RequestDetails /> },
          // --- End --- //

          // Reports Management //
          { path: "admin/reports-management", element: <ReportsManagement /> },
          {
            path: "admin/reports-management/:id",
            element: <ReportsDetail />,
          },
          // --- End --- //

          // Payment Logs //
          { path: "admin/payment-logs", element: <PaymentLogs /> },
          // --- End --- //

          // Bank Details //
          { path: "admin/mybank-detail", element: <MyBankDetail /> },
          { path: "admin/add-bank-details", element: <AddBankDetail /> },
          { path: "admin/mybank-detail/edit", element: <EditBankDetail /> },
          // --- End --- //
          // FAQs management //
          { path: "admin/faqs", element: <FAQs /> },
          { path: "admin/faq-management/add-faq", element: <FaqAdd /> },
          { path: "admin/faq-management/edit-faq/:id", element: <FaqEdit /> },
          // --- End --- //

          // Emergency Contact Management //
          // {
          //   path: "admin/emergency-contact-management",
          //   element: <EmergencyContactsManagement />,
          // },
          // {
          //   path: "admin/emergency-contact-management/add",
          //   element: <AddEmergencyContacts />,
          // },
          // {
          //   path: "admin/emergency-contact-management/:id/edit",
          //   element: <EditEmergencyContacts />,
          // },
          // --- End --- //

          { path: "admin/notifications", element: <NotificationsAdmin /> },
          {
            path: "admin/commission-management",
            element: <CommissionManagement />,
          },
          { path: "admin/chat", element: <Chat /> },
          { path: "admin/payout-management", element: <PayoutsManagement /> },
          {
            path: "admin/cancel-penalty-management",
            element: <CancellationPenaltyManagement />,
          },
          {
            path: "admin/cancel-penalty-management/cancel-time-management",
            element: <CancellationTimeManagement />,
          },
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
