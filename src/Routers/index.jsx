import { useRoutes } from "react-router-dom";

/* Admin Routes */

import AdminErrorPage from "../Pages/Admin/ErrorPage"

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
import PreventProvider from "./PreventProvider";
import PreventUser from "./PreventUser";
import ProtectedRoutes from "./ProtectedRoutes";

import ServiceProviderManagement from "../Pages/Admin/ServiceProviderManagement/ServiceProviderManagement";
import ServiceProviderDetails from "../Pages/Admin/ServiceProviderManagement/ServiceProviderDetails";
import ServiceProviderServices from "../Pages/Admin/ServiceProviderManagement/ServiceProviderServices";
import ServiceDetails from "../Pages/Admin/ServiceProviderManagement/ServiceDetails";
import UserOrderDetails from "../Pages/Admin/UserManagement/OrderDetail";
import AppointmentLogs from "../Pages/Admin/AppointmentLogs/AppointmentLogs";
import AppointmentDetails from "../Pages/Admin/AppointmentLogs/AppointmentDetails";
import ProductCategoryManagement from "../Pages/Admin/ProductCategoryManagement/ProductCategoryManagement";
import AddProductCategory from "../Pages/Admin/ProductCategoryManagement/AddProductCategory";
import ShopDetails from "../Pages/Admin/ServiceProviderManagement/ShopDetails";
import Product from "../Pages/Admin/Product/Product";
import ServiceProviderRequests from "../Pages/Admin/ServiceProviderManagement/ServiceProviderRequests";
import ServiceProviderProfile from "../Pages/Admin/ServiceProviderManagement/ServiceProviderProfile";
import ServiceCategoryManagement from "../Pages/Admin/ServiceCategoryManagement/ServiceCategoryManagement";
import AddServiceCategory from "../Pages/Admin/ServiceCategoryManagement/AddServiceCategory";
import EditServiceCategory from "../Pages/Admin/ServiceCategoryManagement/EditServiceCategory";
import ViewServiceCategory from "../Pages/Admin/ServiceCategoryManagement/ViewServiceCategory";
import ContentManagement from "../Pages/Admin/ContentManagement/ContentManagement";
import EditProductCategory from "../Pages/Admin/ProductCategoryManagement/EditProductCategory";
import ViewProductCategoryDetail from "../Pages/Admin/ProductCategoryManagement/ViewProductCategoryDetail";
import ViewBlogs from "../Pages/Admin/ContentManagement/Blogs/ViewBlogs";
import CommissionManagement from "../Pages/Admin/CommissionManagement/CommissionManagement";
import ViewArticles from "../Pages/Admin/ContentManagement/Articles/ViewArticles";
import ViewEBooks from "../Pages/Admin/ContentManagement/EBooks/ViewEBooks";
import AddVideo from "../Pages/Admin/ContentManagement/Videos/AddVideo";
import PayoutsManagement from "../Pages/Admin/PayoutsManagement/PayoutsManagement";
import ViewVideo from "../Pages/Admin/ContentManagement/Videos/ViewVideo";
import AddBlog from "../Pages/Admin/ContentManagement/Blogs/AddBlog";
import AddEBook from "../Pages/Admin/ContentManagement/EBooks/AddEBook";
import QueriesManagement from "../Pages/Admin/QueriesManagement/QueriesManagement";
import QueriesDetails from "../Pages/Admin/QueriesManagement/QueriesDetail";
import InAppPurchaseManagement from "../Pages/Admin/In-AppPurchaseManagement/InAppPurchaseManagement";
import InAppPurchaseDetail from "../Pages/Admin/In-AppPurchaseManagement/InAppPurchaseDetail";
import AddInAppPurchase from "../Pages/Admin/In-AppPurchaseManagement/AddInAppPurchase";
import EditInAppPurchase from "../Pages/Admin/In-AppPurchaseManagement/EditInAppPurchase";

import AddArticle from "../Pages/Admin/ContentManagement/Articles/AddArticle";
import EditVideo from "../Pages/Admin/ContentManagement/Videos/EditVideo";
import MyBankDetail from "../Pages/Admin/BankDetail/MyBankDetail";
import AddBankDetail from "../Pages/Admin/BankDetail/AddBankDetail";
import EditBankDetail from "../Pages/Admin/BankDetail/EditBankDetail";
import EditBlog from "../Pages/Admin/ContentManagement/Blogs/EditBlog";
import EditArticle from "../Pages/Admin/ContentManagement/Articles/EditArticle";
import EditEBook from "../Pages/Admin/ContentManagement/EBooks/EditEBook";
import SubscriptionLogs from "../Pages/Admin/SubscriptionLogs/subscriptionLogs";
import EmergencyContactsManagement from "../Pages/Admin/EmergencyContactsManagement/EmergencyContactsManagement";
import AddEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/AddEmergencyContacts";
import EditEmergencyContacts from "../Pages/Admin/EmergencyContactsManagement/EditEmergencyContacts.";
import SubscriptionPlansManagementUser from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementUser";
import SubscriptionPlansManagementProvider from "../Pages/Admin/SubscriptionLogs/SubscriptionPlansManagementProvider";
import AddNewPlanUser from "../Pages/Admin/SubscriptionLogs/AddNewPlanUser";
import AddNewPlanProvider from "../Pages/Admin/SubscriptionLogs/AddNewPlanProvider";
import EditSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanProvider";
import EditSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/EditSubscriptionPlanUser";
import ViewSubscriptionPlanProvider from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanProvider";
import ViewSubscriptionPlanUser from "../Pages/Admin/SubscriptionLogs/ViewSubscriptionPlanUser";
import PaymentLogs from "../Pages/Admin/PaymentLogs/PaymentLogs";
import FAQsManagement from "../Pages/Admin/FAQsManagement/FAQsManagement";
import AddFaqs from "../Pages/Admin/FAQsManagement/AddFaqs";
import ReportsManagement from "../Pages/Admin/ReportsManagement/ReportsManagement";
import ViewReport from "../Pages/Admin/ReportsManagement/ViewReport";
import ReportDetails from "../Pages/Admin/ReportsManagement/ReportDetails";
import EditFaqs from "../Pages/Admin/FAQsManagement/EditFaqs";
import BannerAdsManagement from "../Pages/Admin/BannerAdsManagement/BannerAdsManagement";
import BannerAdDetails from "../Pages/Admin/BannerAdsManagement/BannerAdDetails";
import AddBanner from "../Pages/Admin/BannerAdsManagement/AddBanner";
import EditBanner from "../Pages/Admin/BannerAdsManagement/EditBanner";
import Chat from "../Pages/Admin/Chat/Chat";
import ReportedPost from "../Pages/Admin/ReportsManagement/ReportedPost";
import UserPosts from "../Pages/Admin/UserManagement/UserPosts";
import MainLayout from "../Components/Layouts/UserLayout/MainLayout/index";

/* User Routes */
import Home from "../Pages/User/Home";
import UserForgetPassword from "../Pages/User/Auth/ForgetPassword";
import UserForgetPassword2 from "../Pages/User/Auth/ForgetPassword2";
import UserForgetPassword3 from "../Pages/User/Auth/ForgetPassword3";

import AboutUs from "../Pages/User/AboutUs";
import UserLogin from "../Pages/User/Auth/Login"
import UserSignup from "../Pages/User/Auth/Signup"
import ContactUs from "../Pages/User/ContactUs";
import Services from "../Pages/User/Services";
import ServicesDetails from "../Pages/User/Services/ServiceDetail";
// import ServicesDetails_1 from "../Pages/User/Services/ServiceDetail_1";
import ServicesProvider from "../Pages/User/ServiceProvider";
import EmergencyContacts from "../Pages/User/EmergencyContacts";
import EmergencyContactsAdd from "../Pages/User/EmergencyContacts/Add";
import Subscriptions from "../Pages/User/Subscriptions";
import SubscriptionPayment from "../Pages/User/Subscriptions/SubscriptionPayment";
import SubscriptionLogsUser from "../Pages/User/Subscriptions/SubscriptionLogs";
import Bookings from "../Pages/User/Booking";
import BookingsDetails from "../Pages/User/Booking/BookingDetail";
import InAppPurchase from "../Pages/User/InAppPurchase";
import InAppPurchasePayment from "../Pages/User/InAppPurchase/InAppPurchasePayment";
import UserProfile from "../Pages/User/Profile";
import UserEditProfile from "../Pages/User/Profile/UserEditProfile";
import UserChangePassword from "../Pages/User/Profile/UserChangePassword";
import UserNotifications from "../Pages/User/Notifications";
import Faqs from "../Pages/User/Faqs";
import JoinSession from "../Pages/User/Booking/JoinSession";
import RehabCenter from "../Pages/User/RehabCenter";
import Education from "../Pages/User/Education";
import EducationDetail from "../Pages/User/Education/EducationDetail";
import BlockedUsers from "../Pages/User/BlockedUsers";
import ProductView from "../Pages/User/Shop/ProductView";
import Cart from "../Pages/User/Shop/Cart";
import ServicesReview from "../Pages/User/Services/Review";
import Wishlist from "../Pages/User/Shop/Wishlist";
import Checkout from "../Pages/User/Shop/Checkout";
import CardDetail from "../Pages/User/Shop/cardDetail";
import OrderLogs from "../Pages/User/OrderLogs";
import OrderLogsDetail from "../Pages/User/OrderLogs/OrderLogsDetail";
import ViewMap from "../Pages/User/Booking/ViewMap";
import UserChat from "../Pages/User/Chat/Chat";
import NewsFeed from "../Pages/User/NewsFeed";
import ServicePayment from "../Pages/User/Services/ServicePayment";
import ServiceProviderRequest from "../Pages/User/ServiceProvider/ServiceProviderRequest";
import ServiceProviderPayment from "../Pages/User/ServiceProvider/ServiceProviderPayment";
import ServiceProviderBookServices from "../Pages/User/ServiceProvider/ServiceProviderBookServices";
import ServiceProviderBookView from "../Pages/User/ServiceProvider/ServiceProviderBookView";
import ServiceBook from "../Pages/User/Services/ServiceBook";
import ServiceBookView from "../Pages/User/Services/ServiceBookView";
import MyPosts from "../Pages/User/MyPosts";
import ScrollToTop from "../Components/UserComponents/ScrollToTop";

import ErrorPage from "../Pages/User/ErrorPage";
import ProviderErrorPage from "../Pages/Provider/ErrorPage";
import ProviderProfile from "../Pages/Provider/Profile";
import ProviderEditProfile from "../Pages/Provider/Profile/ProviderEditProfile";
import ProviderChangePassword from "../Pages/Provider/Profile/ProviderChangePassword";

import SelectServices from "../Pages/Provider/SelectServices";
import SelectServicesAdd from "../Pages/Provider/SelectServices/SelectServicesAdd";

import ProviderServices from "../Pages/Provider/Services";
import ProviderServicesDetails from "../Pages/Provider/Services/ServiceDetails";
import ProviderServicesDetailsEdit from "../Pages/Provider/Services/ServicesDetailsEdit";
import ProviderServicesReview from "../Pages/Provider/Services/Review";
import ProviderBookingLogs from "../Pages/Provider/BookingLogs";
import ProviderBookingDetails from "../Pages/Provider/BookingLogs/BookingDetails";
import ProviderBookingRequests from "../Pages/Provider/BookingLogs/bookingRequests";


import ProviderOrderLogs from "../Pages/Provider/OrderLogs";
import ProviderOrderLogsDetail from "../Pages/Provider/OrderLogs/OrderLogsDetail";

import ProviderBlockedUsers from "../Pages/Provider/BlockedUsers";

import ProviderPaymentLogs from "../Pages/Provider/PaymentLogs";
import ProviderMyBank from "../Pages/Provider/MyBank";
import ProviderMyBankAdd from "../Pages/Provider/MyBank/BankAdd";
import ProviderMyBankEdit from "../Pages/Provider/MyBank/BankEdit";

import ProviderUserNotifications from "../Pages/Provider/Notifications";
import ProviderSubscriptions from "../Pages/Provider/Subscriptions";
import ProviderSubscriptionLogs from "../Pages/Provider/Subscriptions/SubscriptionLogs";
import ProviderSubscriptionPayment from "../Pages/Provider/Subscriptions/SubscriptionPayment";

import ProviderShop from "../Pages/Provider/Shop/";
import ProviderShopCreate from "../Pages/Provider/Shop/ShopCreate";
import ProviderShopEdit from "../Pages/Provider/Shop/ShopEdit";

import ProviderProductView from "../Pages/Provider/Shop/ProductView";
import ProviderProductEdit from "../Pages/Provider/Shop/ProductEdit";
import ProviderProductAdd from "../Pages/Provider/Shop/ProductAdd";

import ProviderNewsFeed from "../Pages/Provider/NewsFeed";
import ProviderMyPosts from "../Pages/Provider/MyPosts";

import ProviderChat from "../Pages/Provider/Chat/Chat";
import ProviderSignup from "../Pages/Provider/Auth/Signup";











// import ScrollToTop from "../Components/UserComponents/ScrollToTop";

const roles = {
  admin: "admin",
  user: "user",
  provider: "provider",

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

          // InApp Purchase Management //
          {
            path: "admin/in-app-purchase-management",
            element: <InAppPurchaseManagement />,
          },
          {
            path: "admin/in-app-purchase-management/:id",
            element: <InAppPurchaseDetail />,
          },
          {
            path: "admin/in-app-purchase-management/add-product",
            element: <AddInAppPurchase />,
          },
          {
            path: "admin/in-app-purchase-management/:id/edit",
            element: <EditInAppPurchase />,
          },
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

          // FAQs Management Management //
          { path: "admin/faqs", element: <FAQsManagement /> },
          { path: "admin/faqs/add", element: <AddFaqs /> },
          { path: "admin/faqs/edit", element: <EditFaqs /> },
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
              // { path: "provider", element: <Home /> },
              
              { path: "about-us", element: <AboutUs />, },
              { path: "contact-us", element: <ContactUs /> },  
            ],
          },
          {
            element: <MainLayout showFooter={false} />,
            children: [
              {
                element: <PreventUser />, // Wrap provider routes with PreventProvider
                children: [
                  { path: "signup", element: <UserSignup /> },
                  { path: "login", element: <UserLogin /> },
                  { path: "/forget-password", element: <UserForgetPassword /> },
                  { path: "/forget-password2", element: <UserForgetPassword2 /> },
                  { path: "/forget-password3", element: <UserForgetPassword3 /> },
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
            children:[
              { path: "/profile", element: <UserProfile /> },
              { path: "/edit-profile", element: <UserEditProfile /> },
              { path: "/change-password", element: <UserChangePassword /> },


              { path: "/services", element: <Services /> },
              { path: "/services/:id", element: <ServicesDetails /> },
              { path: "/services/review/:id", element: <ServicesReview /> },
              { path: "/services/payment/:id", element: <ServicePayment /> },
              { path: "/services/book-services", element: <ServiceBook /> },
              { path: "/services/book-services/view-booking", element: <ServiceBookView /> },


              { path: "/services-provider/:id", element: <ServicesProvider /> },
              { path: "/services-provider/request", element: <ServiceProviderRequest /> },
              { path: "/services-provider/payment", element: <ServiceProviderPayment /> },
              { path: "/services-provider/book-services", element: <ServiceProviderBookServices /> },
              { path: "/services-provider/book-services/view-booking", element: <ServiceProviderBookView /> },

              // { path: "/services-pages/", element: <ServicesDetails_1 /> },

              { path: "/emergency-contacts/", element: <EmergencyContacts /> },
              { path: "/emergency-contacts/add", element: <EmergencyContactsAdd /> },

              { path: "/subscriptions", element: <Subscriptions /> },
              { path: "/subscriptions/payment/:id", element: <SubscriptionPayment /> },
              { path: "/subscriptions/subscriptions-logs/", element: <SubscriptionLogsUser /> },
              { path: "/bookings/", element: <Bookings /> },
              { path: "/bookings/:id", element: <BookingsDetails /> },
              { path: "/bookings/join-session/:id", element: <JoinSession /> },
              
              { path: "/in-app-purchase", element: <InAppPurchase /> },
              { path: "/in-app-purchase/payment/:id", element: <InAppPurchasePayment /> },
              { path: "/notifications", element: <UserNotifications /> },
              { path: "/faqs", element: <Faqs /> },
              { path: "/rehab-center", element: <RehabCenter /> },

              { path: "/education", element: <Education /> },
              { path: "/education/:type/:id", element: <EducationDetail /> },
              { path: "/education/:id/:type/:id", element: <EducationDetail /> },

              { path: "/blocked-users", element: <BlockedUsers /> },
              
              { path: "/product-detail/:id", element: <ProductView /> },
              { path: "/wishlist/", element: <Wishlist /> },
              { path: "/view-cart/", element: <Cart /> },
              { path: "/checkout/", element: <Checkout /> },
              { path: "/card-detail/", element: <CardDetail /> },

              { path: "/order-logs/", element: <OrderLogs /> },
              { path: "/order-logs/:id", element: <OrderLogsDetail /> },
              
              { path: "/newsfeed", element: <NewsFeed /> },

              { path: "/chat", element: <UserChat /> },
              { path: "/my-posts", element: <MyPosts /> },

              // { path: "", element: <Home /> },
            ] 
          },
          {
            element: <MainLayout showHeader={false} showFooter={false} />,
            children: [
              { path: "/wiew-map/", element: <ViewMap /> },
            ]
          },
          { path: "*", element: <ErrorPage /> },
        ],
      },

      {
        element: <GuestRoutes provider />,
        children: [
          {
            element: <MainLayout />,
            children: [
              { path: "provider", element: <Home /> },
              { path: "provider/about-us", element: <AboutUs /> },
              { path: "provider/contact-us", element: <ContactUs /> },
              { path: "provider/create-shop", element: <ProviderShopCreate /> }, // will be delet on backend

              // Add more provider specific routes here
            ],
          },
          {
            element: <MainLayout showFooter={false} />,
            children: [
              {
                element: <PreventProvider />, // Wrap provider routes with PreventProvider
                children: [
                  { path: "provider/signup", element: <ProviderSignup /> },
                  { path: "provider/login", element: <UserLogin /> },
                  { path: "provider/forget-password", element: <UserForgetPassword /> },
                  { path: "provider/forget-password2", element: <UserForgetPassword2 /> },
                  { path: "provider/forget-password3", element: <UserForgetPassword3 /> },
                ],
              },
            ],
          },
          { path: "provider/*", element: <ProviderErrorPage /> },
        ],
      },
      {
        element: <ProtectedRoutes provider roles={[roles.provider]} />,
        children:[
          {
            element: <MainLayout />,
            children: [
              { path: "/provider/profile", element: <ProviderProfile /> },
              { path: "/provider/edit-profile", element: <ProviderEditProfile /> },
              { path: "/provider/change-password", element: <ProviderChangePassword /> },

              { path: "/provider/select-services", element: <SelectServices /> },
              { path: "/provider/select-services/add", element: <SelectServicesAdd /> },

              { path: "/provider/my-services", element: <ProviderServices /> },
              { path: "/provider/my-services/:id", element: <ProviderServicesDetails /> },
              { path: "/provider/my-services/:id/edit", element: <ProviderServicesDetailsEdit /> },
              { path: "/provider/my-services/:id/review", element: <ProviderServicesReview /> },

              { path: "/provider/booking-logs", element: <ProviderBookingLogs /> },
              { path: "/provider/booking-logs/requests", element: <ProviderBookingRequests /> },
              { path: "/provider/booking-logs/:id", element: <ProviderBookingDetails /> },

              { path: "/provider/blocked-users", element: <ProviderBlockedUsers /> },

              { path: "/provider/order-logs", element: <ProviderOrderLogs /> },
              { path: "/provider/order-logs/:id", element: <ProviderOrderLogsDetail /> },
              
              { path: "/provider/payment-logs", element: <ProviderPaymentLogs /> },

              { path: "/provider/my-bank", element: <ProviderMyBank /> },
              { path: "/provider/my-bank/add", element: <ProviderMyBankAdd /> },
              { path: "/provider/my-bank/edit", element: <ProviderMyBankEdit /> },

              { path: "/provider/notifications", element: <ProviderUserNotifications /> },
              { path: "/provider/subscription", element: <ProviderSubscriptions /> },
              { path: "/provider/subscription/logs", element: <ProviderSubscriptionLogs /> },
              { path: "/provider/subscription/:id/payment", element: <ProviderSubscriptionPayment /> },

              { path: "provider/my-shop", element: <ProviderShop /> },
              { path: "provider/my-shop/edit", element: <ProviderShopEdit /> },
              { path: "provider/create-shop", element: <ProviderShopCreate /> },

              { path: "provider/my-shop/product/:id", element: <ProviderProductView /> },
              { path: "provider/my-shop/product/:id/edit", element: <ProviderProductEdit /> },
              { path: "provider/add-product", element: <ProviderProductAdd /> },

              { path: "provider/newsfeed", element: <ProviderNewsFeed /> },
              // { path: "provider/newsfeed/:id", element: <ProviderNewsFeedDetails /> },
              { path: "provider/my-posts", element: <ProviderMyPosts /> },
              { path: "provider/chat", element: <ProviderChat /> },


            ]
          },
          { path: "provider/*", element: <ProviderErrorPage /> },
        ]
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
