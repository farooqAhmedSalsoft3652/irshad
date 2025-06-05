import { images } from "../Assets";
import Stats1 from "../Assets/images/svg/stats1.svg?react";
import Stats2 from "../Assets/images/svg/stats2.svg?react";
import Stats3 from "../Assets/images/svg/stats3.svg?react";
import Stats4 from "../Assets/images/svg/stats4.svg?react";
import { getImageAsFile } from "../Utils/helper";

export const notificationsData = {
  status: true,
  message: "user notifications",
  detail: {
    notifications: {
      current_page: 1,
      data: [
        {
          id: "2fb2b0ba-4859-47c4-826c-1742a8ac39db",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Restaurant Olympia Gilbert has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 77,
              },
            },
          },
          read_at: "2024-06-14T10:42:45.000000Z",
          created_at: "2024-06-14T10:42:45.000000Z",
          updated_at: "2024-06-14T10:42:45.000000Z",
        },
        {
          id: "31d6a0f8-d820-4afd-a1c7-e64abaf8796a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Branch Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 74,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-06T12:03:40.000000Z",
          updated_at: "2024-06-06T12:03:40.000000Z",
        },
        {
          id: "3e380bad-85bf-411a-ab5a-ed3977bf179c",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Restaurant Britanney Mcbride has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 71,
              },
            },
          },
          read_at: "2024-06-14T10:42:45.000000Z",
          created_at: "2024-05-30T13:20:22.000000Z",
          updated_at: "2024-05-30T13:20:22.000000Z",
        },
        {
          id: "6169abb9-24cb-4f47-9bb4-74bc886dfa5a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Branch Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 78,
              },
            },
          },
          read_at: "2024-06-14T10:42:45.000000Z",
          created_at: "2024-06-25T11:16:18.000000Z",
          updated_at: "2024-06-25T11:16:18.000000Z",
        },
        {
          id: "704674e3-84c6-4de4-878e-5f6a53a1c16a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Restaurant Kiona Phelps has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 72,
              },
            },
          },
          read_at: null,
          created_at: "2024-05-30T13:21:05.000000Z",
          updated_at: "2024-05-30T13:21:05.000000Z",
        },
        {
          id: "7b4774e0-0326-4481-8a33-044c1c047810",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "User Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 81,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-25T11:17:25.000000Z",
          updated_at: "2024-06-25T11:17:25.000000Z",
        },
        {
          id: "91740da1-89df-407b-a2c0-042ed28a1468",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Branch Peter Browning has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 83,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-26T11:22:54.000000Z",
          updated_at: "2024-06-26T11:22:54.000000Z",
        },
        {
          id: "9ff7d276-caa5-475d-845a-4d0359d0e91d",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title: "New Feedback",
            body: "Restaurant Carissa Berg has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 69,
              },
            },
          },
          read_at: null,
          created_at: "2024-05-30T11:21:32.000000Z",
          updated_at: "2024-05-30T11:21:32.000000Z",
        },
      ],
      first_page_url:
        "http://localhost/food_app/admin-api/notifications?page=1",
      from: 1,
      last_page: 2,
      last_page_url: "http://localhost/food_app/admin-api/notifications?page=2",
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=1",
          label: "1",
          active: true,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=2",
          label: "2",
          active: false,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=2",
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url: "http://localhost/food_app/admin-api/notifications?page=2",
      path: "http://localhost/food_app/admin-api/notifications",
      per_page: 10,
      prev_page_url: null,
      to: 10,
      total: 14,
    },
    total_notifications: 0,
  },
};
export const loginCredentials = [
  {
    email: "admin@gmail.com",
    phone: "+1561555768",
    password: "123",
    status: true,
    role: "admin",
    message: "Login successfully",
    token: "1164|ihHvE9J6cn1U3St4Sk6v6JKOdm2ARA87hXYbIdS63831040a",
    "full-name": "John Wick",
    "first-name": "John",
    "last-name": "Wick",
    "photo-path":
      "https://media4.giphy.com/avatars/digitalducks/syqUuk9PflgI.png",
    "user-id": 1,
  },
  {
    user_id: 2,
    email: "user@gmail.com",
    password: "123",
    language: "English",
    nationality: "American",
    gender: "male",
    cancellation: "10",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    phone: "+1561555768",
    status: true,
    role: "user",
    message: "Login successfully",
    token: "1165|ihHvE9J6cn1U3St4Sk6v6JKOdm2ARA87hXYbIdS63831040a",
    full_name: "Tom albert",
    first_name: "Tom",
    last_name: "Albert",
    user_name: "albert",
    photo_path: images.UserImage,
    cover_photo: images.ProfileCover,
    institution_name: "Stanford School of Psychology",
    degree_title: "Master of Science in Clinical Psychology 2020 - 2023",
    organization_name: "Organization ABC",
    designation: "Doctor A (2020 - 2023)",
    certificate_name: "Institute ABC",
    certificate_title: "Certificate  ABC",
    certificate_image: images.certificate_image,
    certificate_from: "2024-06-10T14:29:37.000000Z",
    certificate_to: "2024-06-17T14:29:37.000000Z",
    edu_details_from: "2024-06-25T14:29:37.000000Z",
    edu_details_to: "2024-06-27T14:29:37.000000Z",
    wokr_exp_from: "2024-06-01T14:29:37.000000Z",
    wokr_exp_to: "2024-06-03T14:29:37.000000Z",
  },
  {
    user_id: 3,
    email: "provider@gmail.com",
    password: "123",
    language: "spanish",
    relationship: "Mother",
    phone: "+1561555768",
    status: true,
    role: "provider",
    message: "Login successfully",
    token: "1166|ihHvE9J6cn1U3St4Sk6v6JKOdm2ARA87hXYbIdS63831040a",
    full_name: "Tom albert",
    first_name: "Tom",
    last_name: "",
    user_name: "albert",
    gender: "male",
    state: "texas",
    city: "Dallas",
    bio: "Lorem ipsum",
    certificate_image: images.certificate_image,
    institution_name: "Institute ABC",
    certificate_title: "Certificate Abc",
    photo_path: images.UserImage,
  },
];

export const chat_box = [
  {
    chat_id: 1,
    "user-id": 2,
    message:
      "OMG 😲 do you remember what you did last night at the work night out?",
    sendable_id: 1,
    receiveable_id: 1,
    "photo-path":
      "https://media.istockphoto.com/id/186555801/photo/hes-the-bright-star-in-his-classroom.webp?b=1&s=612x612&w=0&k=20&c=VnxaoyQXcotPV_qTDbP06i7h8Kt2K-BCizq7_LIqGew=",
    seen: true,
    name: "Abc",
    date: "04/06/20",
    time: "03:00 PM",
  },
  {
    chat_id: 1,
    "user-id": 1,
    message:
      "OMG 😲 do you remember what you did last night at the work night out?",
    sendable_id: 1,
    receiveable_id: 1,
    "photo-path":
      "https://media4.giphy.com/avatars/digitalducks/syqUuk9PflgI.png",
    seen: true,
    name: "Abc",
    date: "04/06/20",
    time: "03:00 PM",
  },
  {
    chat_id: 1,
    "user-id": 2,
    message:
      "OMG 😲 do you remember what you did last night at the work night out?",
    sendable_id: 1,
    receiveable_id: 1,
    "photo-path":
      "https://media.istockphoto.com/id/186555801/photo/hes-the-bright-star-in-his-classroom.webp?b=1&s=612x612&w=0&k=20&c=VnxaoyQXcotPV_qTDbP06i7h8Kt2K-BCizq7_LIqGew=",
    seen: true,
    name: "Abc",
    date: "04/06/20",
    time: "03:00 PM",
  },
  {
    chat_id: 1,
    "user-id": 1,
    message:
      "OMG 😲 do youasdasd remember what you did last night at the work night out?",
    sendable_id: 1,
    receiveable_id: 1,
    "photo-path":
      "https://media4.giphy.com/avatars/digitalducks/syqUuk9PflgI.png",
    seen: false,
    name: "Abc",
    date: "04/06/20",
    time: "03:00 PM",
  },
];
export const sidebar = [
  {
    id: 1,
    name: "Abc",
    time: "Today",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/186555801/photo/hes-the-bright-star-in-his-classroom.webp?b=1&s=612x612&w=0&k=20&c=VnxaoyQXcotPV_qTDbP06i7h8Kt2K-BCizq7_LIqGew=",
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg",
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: "Abc",
    time: "Today",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path": "https://submeter.me/images/temp/400x450/img5.jpg",
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/1333838172/photo/indoor-headshot-portrait-of-cheerful-young-indian-female-businesswoman-student.jpg?s=612x612&w=0&k=20&c=GGPz0QlmMKYEt497R4HNRC8Pacha-lwpSe1fiqRwcjI=",
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://www.befunky.com/images/wp/wp-2022-12-social-media-profile-picture-2.jpg?auto=avif,webp&format=jpg&width=944",
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: "Abc",
    time: "Today",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=",
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=",
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: "Abc",
    time: "3 Days Ago",
    message: "Lorem ipsum dolor sit amet...",
    notification: "01",
    "photo-path":
      "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?s=612x612&w=0&k=20&c=cbjgWR58DgUUETP6a0kpeiKTCxwJydyvXZXPeNTEOxg=",
    isOpen: false,
    delivered: true,
  },
];
export const dashboardChartDataOne = {
  heading: "Total Earning",
  label: "Sales",
  fill: false,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDataTwo = {
  heading: "New Bookings Received",
  label: "New Bookings Received",
  fill: true,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDataThree = {
  heading: "New Users Registered",
  label: "New Users Registered",
  fill: true,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDatafour = {
  heading: "New Service Provider Registered",
  label: "New Service Provider Registered",
  fill: true,

  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const userDetail = {
  status: true,
  message: "user data",
  detail: {
    id: 7,
    first_name: "john",
    last_name: "Admin",
    email: "admin@gmail.com",
    phone: "+1561555768",
    status: 1,
    created_at: "2024-05-27T11:50:43.000000Z",
    updated_at: "2024-06-14T07:47:49.000000Z",
    deleted_at: null,
    status_detail: "Active",
    role: "admin",
    file: {
      id: 1425,
      fileable_type: "AppModelsBranch",
      fileable_id: 7,
      path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
      file_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
    },
  },
};
export const statsData = [
  {
    id: 1,
    image: Stats1,
    number: "178",
    text: "total earning",
    change: "100",
    increase: false,
    arrowIcon: true,
    total_post: "Since last week",
  },
  {
    id: 2,
    image: Stats2,
    increase: true,
    arrowIcon: true,
    number: "20",
    text: "new  bookings",
    change: "33",
    total_post: "Since last week",
  },
  {
    id: 3,
    image: Stats3,
    number: "20",
    text: "new  users",
    change: "33",
    increase: true,
    arrowIcon: true,
    total_post: "Since last week",
  },
  {
    id: 4,
    image: Stats4,
    number: "20",
    increase: false,
    arrowIcon: true,
    text: "new  service provider",
    change: "33",
    total_post: "Since last week",
  },
];
export const userManagementData = {
  status: true,
  message: "user listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        user_name: "Toms",
        relationship: "father",
        language: "English",
        subscription_type: "monthly",
        name: "Darvesh Restuarant",
        email: "darvesh@gmail.com",
        phone: "03656558478",
        lat: 36.3212167,
        lng: 74.66940469,
        status: 1,
        address: "8MCC+G3G, Karim Abad Road, Hunza, Karimabad",
        created_at: "2024-06-25T14:29:37.000000Z",
        updated_at: "2024-07-05T08:21:31.000000Z",
        deleted_at: null,
        status_detail: "1",
        phone_number: "+9158552465",
        role: "branch",
        UserImage:
          "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
      },
      {
        id: 2,
        user_name: "Toms",
        relationship: "father",
        language: "English",
        subscription_type: "yearly",
        name: "Darvesh Restuarant",
        email: "darvesh@gmail.com",
        phone: "03656558478",
        lat: 36.3212167,
        lng: 74.66940469,
        status: 0,
        address: "8MCC+G3G, Karim Abad Road, Hunza, Karimabad",
        created_at: "2024-06-25T14:29:37.000000Z",
        updated_at: "2024-07-05T08:21:31.000000Z",
        deleted_at: null,
        status_detail: "0",
        phone_number: "+9658552465",
        role: "branch",
        UserImage:
          "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const userAppointmentLogsData = {
  status: true,
  message: "subcription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        appointment_iD: "#123456",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Pending",
      },
      {
        id: 2,
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Rejected",
      },
      {
        id: 3,
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Upcoming",
      },
      {
        id: 4,
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$20",
        status: "Past",
      },
      {
        id: 5,
        appointment_iD: "#124654",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        status: "Approved",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const userOrderLogsData = {
  status: true,
  message: "user Order Logs logs",
  detail: {
    current_page: 1,
    data: [
      {
        order_iD: "#123456",
        shop_name: "lifeline pharmacy",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        orderid: "1",
        amount: "$30",
        status: "Delivered",
        id: "1",
        productlogs: [
          {
            sNo: "01",
            productName: "Digest Aid",
            productDescription: "Pain Relief",
            price: "$10",
            quantity: 10,
            total: "$100",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxUc8YW6VVv5JDUaWDIthYucrtBlhu33WIxhP9CnrNpiGQt-wz_t6GV5UVMRYqFu6Ykk&usqp=CAU",
          },
          {
            sNo: "02",
            productName: "Zinc",
            productDescription: "Antioxidant",
            price: "$20",
            quantity: 20,
            total: "$200",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2C5ilnsaq6kwACZ5ULs_swsKrlo0t_xhBg&s",
          },
          {
            sNo: "03",
            productName: "Omega 3",
            productDescription: "Heart Health",
            price: "$30",
            quantity: 30,
            total: "$300",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g8S0XeoIdvhHZoSOJNk9cfrZ4gc3x8s3dQ&s",
          },
        ],
        sub_total: "$80.00",
        delivery_charges: "$80.00",
        customerInfo: {
          name: "Tom Albert",
          email: "tomalbert@gmail.com",
          phone: "+1 1234567890",
        },
        shippingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
        billingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
      },
      {
        id: "2",
        order_iD: "#123456",
        shop_name: "lifeline pharmacy",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        orderid: "2",
        amount: "$30",
        status: "Cancelled",
        productlogs: [
          {
            sNo: "01",
            productName: "Digest Aid",
            productDescription: "Pain Relief",
            price: "$10",
            quantity: 10,
            total: "$100",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxUc8YW6VVv5JDUaWDIthYucrtBlhu33WIxhP9CnrNpiGQt-wz_t6GV5UVMRYqFu6Ykk&usqp=CAU",
          },
          {
            sNo: "02",
            productName: "Zinc",
            productDescription: "Antioxidant",
            price: "$20",
            quantity: 20,
            total: "$200",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2C5ilnsaq6kwACZ5ULs_swsKrlo0t_xhBg&s",
          },
          {
            sNo: "03",
            productName: "Omega 3",
            productDescription: "Heart Health",
            price: "$30",
            quantity: 30,
            total: "$300",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g8S0XeoIdvhHZoSOJNk9cfrZ4gc3x8s3dQ&s",
          },
        ],
        sub_total: "$80.00",
        delivery_charges: "$80.00",
        customerInfo: {
          name: "Tom Albert",
          email: "tomalbert@gmail.com",
          phone: "+1 1234567890",
        },
        shippingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
        billingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
        cancellation_reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
      },
      {
        id: "3",
        order_iD: "#123456",
        shop_name: "lifeline pharmacy",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        orderid: "3",
        amount: "$30",
        status: "Pending",
        productlogs: [
          {
            sNo: "03",
            productName: "Digest Aid",
            productDescription: "Pain Relief",
            price: "$10",
            quantity: 10,
            total: "$100",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxUc8YW6VVv5JDUaWDIthYucrtBlhu33WIxhP9CnrNpiGQt-wz_t6GV5UVMRYqFu6Ykk&usqp=CAU",
          },
          {
            sNo: "02",
            productName: "Zinc",
            productDescription: "Antioxidant",
            price: "$20",
            quantity: 20,
            total: "$200",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2C5ilnsaq6kwACZ5ULs_swsKrlo0t_xhBg&s",
          },
          {
            sNo: "03",
            productName: "Omega 3",
            productDescription: "Heart Health",
            price: "$30",
            quantity: 30,
            total: "$300",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g8S0XeoIdvhHZoSOJNk9cfrZ4gc3x8s3dQ&s",
          },
        ],
        cancellation_reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        sub_total: "$80.00",
        delivery_charges: "$80.00",
        customerInfo: {
          name: "Tom Albert",
          email: "tomalbert@gmail.com",
          phone: "+1 1234567890",
        },
        shippingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
        billingAddress: {
          name: "Tom Albert",
          phone: "+1 1234567890",
          country: "America",
          state: "Alaska",
          city: "Juneau",
          zipCode: "99801",
          address: "700 ORCA ST ANCHORAGE AK 99501-4040 USA",
        },
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceProvidersData = {
  status: true,
  message: "Service Provider listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        email: "sarahmiles@gmail.com",
        registrationDate: "12/02/2024",
        status_detail: "1",
        name: "Sarah Miles",
        gender: "Female",
        phoneNo: "+1 2345678901",
        state: "Texas",
        city: "Dallas",
        bio: "Dr. Sarah has over 07 years of experience in the field of pediatrics. She has worked in several healthcare settings, including children's hospitals, clinics, and primary care facilities, providing specialized medical care for children of all ages.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Harvard Medical School",
          certificateTitle: "Pediatrician",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "2",
        email: "danielcarter@gmail.com",
        registrationDate: "01/12/2024",
        status_detail: "0",
        name: "Daniel Carter",
        gender: "Male",
        phoneNo: "+1 9876543210",
        state: "New York",
        city: "New York City",
        bio: "Dr. Daniel is a renowned cardiologist with 15 years of experience. He has made significant contributions in the field of cardiology and worked in various reputed hospitals to treat patients with cardiovascular diseases.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Johns Hopkins University",
          certificateTitle: "Cardiologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "3",
        email: "emilywhite@gmail.com",
        registrationDate: "03/02/2024",
        status_detail: "1",
        name: "Emily White",
        gender: "Female",
        phoneNo: "+1 3456789012",
        state: "Florida",
        city: "Miami",
        bio: "Dr. Emily has over 08 years of experience as an oncologist, working extensively in cancer research and treatment. She has been part of various cancer institutes, helping patients in their fight against cancer.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "University of Florida",
          certificateTitle: "Oncologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "4",
        email: "michaelscott@gmail.com",
        registrationDate: "08/08/2024",
        status_detail: "0",
        name: "Michael Scott",
        gender: "Male",
        phoneNo: "+1 1234567899",
        state: "California",
        city: "Los Angeles",
        bio: "Dr. Michael is a skilled neurologist with 12 years of experience, specializing in treating patients with neurological disorders. He has worked in some of the top hospitals, delivering expert care to those in need.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Stanford University",
          certificateTitle: "Neurologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "5",
        email: "jessicagreen@gmail.com",
        registrationDate: "20/06/2024",
        status_detail: "1",
        name: "Jessica Green",
        gender: "Female",
        phoneNo: "+1 7654321098",
        state: "Illinois",
        city: "Chicago",
        bio: "Dr. Jessica has over 10 years of experience in gynecology, providing specialized care for women's health. She has worked in various hospitals and private practices, ensuring quality care for women at different stages of life.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Northwestern University",
          certificateTitle: "Gynecologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceProviderAppointmentLogsData = {
  status: true,
  message: "subcription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        appointment_iD: "#123456",
        serviceType: "Diagnostic Services",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Pending",
      },
      {
        id: 2,
        appointment_iD: "#124654",
        serviceType: "Customer Services",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Rejected",
      },
      {
        id: 3,
        appointment_iD: "#124654",
        serviceType: "Preventive Care",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        status: "Upcoming",
      },
      {
        id: 4,
        appointment_iD: "#124654",
        serviceType: "Telehealth Services",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$20",
        status: "Past",
      },
      {
        id: 5,
        appointment_iD: "#124654",
        serviceType: "Urgent Care Services",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        status: "Approved",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceProviderOrderLogsData = {
  status: true,
  message: "subcription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        order_iD: "#123456",
        customerName: "Tom Albert",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        amount: "$30",
        status: "Delivered",
      },
      {
        id: 2,
        order_iD: "#123456",
        customerName: "louis Thomas",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        amount: "$30",
        status: "Cancelled",
      },
      {
        id: 3,
        order_iD: "#123456",
        customerName: "Victoria Andrew",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        amount: "$30",
        status: "Pending",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceDetailsData = {
  status: true,
  message: "Service logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        name: "Diagnose Service",
        description:
          "Diagnostic services are essential for accurately identifying medical conditions, guiding effective treatment plans, and monitoring the success of ongoing care. Our comprehensive range of diagnostic tools includes laboratory tests, imaging studies...",
        serviceCategory: "Online",
        serviceCharges: "$30",
        status_detail: "1",
        photo:
          "https://www.healthcareoutlook.net/wp-content/uploads/2022/03/AI-based-Medical-Diagnostic-Tools.jpg",
        appointmentLogs: [
          {
            id: "1",
            appointment_iD: "#123456",
            serviceType: "Diagnostic Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Pending",
          },
          {
            id: "2",
            appointment_iD: "#124654",
            serviceType: "Customer Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Rejected",
          },
          {
            id: "3",
            appointment_iD: "#124654",
            serviceType: "Preventive Care",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Upcoming",
          },
          {
            id: "4",
            appointment_iD: "#124654",
            serviceType: "Telehealth Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$20",
            status: "Past",
          },
          {
            id: "5",
            appointment_iD: "#124654",
            serviceType: "Urgent Care Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$10",
            status: "Approved",
          },
        ],
      },
      {
        id: "2",
        name: "Diagnose Service",
        description:
          "Diagnostic services are essential for accurately identifying medical conditions, guiding effective treatment plans, and monitoring the success of ongoing care. Our comprehensive range of diagnostic tools includes laboratory tests, imaging studies...",
        serviceCategory: "Onsite",
        serviceCharges: "$30",
        status_detail: "0",
        photo:
          "https://www.healthcareoutlook.net/wp-content/uploads/2022/03/AI-based-Medical-Diagnostic-Tools.jpg",
        appointmentLogs: [
          {
            id: "1",
            appointment_iD: "#123456",
            serviceType: "Diagnostic Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Pending",
          },
          {
            id: "2",
            appointment_iD: "#124654",
            serviceType: "Customer Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Rejected",
          },
          {
            id: "3",
            appointment_iD: "#124654",
            serviceType: "Preventive Care",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Upcoming",
          },
          {
            id: "4",
            appointment_iD: "#124654",
            serviceType: "Telehealth Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$20",
            status: "Past",
          },
          {
            id: "5",
            appointment_iD: "#124654",
            serviceType: "Urgent Care Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$10",
            status: "Approved",
          },
        ],
      },
      {
        id: "3",
        name: "Diagnose Service",
        description:
          "Diagnostic services are essential for accurately identifying medical conditions, guiding effective treatment plans, and monitoring the success of ongoing care. Our comprehensive range of diagnostic tools includes laboratory tests, imaging studies...",
        serviceCategory: "Onsite",
        serviceCharges: "$30",
        status_detail: "1",
        photo:
          "https://www.healthcareoutlook.net/wp-content/uploads/2022/03/AI-based-Medical-Diagnostic-Tools.jpg",
        appointmentLogs: [
          {
            id: "1",
            appointment_iD: "#123456",
            serviceType: "Diagnostic Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Pending",
          },
          {
            id: "2",
            appointment_iD: "#124654",
            serviceType: "Customer Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Rejected",
          },
          {
            id: "3",
            appointment_iD: "#124654",
            serviceType: "Preventive Care",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Upcoming",
          },
          {
            id: "4",
            appointment_iD: "#124654",
            serviceType: "Telehealth Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$20",
            status: "Past",
          },
          {
            id: "5",
            appointment_iD: "#124654",
            serviceType: "Urgent Care Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$10",
            status: "Approved",
          },
        ],
      },
      {
        id: "4",
        name: "Diagnose Service",
        description:
          "Diagnostic services are essential for accurately identifying medical conditions, guiding effective treatment plans, and monitoring the success of ongoing care. Our comprehensive range of diagnostic tools includes laboratory tests, imaging studies...",
        serviceCategory: "Onsite",
        serviceCharges: "$30",
        status_detail: "0",
        photo:
          "https://www.healthcareoutlook.net/wp-content/uploads/2022/03/AI-based-Medical-Diagnostic-Tools.jpg",
        appointmentLogs: [
          {
            id: "1",
            appointment_iD: "#123456",
            serviceType: "Diagnostic Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Pending",
          },
          {
            id: "2",
            appointment_iD: "#124654",
            serviceType: "Customer Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Rejected",
          },
          {
            id: "3",
            appointment_iD: "#124654",
            serviceType: "Preventive Care",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Upcoming",
          },
          {
            id: "4",
            appointment_iD: "#124654",
            serviceType: "Telehealth Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$20",
            status: "Past",
          },
          {
            id: "5",
            appointment_iD: "#124654",
            serviceType: "Urgent Care Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$10",
            status: "Approved",
          },
        ],
      },
      {
        id: "5",
        name: "Diagnose Service",
        description:
          "Diagnostic services are essential for accurately identifying medical conditions, guiding effective treatment plans, and monitoring the success of ongoing care. Our comprehensive range of diagnostic tools includes laboratory tests, imaging studies...",
        serviceCategory: "Onsite",
        serviceCharges: "$30",
        status_detail: "1",
        photo:
          "https://www.healthcareoutlook.net/wp-content/uploads/2022/03/AI-based-Medical-Diagnostic-Tools.jpg",
        appointmentLogs: [
          {
            id: "1",
            appointment_iD: "#123456",
            serviceType: "Diagnostic Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Pending",
          },
          {
            id: "2",
            appointment_iD: "#124654",
            serviceType: "Customer Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Rejected",
          },
          {
            id: "3",
            appointment_iD: "#124654",
            serviceType: "Preventive Care",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$30",
            status: "Upcoming",
          },
          {
            id: "4",
            appointment_iD: "#124654",
            serviceType: "Telehealth Services",
            appointment_type: "Onsite",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$20",
            status: "Past",
          },
          {
            id: "5",
            appointment_iD: "#124654",
            serviceType: "Urgent Care Services",
            appointment_type: "Online",
            date: "2024-06-25T14:29:37.000000Z",
            charges: "$10",
            status: "Approved",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const allAppointmentLogsData = {
  status: true,
  message: "Appointment logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        appointment_iD: "#123456",
        appointment_type: "Online",
        addtionalRequestService: "Home Health & Rehabilitation Care",
        addtionalRequestCharges: "$10",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
        status: "Pending",
      },
      {
        id: "2",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Louis Thomas",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Tom albert",
          serviceName: "MedLink Solutions service",
        },
        status: "Rejected",
        rejectionReason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
      },
      {
        id: "3",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        email: "someemail@email.com",
        addtionalRequestService: "Home Health & Rehabilitation Care",
        addtionalRequestCharges: "$10",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Louis Thomas",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Tom albert",
          serviceName: "MedLink Solutions service",
        },
        status: "Rejected",
        rejectionReason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
      },
      {
        id: "4",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        requestedDate: "14/02/2024",
        requestedTime: "5:00 PM",
        addtionalRequestService: "Home Health & Rehabilitation Care",
        addtionalRequestCharges: "$10",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Cindy Anne",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Marie max",
          serviceName: "MedLink Solutions service",
        },
        status: "Requested",
      },
      {
        id: "5",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$30",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        requestedDate: "14/02/2024",
        requestedTime: "5:00 PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Cindy Anne",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Marie max",
          serviceName: "MedLink Solutions service",
        },
        status: "Requested",
      },
      {
        id: "6",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$20",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Victoria Andrew",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "louis Thomas",
          serviceName: "MedLink Solutions service",
        },
        status: "Completed",
        rating: 4.5,
        review: `Excellent Service and Care! I’ve been visiting [Clinic/Medical Shop Name] for over a year now, and every experience has been outstanding. The staff is incredibly helpful, and the doctors take the time to listen and explain everything in detail. I always leave feeling well taken care of!`,
      },
      {
        id: "7",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$20",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        addtionalRequestService: "Home Health & Rehabilitation Care",
        addtionalRequestCharges: "$10",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Victoria Andrew",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "louis Thomas",
          serviceName: "MedLink Solutions service",
        },
        status: "Completed",
        rating: 4.5,
        review: `Excellent Service and Care! I’ve been visiting [Clinic/Medical Shop Name] for over a year now, and every experience has been outstanding. The staff is incredibly helpful, and the doctors take the time to listen and explain everything in detail. I always leave feeling well taken care of!`,
      },
      {
        id: "8",
        appointment_iD: "#124654",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        user: {
          name: "Marie max",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Cindy Anne",
          serviceName: "MedLink Solutions service",
        },
        status: "Approved",
      },
      {
        id: "9",
        appointment_iD: "#124654",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        addtionalRequestService: "Home Health & Rehabilitation Care",
        addtionalRequestCharges: "$10",
        charges: "$10",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        user: {
          name: "Marie max",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Cindy Anne",
          serviceName: "MedLink Solutions service",
        },
        status: "Approved",
      },
      {
        id: "10",
        appointment_iD: "#124654",
        appointment_type: "Onsite",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",
        user: {
          name: "Marie max",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Cindy Anne",
          serviceName: "MedLink Solutions service",
        },
        status: "Pending",
      },
      {
        id: "7",
        appointment_iD: "#124654",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        user: {
          name: "Marie max",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Cindy Anne",
          serviceName: "MedLink Solutions service",
        },
        status: "Pending",
      },
      {
        id: "8",
        appointment_iD: "#124654",
        appointment_type: "Online",
        date: "2024-06-25T14:29:37.000000Z",
        charges: "$10",
        email: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+1123456789",
        serviceDate: "14/02/2024",
        user: {
          name: "Marie max",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Cindy Anne",
          serviceName: "MedLink Solutions service",
        },
        status: "Pending",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const productCategoryManagementData = {
  status: true,
  message: "product Category Management Listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        category_title: "Omnipod",
        creation_date: "2024-07-05T08:21:31.000000Z",
        no_of_Products: 1,
        status_detail: "0",
        status: 1,
        products: [
          {
            id: "1",
            name: "Digest Aid",
            shop_name: "Lifeline Pharmacy",
            description:
              "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
            quantity: "12",
            added_on: "2024-07-05T08:21:31.000000Z",
            price: "$100",
            category: "pain relief",
            productType: "e-Product",
            status_detail: "1",
            photos: [
              "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
              "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
              "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
              "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
            ],
            rating: "4.5",
            reviews: {
              count: 57,
              comments: [
                {
                  user: {
                    name: "D. David",
                    "photo-path":
                      "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
                  },
                  comment:
                    "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Ai Boi",
                    "photo-path":
                      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
                  },
                  comment:
                    "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
                  rating: 4,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                  },
                  comment:
                    "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
                  },
                  comment:
                    "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
                  rating: 4,
                  timestamp: "Dec 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
                  },
                  comment:
                    "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
                  rating: 3,
                  timestamp: "Feb 16, 2024",
                },
              ],
            },
          },
          {
            id: "2",
            name: "Digest Aid",
            shop_name: "Lifeline Pharmacy",
            description:
              "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
            quantity: "12",
            added_on: "2024-07-05T08:21:31.000000Z",
            price: "$100",
            category: "pain relief",
            productType: "e-Product",
            status_detail: "0",
            photos: [
              "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
              "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
              "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
              "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
            ],
            rating: "4.5",
            reviews: {
              count: 57,
              comments: [
                {
                  user: {
                    name: "D. David",
                    "photo-path":
                      "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
                  },
                  comment:
                    "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Ai Boi",
                    "photo-path":
                      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
                  },
                  comment:
                    "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
                  rating: 4,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                  },
                  comment:
                    "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
                  },
                  comment:
                    "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
                  rating: 4,
                  timestamp: "Dec 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
                  },
                  comment:
                    "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
                  rating: 3,
                  timestamp: "Feb 16, 2024",
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        category_title: "Abbott BinaxNOW",
        creation_date: "2024-07-05T08:21:31.000000Z",
        no_of_Products: 5,
        status_detail: "1",
        status: 1,
        products: [
          {
            id: "1",
            name: "Digest Aid",
            shop_name: "Lifeline Pharmacy",
            description:
              "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
            quantity: "12",
            added_on: "2024-07-05T08:21:31.000000Z",
            price: "$100",
            category: "pain relief",
            productType: "e-Product",
            status_detail: "1",
            photos: [
              "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
              "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
              "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
              "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
            ],
            rating: "4.5",
            reviews: {
              count: 57,
              comments: [
                {
                  user: {
                    name: "D. David",
                    "photo-path":
                      "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
                  },
                  comment:
                    "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Ai Boi",
                    "photo-path":
                      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
                  },
                  comment:
                    "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
                  rating: 4,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                  },
                  comment:
                    "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
                  },
                  comment:
                    "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
                  rating: 4,
                  timestamp: "Dec 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
                  },
                  comment:
                    "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
                  rating: 3,
                  timestamp: "Feb 16, 2024",
                },
              ],
            },
          },
          {
            id: "2",
            name: "Digest Aid",
            shop_name: "Lifeline Pharmacy",
            description:
              "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
            quantity: "12",
            added_on: "2024-07-05T08:21:31.000000Z",
            price: "$100",
            category: "pain relief",
            productType: "e-Product",
            status_detail: "0",
            photos: [
              "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
              "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
              "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
              "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
            ],
            rating: "4.5",
            reviews: {
              count: 57,
              comments: [
                {
                  user: {
                    name: "D. David",
                    "photo-path":
                      "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
                  },
                  comment:
                    "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Ai Boi",
                    "photo-path":
                      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
                  },
                  comment:
                    "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
                  rating: 4,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                  },
                  comment:
                    "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
                  rating: 5,
                  timestamp: "Jul 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
                  },
                  comment:
                    "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
                  rating: 4,
                  timestamp: "Dec 14, 2023",
                },
                {
                  user: {
                    name: "Athalia Putri",
                    "photo-path":
                      "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
                  },
                  comment:
                    "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
                  rating: 3,
                  timestamp: "Feb 16, 2024",
                },
              ],
            },
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const shopDetailsData = {
  status: true,
  message: "Appointment logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        shopName: "HealFast",
        deliveryDate: "12/02/2024",
        deliveryFee: "$8",
        photo:
          "https://img.freepik.com/premium-photo/pharmacy-shop-pharmacy-store-interior-with-shelves-pharmaceutical-products-cosmetics_1036975-246092.jpg",
        category: "Pain Relief",
        status_detail: "1",
        products: [
          {
            id: "1",
            productName: "HealFast",
            addedOn: "12/02/2024",
            category: "Pain Relief",
            status_detail: "1",
          },
          {
            id: "2",
            productName: "RespiraClear",
            addedOn: "01/12/2024",
            category: "Diabetes Care",
            status_detail: "0",
          },
          {
            id: "3",
            productName: "PureShield",
            addedOn: "03/02/2024",
            category: "Multivitamins",
            status_detail: "1",
          },
          {
            id: "4",
            productName: "DigestAid",
            addedOn: "08/08/2024",
            category: "Burn Creams",
            status_detail: "0",
          },
          {
            id: "5",
            productName: "PharmaFlex",
            addedOn: "20/06/2024",
            category: "Joint & Bone Health",
            status_detail: "1",
          },
        ],
      },
      {
        id: "2",
        shopName: "HealFast",
        deliveryDate: "12/02/2024",
        deliveryFee: "$8",
        photo:
          "https://img.freepik.com/premium-photo/pharmacy-shop-pharmacy-store-interior-with-shelves-pharmaceutical-products-cosmetics_1036975-246092.jpg",
        category: "Pain Relief",
        status_detail: "1",
        products: [
          {
            id: "1",
            productName: "HealFast",
            addedOn: "12/02/2024",
            category: "Pain Relief",
            status_detail: "1",
          },
          {
            id: "2",
            productName: "RespiraClear",
            addedOn: "01/12/2024",
            category: "Diabetes Care",
            status_detail: "0",
          },
          {
            id: "3",
            productName: "PureShield",
            addedOn: "03/02/2024",
            category: "Multivitamins",
            status_detail: "1",
          },
          {
            id: "4",
            productName: "DigestAid",
            addedOn: "08/08/2024",
            category: "Burn Creams",
            status_detail: "0",
          },
          {
            id: "5",
            productName: "PharmaFlex",
            addedOn: "20/06/2024",
            category: "Joint & Bone Health",
            status_detail: "1",
          },
        ],
      },
      {
        id: "3",
        shopName: "HealFast",
        deliveryDate: "12/02/2024",
        deliveryFee: "$8",
        photo:
          "https://img.freepik.com/premium-photo/pharmacy-shop-pharmacy-store-interior-with-shelves-pharmaceutical-products-cosmetics_1036975-246092.jpg",
        category: "Pain Relief",
        status_detail: "1",
        products: [
          {
            id: "1",
            productName: "HealFast",
            addedOn: "12/02/2024",
            category: "Pain Relief",
            status_detail: "1",
          },
          {
            id: "2",
            productName: "RespiraClear",
            addedOn: "01/12/2024",
            category: "Diabetes Care",
            status_detail: "0",
          },
          {
            id: "3",
            productName: "PureShield",
            addedOn: "03/02/2024",
            category: "Multivitamins",
            status_detail: "1",
          },
          {
            id: "4",
            productName: "DigestAid",
            addedOn: "08/08/2024",
            category: "Burn Creams",
            status_detail: "0",
          },
          {
            id: "5",
            productName: "PharmaFlex",
            addedOn: "20/06/2024",
            category: "Joint & Bone Health",
            status_detail: "1",
          },
        ],
      },
      {
        id: "4",
        shopName: "HealFast",
        deliveryDate: "12/02/2024",
        deliveryFee: "$8",
        photo:
          "https://img.freepik.com/premium-photo/pharmacy-shop-pharmacy-store-interior-with-shelves-pharmaceutical-products-cosmetics_1036975-246092.jpg",
        category: "Pain Relief",
        status_detail: "1",
        products: [
          {
            id: "1",
            productName: "HealFast",
            addedOn: "12/02/2024",
            category: "Pain Relief",
            status_detail: "1",
          },
          {
            id: "2",
            productName: "RespiraClear",
            addedOn: "01/12/2024",
            category: "Diabetes Care",
            status_detail: "0",
          },
          {
            id: "3",
            productName: "PureShield",
            addedOn: "03/02/2024",
            category: "Multivitamins",
            status_detail: "1",
          },
          {
            id: "4",
            productName: "DigestAid",
            addedOn: "08/08/2024",
            category: "Burn Creams",
            status_detail: "0",
          },
          {
            id: "5",
            productName: "PharmaFlex",
            addedOn: "20/06/2024",
            category: "Joint & Bone Health",
            status_detail: "1",
          },
        ],
      },
      {
        id: "5",
        shopName: "HealFast",
        deliveryDate: "12/02/2024",
        deliveryFee: "$8",
        photo:
          "https://img.freepik.com/premium-photo/pharmacy-shop-pharmacy-store-interior-with-shelves-pharmaceutical-products-cosmetics_1036975-246092.jpg",
        category: "Pain Relief",
        status_detail: "1",
        products: [
          {
            id: "1",
            productName: "HealFast",
            addedOn: "12/02/2024",
            category: "Pain Relief",
            status_detail: "1",
          },
          {
            id: "2",
            productName: "RespiraClear",
            addedOn: "01/12/2024",
            category: "Diabetes Care",
            status_detail: "0",
          },
          {
            id: "3",
            productName: "PureShield",
            addedOn: "03/02/2024",
            category: "Multivitamins",
            status_detail: "1",
          },
          {
            id: "4",
            productName: "DigestAid",
            addedOn: "08/08/2024",
            category: "Burn Creams",
            status_detail: "0",
          },
          {
            id: "5",
            productName: "PharmaFlex",
            addedOn: "20/06/2024",
            category: "Joint & Bone Health",
            status_detail: "1",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const productsData = {
  status: true,
  message: "Service logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        name: "Digest Aid",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        quantity: "12",
        price: "$100",
        category: "pain relief",
        productType: "e-Product",
        status_detail: "1",
        photos: [
          "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
          "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
          "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
          "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
        ],
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: "2",
        name: "Digest Aid",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        quantity: "12",
        price: "$100",
        category: "pain relief",
        productType: "e-Product",
        status_detail: "0",
        photos: [
          "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
          "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
          "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
          "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
        ],
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: "3",
        name: "Digest Aid",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        quantity: "12",
        price: "$100",
        category: "pain relief",
        productType: "e-Product",
        status_detail: "1",
        photos: [
          "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
          "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
          "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
          "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
        ],
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: "4",
        name: "Digest Aid",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        quantity: "12",
        price: "$100",
        category: "pain relief",
        productType: "e-Product",
        status_detail: "0",
        photos: [
          "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
          "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
          "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
          "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
        ],
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: "5",
        name: "Digest Aid",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        quantity: "12",
        price: "$100",
        category: "pain relief",
        productType: "e-Product",
        status_detail: "0",
        photos: [
          "https://www.solgar.com/wp-content/uploads/product_photos/SO_512993/SO_512993_A5.png",
          "https://solgar.co.uk/cdn/shop/products/SG_1000_DigestiveEnzymes_Tabletsontable_1_1.jpg?v=1714039253&width=1500",
          "https://solgar.co.uk/cdn/shop/files/digestive-enzymes.png?v=1714402194&width=1500",
          "https://i0.wp.com/panaceaonline.co.uk/wp-content/uploads/2020/07/a1-7.jpg?fit=695%2C244&ssl=1",
        ],
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceProvidersRequestsData = {
  status: true,
  message: "Service Provider listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        serviceProviderName: "Tom albert",
        requestedOn: "12/02/2024",
        status_detail: "Pending",
      },
      {
        id: "2",
        serviceProviderName: "Louis Thomas",
        requestedOn: "01/12/2024",
        status_detail: "Rejected",
      },
      {
        id: "3",
        serviceProviderName: "Marie max",
        requestedOn: "03/02/2024",
        status_detail: "Pending",
      },
      {
        id: "4",
        serviceProviderName: "Victoria Andrew",
        requestedOn: "08/08/2024",
        status_detail: "Rejected",
      },
      {
        id: "5",
        serviceProviderName: "Cindy Anne",
        requestedOn: "20/06/2024",
        status_detail: "Pending",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const newRequestServiceProviderData = {
  status: true,
  message: "Service Provider",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        email: "sarahmiles@gmail.com",
        registrationDate: "12/02/2024",
        status: "Pending",
        name: "Sarah Miles",
        gender: "Female",
        phoneNo: "+1 2345678901",
        state: "Texas",
        city: "Dallas",
        bio: "Dr. Sarah has over 07 years of experience in the field of pediatrics. She has worked in several healthcare settings, including children's hospitals, clinics, and primary care facilities, providing specialized medical care for children of all ages.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Harvard Medical School",
          certificateTitle: "Pediatrician",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "2",
        email: "danielcarter@gmail.com",
        registrationDate: "01/12/2024",
        status: "Rejected",
        rejectionReason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        name: "Daniel Carter",
        gender: "Male",
        phoneNo: "+1 9876543210",
        state: "New York",
        city: "New York City",
        bio: "Dr. Daniel is a renowned cardiologist with 15 years of experience. He has made significant contributions in the field of cardiology and worked in various reputed hospitals to treat patients with cardiovascular diseases.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Johns Hopkins University",
          certificateTitle: "Cardiologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "3",
        email: "emilywhite@gmail.com",
        registrationDate: "03/02/2024",
        status: "Pending",
        name: "Emily White",
        gender: "Female",
        phoneNo: "+1 3456789012",
        state: "Florida",
        city: "Miami",
        bio: "Dr. Emily has over 08 years of experience as an oncologist, working extensively in cancer research and treatment. She has been part of various cancer institutes, helping patients in their fight against cancer.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "University of Florida",
          certificateTitle: "Oncologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "4",
        email: "michaelscott@gmail.com",
        registrationDate: "08/08/2024",
        status: "Rejected",
        rejectionReason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        name: "Michael Scott",
        gender: "Male",
        phoneNo: "+1 1234567899",
        state: "California",
        city: "Los Angeles",
        bio: "Dr. Michael is a skilled neurologist with 12 years of experience, specializing in treating patients with neurological disorders. He has worked in some of the top hospitals, delivering expert care to those in need.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Stanford University",
          certificateTitle: "Neurologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
      {
        id: "5",
        email: "jessicagreen@gmail.com",
        registrationDate: "20/06/2024",
        status: "Pending",
        name: "Jessica Green",
        gender: "Female",
        phoneNo: "+1 7654321098",
        state: "Illinois",
        city: "Chicago",
        bio: "Dr. Jessica has over 10 years of experience in gynecology, providing specialized care for women's health. She has worked in various hospitals and private practices, ensuring quality care for women at different stages of life.",
        certification: {
          photo:
            "https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small_2x/graduation-certificate-template-free-vector.jpg",
          institute: "Northwestern University",
          certificateTitle: "Gynecologist",
        },
        userImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        services: [
          {
            id: "1",
            serviceName: "Diagnostic Services",
            serviceCategory: "Vaccinations",
            creationDate: "12/02/2024",
            serviceCharges: "$10",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "2",
            serviceName: "Custom Service",
            serviceCategory: "Routine Checkups",
            creationDate: "01/12/2024",
            serviceCharges: "$20",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "3",
            serviceName: "Preventive Care",
            serviceCategory: "Dermatology",
            creationDate: "03/02/2024",
            serviceCharges: "$30",
            serviceType: "Online",
            status_detail: "1",
          },
          {
            id: "4",
            serviceName: "Telehealth Services",
            serviceCategory: "Physical Therapy",
            creationDate: "08/08/2024",
            serviceCharges: "$40",
            serviceType: "Onsite",
            status_detail: "0",
          },
          {
            id: "5",
            serviceName: "Urgent Care Services",
            serviceCategory: "Diabetes Care",
            creationDate: "20/06/2024",
            serviceCharges: "$50",
            serviceType: "Online",
            status_detail: "1",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const serviceCategoryData = {
  status: true,
  message: "Service Category listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        categoryTitle: "Pain Relief",
        creationDate: "12/02/2024",
        status_detail: "1",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
      },
      {
        id: "2",
        categoryTitle: "Diabetes Care",
        creationDate: "01/12/2024",
        status_detail: "0",
        photo: [
          "https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/3727/087a5f43-6ecf-4806-927a-bc738a47291a.jpg",
        ],
      },
      {
        id: "3",
        categoryTitle: "Multivitamins",
        creationDate: "03/02/2024",
        status_detail: "1",
        photo: [
          "https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/3727/087a5f43-6ecf-4806-927a-bc738a47291a.jpg",
        ],
      },
      {
        id: "4",
        categoryTitle: "Burn Creams",
        creationDate: "08/08/2024",
        status_detail: "0",
        photo: [
          "https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/3727/087a5f43-6ecf-4806-927a-bc738a47291a.jpg",
        ],
      },
      {
        id: "5",
        categoryTitle: "Joint & Bone Health",
        creationDate: "20/06/2024",
        status_detail: "1",
        photo: [
          "https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/3727/087a5f43-6ecf-4806-927a-bc738a47291a.jpg",
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const blogsData = {
  status: true,
  message: "Content Management Blogs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        blogTitle: "Health Matters",
        addedOn: "12/02/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        content: `Health matters because it is the foundation of a fulfilling life. Good health allows us to pursue our goals, enjoy meaningful relationships, and navigate daily challenges with energy and resilience. Taking care of both physical and mental well-being is essential for long-term happiness and success.`,
        blogFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "2",
        blogTitle: "Everyday Wellness",
        addedOn: "01/12/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
        ],
        content: `Everyday Wellness: Simple Habits for a Healthier, Happier Life In today’s fast-paced world, it can be easy to overlook the small things that contribute to our overall wellness. We’re often focused on big goals like losing weight, reducing stress, or getting fit, but true wellness is about the little things we do every day that keep our minds and bodies healthy. By integrating simple, sustainable habits into our daily routines, we can improve our physical, mental, and emotional well-being. Here’s how to embrace everyday wellness.
Prioritize Hydration
Water is essential for nearly every function in the body, from regulating temperature to aiding digestion and supporting brain function. Yet, many of us don’t drink enough throughout the day. Dehydration can lead to fatigue, headaches, and even mood changes. Make it a habit to drink water regularly. Carry a reusable water bottle with you and aim for at least 8 cups of water a day (more if you’re active).
Tip: Start your morning with a glass of water. This simple act jumpstarts hydration after a night’s sleep and can set a positive tone for the day.
Move Your Body Regularly
Physical activity isn’t just about hitting the gym. Incorporating movement into your daily routine can greatly improve your overall health. Small actions, like taking the stairs, walking during breaks, or doing stretching exercises, can make a big difference over time.
Even if you only have 10 or 15 minutes to spare, a short walk or stretching session can boost your energy and improve focus. Regular movement supports cardiovascular health, strengthens muscles, and releases endorphins that elevate your mood.
Tip: If you have a sedentary job, set a timer to remind you to stand up and stretch or take a short walk every hour.`,
        blogFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "3",
        blogTitle: "Prevention is Power",
        addedOn: "03/02/2024",
        pricingOption: "free",
        status_detail: "1",
        photo: [
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
        ],
        blogFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "4",
        blogTitle: "Eat Well, Live Well",
        addedOn: "08/08/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
        ],
        blogFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "5",
        blogTitle: "Breaking the Stigma",
        addedOn: "20/06/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
        ],
        blogFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const videosData = {
  status: true,
  message: "Content Management Blogs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        videoTitle: "Health Matters",
        addedOn: "12/02/2024",
        description:
          "This is some description about the video that is being played below. This text is here just to fill this place and give you an idea how it will look once the actual video description is here.",
        pricingOption: "premium",
        status_detail: "1",
        video:
          "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
        content: `Health matters because it is the foundation of a fulfilling life. Good health allows us to pursue our goals, enjoy meaningful relationships, and navigate daily challenges with energy and resilience. Taking care of both physical and mental well-being is essential for long-term happiness and success.`,
      },
      {
        id: "2",
        videoTitle: "Everyday Wellness",
        addedOn: "01/12/2024",
        description:
          "This is some description about the video that is being played below. This text is here just to fill this place and give you an idea how it will look once the actual video description is here.",
        pricingOption: "free",
        status_detail: "0",
        video:
          "https://videos.pexels.com/video-files/5721605/5721605-uhd_2732_1440_25fps.mp4",
        content: `Everyday Wellness: Simple Habits for a Healthier, Happier Life In today’s fast-paced world, it can be easy to overlook the small things that contribute to our overall wellness. We’re often focused on big goals like losing weight, reducing stress, or getting fit, but true wellness is about the little things we do every day that keep our minds and bodies healthy. By integrating simple, sustainable habits into our daily routines, we can improve our physical, mental, and emotional well-being. Here’s how to embrace everyday wellness.
Prioritize Hydration
Water is essential for nearly every function in the body, from regulating temperature to aiding digestion and supporting brain function. Yet, many of us don’t drink enough throughout the day. Dehydration can lead to fatigue, headaches, and even mood changes. Make it a habit to drink water regularly. Carry a reusable water bottle with you and aim for at least 8 cups of water a day (more if you’re active).
Tip: Start your morning with a glass of water. This simple act jumpstarts hydration after a night’s sleep and can set a positive tone for the day.
Move Your Body Regularly
Physical activity isn’t just about hitting the gym. Incorporating movement into your daily routine can greatly improve your overall health. Small actions, like taking the stairs, walking during breaks, or doing stretching exercises, can make a big difference over time.
Even if you only have 10 or 15 minutes to spare, a short walk or stretching session can boost your energy and improve focus. Regular movement supports cardiovascular health, strengthens muscles, and releases endorphins that elevate your mood.
Tip: If you have a sedentary job, set a timer to remind you to stand up and stretch or take a short walk every hour.`,
      },
      {
        id: "3",
        videoTitle: "Prevention is Power",
        addedOn: "03/02/2024",
        description:
          "This is some description about the video that is being played below. This text is here just to fill this place and give you an idea how it will look once the actual video description is here.",
        pricingOption: "free",
        status_detail: "1",
        video:
          "https://videos.pexels.com/video-files/4769286/4769286-uhd_1440_2560_24fps.mp4",
      },
      {
        id: "4",
        videoTitle: "Eat Well, Live Well",
        addedOn: "08/08/2024",
        description:
          "This is some description about the video that is being played below. This text is here just to fill this place and give you an idea how it will look once the actual video description is here.",
        pricingOption: "free",
        status_detail: "0",
        video: "sd",
      },
      {
        id: "5",
        videoTitle: "Breaking the Stigma",
        addedOn: "20/06/2024",
        description:
          "This is some description about the video that is being played below. This text is here just to fill this place and give you an idea how it will look once the actual video description is here.",
        pricingOption: "premium",
        status_detail: "1",
        video:
          "https://videos.pexels.com/video-files/5721605/5721605-uhd_2732_1440_25fps.mp4",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const articlesData = {
  status: true,
  message: "Content Management Articles listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        articleTitle: "Managing Type 2 Diabetes",
        addedOn: "12/02/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        content: `Managing Type 2 diabetes involves maintaining healthy blood sugar levels through a combination of lifestyle changes, medications, and regular monitoring. Key aspects include following a balanced diet rich in fiber, whole grains, and lean proteins, along with regular physical activity to improve insulin sensitivity. Medications or insulin therapy may be prescribed to help control glucose levels, and regular check-ups with a healthcare provider are essential to track progress and prevent complications. Managing stress and getting adequate sleep are also important for overall well-being.`,
        articleFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "2",
        articleTitle: "The Rise of Anxiety",
        addedOn: "01/12/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        ],
        content: `Everyday Wellness: Simple Habits for a Healthier, Happier Life In today’s fast-paced world, it can be easy to overlook the small things that contribute to our overall wellness. We’re often focused on big goals like losing weight, reducing stress, or getting fit, but true wellness is about the little things we do every day that keep our minds and bodies healthy. By integrating simple, sustainable habits into our daily routines, we can improve our physical, mental, and emotional well-being. Here’s how to embrace everyday wellness.
Prioritize Hydration
Water is essential for nearly every function in the body, from regulating temperature to aiding digestion and supporting brain function. Yet, many of us don’t drink enough throughout the day. Dehydration can lead to fatigue, headaches, and even mood changes. Make it a habit to drink water regularly. Carry a reusable water bottle with you and aim for at least 8 cups of water a day (more if you’re active).
Tip: Start your morning with a glass of water. This simple act jumpstarts hydration after a night’s sleep and can set a positive tone for the day.
Move Your Body Regularly
Physical activity isn’t just about hitting the gym. Incorporating movement into your daily routine can greatly improve your overall health. Small actions, like taking the stairs, walking during breaks, or doing stretching exercises, can make a big difference over time.
Even if you only have 10 or 15 minutes to spare, a short walk or stretching session can boost your energy and improve focus. Regular movement supports cardiovascular health, strengthens muscles, and releases endorphins that elevate your mood.
Tip: If you have a sedentary job, set a timer to remind you to stand up and stretch or take a short walk every hour.`,
        articleFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "3",
        articleTitle: "Childhood Obesity",
        addedOn: "03/02/2024",
        pricingOption: "free",
        status_detail: "1",
        photo: [
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        ],
        articleFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "4",
        articleTitle: "Wearable Health Tech",
        addedOn: "08/08/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        ],
        articleFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "5",
        articleTitle: "Breast Cancer Prevention",
        addedOn: "20/06/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        ],
        articleFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const eBooksData = {
  status: true,
  message: "Content Management listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        eBookTitle: "General Health",
        addedOn: "12/02/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://phantom-writing.com/blog/wp-content/uploads/2023/10/ebook4.jpg",
        ],
        description: `Health matters because it is the foundation of a fulfilling life. Good health allows us to pursue our goals, enjoy meaningful relationships, and navigate daily challenges with energy and resilience. Taking care of both physical and mental well-being is essential for long-term happiness and success.`,
        eBookFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "2",
        eBookTitle: "Nutrition & Diet",
        addedOn: "01/12/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://phantom-writing.com/blog/wp-content/uploads/2023/10/ebook4.jpg",
        ],
        description: `Everyday Wellness: Simple Habits for a Healthier, Happier Life In today’s fast-paced world, it can be easy to overlook the small things that contribute to our overall wellness. We’re often focused on big goals like losing weight, reducing stress, or getting fit, but true wellness is about the little things we do every day that keep our minds and bodies healthy. By integrating simple, sustainable habits into our daily routines, we can improve our physical, mental, and emotional well-being. Here’s how to embrace everyday wellness.
Prioritize Hydration
Water is essential for nearly every function in the body, from regulating temperature to aiding digestion and supporting brain function. Yet, many of us don’t drink enough throughout the day. Dehydration can lead to fatigue, headaches, and even mood changes. Make it a habit to drink water regularly. Carry a reusable water bottle with you and aim for at least 8 cups of water a day (more if you’re active).
Tip: Start your morning with a glass of water. This simple act jumpstarts hydration after a night’s sleep and can set a positive tone for the day.
Move Your Body Regularly
Physical activity isn’t just about hitting the gym. Incorporating movement into your daily routine can greatly improve your overall health. Small actions, like taking the stairs, walking during breaks, or doing stretching exercises, can make a big difference over time.
Even if you only have 10 or 15 minutes to spare, a short walk or stretching session can boost your energy and improve focus. Regular movement supports cardiovascular health, strengthens muscles, and releases endorphins that elevate your mood.
Tip: If you have a sedentary job, set a timer to remind you to stand up and stretch or take a short walk every hour.`,
        eBookFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "3",
        eBookTitle: "Chronic Conditions",
        addedOn: "03/02/2024",
        pricingOption: "free",
        status_detail: "1",
        photo: [
          "https://phantom-writing.com/blog/wp-content/uploads/2023/10/ebook4.jpg",
        ],
        description: `Health matters because it is the foundation of a fulfilling life. Good health allows us to pursue our goals, enjoy meaningful relationships, and navigate daily challenges with energy and resilience. Taking care of both physical and mental well-being is essential for long-term happiness and success.`,
        eBookFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "4",
        eBookTitle: "Mental Health",
        addedOn: "08/08/2024",
        pricingOption: "free",
        status_detail: "0",
        photo: [
          "https://phantom-writing.com/blog/wp-content/uploads/2023/10/ebook4.jpg",
        ],
        description: `mental health: is an essential aspect of overall well-being, encompassing emotional, psychological, and social well-being. It affects how we think, feel, and act in daily life, influencing our ability to handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood through adulthood.
However, mental health issues can arise at any point in life, often leading to challenges in functioning or managing daily activities. Conditions like anxiety, depression, bipolar disorder, and schizophrenia are just some of the many disorders that can impact mental health. Fortunately, with the right support and treatment, individuals can lead fulfilling lives despite these challenges.
Emotional Well-being: The ability to experience and express a range of emotions, including joy, sadness, anger, and fear, and to manage these emotions effectively.
Psychological Well-being: Positive self-perception, resilience, and a sense of purpose in life.
Social Well-being: Healthy relationships, the ability to interact well with others, and a sense of belonging in communities or social circles.
Anxiety Disorders: Conditions characterized by excessive fear, worry, or nervousness, such as Generalized Anxiety Disorder (GAD), panic disorder, and social anxiety disorder.`,
        file: "",
        eBookFile: ["https://pdfobject.com/pdf/sample.pdf"],
      },
      {
        id: "5",
        eBookTitle: "Fitness & Exercise",
        addedOn: "20/06/2024",
        pricingOption: "premium",
        status_detail: "1",
        photo: [
          "https://phantom-writing.com/blog/wp-content/uploads/2023/10/ebook4.jpg",
        ],
        eBookFile: ["https://pdfobject.com/pdf/sample.pdf"],
        description: `Everyday Wellness: Simple Habits for a Healthier, Happier Life In today’s fast-paced world, it can be easy to overlook the small things that contribute to our overall wellness. We’re often focused on big goals like losing weight, reducing stress, or getting fit, but true wellness is about the little things we do every day that keep our minds and bodies healthy. By integrating simple, sustainable habits into our daily routines, we can improve our physical, mental, and emotional well-being. Here’s how to embrace everyday wellness.
        Prioritize Hydration
        Water is essential for nearly every function in the body, from regulating temperature to aiding digestion and supporting brain function. Yet, many of us don’t drink enough throughout the day. Dehydration can lead to fatigue, headaches, and even mood changes. Make it a habit to drink water regularly. Carry a reusable water bottle with you and aim for at least 8 cups of water a day (more if you’re active).
        Tip: Start your morning with a glass of water. This simple act jumpstarts hydration after a night’s sleep and can set a positive tone for the day.
        Move Your Body Regularly
        Physical activity isn’t just about hitting the gym. Incorporating movement into your daily routine can greatly improve your overall health. Small actions, like taking the stairs, walking during breaks, or doing stretching exercises, can make a big difference over time.
        Even if you only have 10 or 15 minutes to spare, a short walk or stretching session can boost your energy and improve focus. Regular movement supports cardiovascular health, strengthens muscles, and releases endorphins that elevate your mood.
        Tip: If you have a sedentary job, set a timer to remind you to stand up and stretch or take a short walk every hour.`,
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
// export const shopProductsData = {
//   status: true,
//   message: "Appointment logs",
//   detail: {
//     current_page: 1,
//     data: [
//       {
//         id: "1",
//         productName: "HealFast",
//         addedOn: "12/02/2024",
//         category: "Pain Relief",
//         status: "1",
//       },
//       {
//         id: "2",
//         productName: "RespiraClear",
//         addedOn: "01/12/2024",
//         category: "Diabetes Care",
//         status: "0",
//       },
//       {
//         id: "3",
//         productName: "PureShield",
//         addedOn: "03/02/2024",
//         category: "Multivitamins",
//         status: "1",
//       },
//       {
//         id: "4",
//         productName: "DigestAid",
//         addedOn: "08/08/2024",
//         category: "Burn Creams",
//         status: "0",
//       },
//       {
//         id: "5",
//         productName: "PharmaFlex",
//         addedOn: "20/06/2024",
//         category: "Joint & Bone Health",
//         status: "1",
//       },
//     ],
//     first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
//     from: 1,
//     last_page: 2,
//     last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
//     links: [
//       {
//         url: null,
//         label: "&laquo; Previous",
//         active: false,
//       },
//       {
//         url: "http://localhost/food_app/admin-api/branches?page=1",
//         label: "1",
//         active: true,
//       },
//       {
//         url: "http://localhost/food_app/admin-api/branches?page=2",
//         label: "2",
//         active: false,
//       },
//       {
//         url: "http://localhost/food_app/admin-api/branches?page=2",
//         label: "Next &raquo;",
//         active: false,
//       },
//     ],
//     next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
//     path: "http://localhost/food_app/admin-api/branches",
//     per_page: 10,
//     prev_page_url: null,
//     to: 10,
//     total: 11,
//   },
// };
export const commissionManagementData = {
  status: true,
  message: "Appointment logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        commission_percentege: 15,
        date: "2024-06-25T14:29:37.000000Z",
        type: "booking",
      },
      {
        id: "2",
        commission_percentege: 15,
        date: "2024-06-25T14:29:37.000000Z",
        type: "order",
      },
      {
        id: "3",
        commission_percentege: 15,
        date: "2024-06-25T14:29:37.000000Z",
        type: "booking",
      },
      {
        id: "4",
        commission_percentege: 15,
        date: "2024-06-25T14:29:37.000000Z",
        type: "order",
      },
      {
        id: "5",
        commission_percentege: 15,
        date: "2024-06-25T14:29:37.000000Z",
        type: "booking",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const subscriptionLogsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "01",
        fullName: "Cindy Anne",
        emailAddress: "cindyanne@gmail.com",
        planName: "Monthly",
        status_detail: "1",
        price: "$10",
        purchaseDate: "20/06/2024",
        expiryDate: "20/06/2024",
        type: "user",
      },
      {
        id: "02",
        fullName: "Louis Thomas",
        emailAddress: "louisthomas@gmail.com",
        planName: "Yearly",
        status_detail: "0",
        price: "$100",
        purchaseDate: "01/12/2024",
        expiryDate: "01/12/2024",
        type: "provider",
      },
      {
        id: "03",
        fullName: "Marie Max",
        emailAddress: "mariemax@gmail.com",
        planName: "Monthly",
        status_detail: "1",
        price: "$10",
        purchaseDate: "03/02/2024",
        expiryDate: "03/02/2024",
        type: "user",
      },
      {
        id: "04",
        fullName: "Victoria Andrew",
        emailAddress: "victoriaandrew@gmail.com",
        planName: "Yearly",
        status_detail: "0",
        price: "$100",
        purchaseDate: "08/08/2024",
        expiryDate: "08/08/2024",
        type: "provider",
      },
      {
        id: "05",
        fullName: "Tom Albert",
        emailAddress: "tomalbert@gmail.com",
        planName: "Monthly",
        status_detail: "1",
        price: "$10",
        purchaseDate: "12/02/2024",
        expiryDate: "12/02/2024",
        type: "provider",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const subscriptionPlansManagementData = {
  status: true,
  message: "Subcription Plan listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        subscriptionTitle: "Premium",
        duration: "Monthly",
        price: 20,
        description:
          "The Premium Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $20 per month.",
        creationDate: "12/01/2024",
        lastModified: "13/01/2024",
        status_detail: "1",
        type: "provider",
      },
      {
        id: "2",
        subscriptionTitle: "Basic",
        duration: "Yearly",
        price: 50,
        description:
          "The Basic Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $50 per month.",
        creationDate: "05/03/2024",
        lastModified: "06/03/2024",
        status_detail: "0",
        type: "user",
      },
      {
        id: "3",
        subscriptionTitle: "Basic",
        duration: "Monthly",
        price: 10,
        description:
          "The Basic Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $10 per month.",
        creationDate: "15/02/2024",
        lastModified: "16/02/2024",
        status_detail: "1",
        type: "provider",
      },
      {
        id: "4",
        subscriptionTitle: "Premium",
        duration: "Yearly",
        price: 100,
        description:
          "The Premium Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $100 per month.",
        creationDate: "08/08/2024",
        lastModified: "09/08/2024",
        status_detail: "0",
        type: "user",
      },
      {
        id: "5",
        subscriptionTitle: "Basic",
        duration: "Monthly",
        price: 10,
        description:
          "The Basic Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $10 per month.",
        creationDate: "22/06/2024",
        lastModified: "23/06/2024",
        status_detail: "1",
        type: "provider",
      },
      {
        id: "6",
        subscriptionTitle: "Premium",
        duration: "Yearly",
        price: 100,
        description:
          "The Premium Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $100 per month.",
        creationDate: "10/05/2024",
        lastModified: "11/05/2024",
        status_detail: "1",
        type: "user",
      },
      {
        id: "7",
        subscriptionTitle: "Basic",
        duration: "Monthly",
        price: 15,
        description:
          "The Basic Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $15 per month.",
        creationDate: "30/07/2024",
        lastModified: "31/07/2024",
        status_detail: "0",
        type: "provider",
      },
      {
        id: "8",
        subscriptionTitle: "Premium",
        duration: "Monthly",
        price: 40,
        description:
          "The Premium Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $40 per month.",
        creationDate: "18/04/2024",
        lastModified: "19/04/2024",
        status_detail: "0",
        type: "user",
      },
      {
        id: "9",
        subscriptionTitle: "Basic",
        duration: "Yearly",
        price: 30,
        description:
          "The Basic Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $30 per month.",
        creationDate: "12/10/2024",
        lastModified: "13/10/2024",
        status_detail: "1",
        type: "provider",
      },
      {
        id: "10",
        subscriptionTitle: "Premium",
        duration: "Monthly",
        price: 60,
        description:
          "The Premium Monthly plan offers enhanced services with exclusive benefits, tailored for high-end users at just $60 per month.",
        creationDate: "22/11/2024",
        lastModified: "23/11/2024",
        status_detail: "1",
        type: "user",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const payoutManagementData = {
  status: true,
  message: "Appointment logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        disbursement_time: 5,
        date: "2024-06-25T14:29:37.000000Z",
        type: "booking",
      },
      {
        id: "2",
        disbursement_time: 5,
        date: "2024-06-25T14:29:37.000000Z",
        type: "order",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const reportsManagementBookingData = {
  status: true,
  message: "Report logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        bookingId: "#987432",
        userName: "John Doe",
        bookingDate: "10/01/2024",
        reportedDate: "11/01/2024",
        message:
          "I am pleased to share the Patient Care Report for September 2024. This month, we saw a 15% increase in patient consultations, primarily in the areas of chronic disease management and preventive health screenings.",
        charges: "$15",
        status: "Resolved",
        type: "booking",
        emailAddress: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        serviceTime: "5:00PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",

        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
      },
      {
        id: "2",
        bookingId: "#564321",
        userName: "Emily Clark",
        bookingDate: "22/02/2024",
        reportedDate: "23/02/2024",
        message:
          "I am pleased to share the Patient Care Report for September 2024. This month, we saw a 15% increase in patient consultations, primarily in the areas of chronic disease management and preventive health screenings.",
        charges: "$25",
        status: "Pending",
        type: "booking",
        emailAddress: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        serviceTime: "5:00PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",

        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
      },
      {
        id: "3",
        bookingId: "#893215",
        userName: "Michael Brown",
        bookingDate: "05/03/2024",
        reportedDate: "06/03/2024",
        message:
          "I am pleased to share the Patient Care Report for September 2024. This month, we saw a 15% increase in patient consultations, primarily in the areas of chronic disease management and preventive health screenings.",
        charges: "$30",
        status: "Resolved",
        type: "booking",
        emailAddress: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        serviceTime: "5:00PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",

        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
      },
      {
        id: "4",
        bookingId: "#109238",
        userName: "Sarah Lee",
        bookingDate: "15/08/2024",
        reportedDate: "16/08/2024",
        message:
          "I am pleased to share the Patient Care Report for September 2024. This month, we saw a 15% increase in patient consultations, primarily in the areas of chronic disease management and preventive health screenings.",
        charges: "$45",
        status: "Pending",
        type: "booking",
        emailAddress: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        serviceTime: "5:00PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",

        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
      },
      {
        id: "5",
        bookingId: "#754632",
        userName: "David King",
        bookingDate: "28/06/2024",
        reportedDate: "29/06/2024",
        message:
          "I am pleased to share the Patient Care Report for September 2024. This month, we saw a 15% increase in patient consultations, primarily in the areas of chronic disease management and preventive health screenings.",
        charges: "$50",
        status: "Resolved",
        type: "booking",
        emailAddress: "someemail@email.com",
        serviceCategory: "Home Health & Rehabilitation Care",
        phone: "+11234567890",
        serviceDate: "14/02/2024",
        serviceTime: "5:00PM",
        address:
          "789 Elmwood Avenue, Suite 202, in the heart of Green Valley, a bustling suburban neighborhood. His home is located in Grandview Apartments, just a few blocks from the Central Park Plaza and the Green Valley Shopping Center.",

        user: {
          name: "Tom albert",
          id: "1",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
        },
        serviceProvider: {
          id: "1",
          photo:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          name: "Victoria Andrew",
          serviceName: "MedLink Solutions service",
        },
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const reportsManagementNewsfeedData = {
  status: true,
  message: "Report logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "11",
        userName: "Tom albert",
        emailAddress: "Tomalbert@email.com",
        phone: "+1238972863",
        status: "Resolved",
        bookingDate: "10/01/2024",
        reportedDate: "11/01/2024",
        charges: "$15",
        reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        type: "newsfeed",
      },
      {
        id: "12",
        userName: "Louis Thomas",
        emailAddress: "LouisThomas@email.com",
        phone: "+1238972863",
        status: "Pending",
        bookingDate: "22/02/2024",
        reportedDate: "23/02/2024",
        charges: "$25",
        reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        type: "newsfeed",
      },
      {
        id: "13",
        userName: "Marie max",
        emailAddress: "Mariemax@email.com",
        phone: "+1238972863",
        status: "Resolved",
        bookingDate: "05/03/2024",
        reportedDate: "06/03/2024",
        charges: "$30",
        reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        type: "newsfeed",
      },
      {
        id: "14",
        userName: "Victoria Andrew",
        emailAddress: "VictoriaAndrew@email.com",
        phone: "+1238972863",
        status: "Pending",
        bookingDate: "15/08/2024",
        reportedDate: "16/08/2024",
        charges: "$45",
        reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        type: "newsfeed",
      },
      {
        id: "15",
        userName: "Cindy Anne",
        emailAddress: "CindyAnne@email.com",
        phone: "+1238972863",
        status: "Resolved",
        bookingDate: "28/06/2024",
        reportedDate: "29/06/2024",
        charges: "$50",
        reason:
          "We’re unable to process your prescription due to missing or incorrect details. Please provide the correct information for us to proceed. The medication you’ve requested is currently out of stock. We’ll notify you once it becomes available, or we can suggest alternatives.",
        type: "newsfeed",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const queriesManagementData = {
  status: true,
  message: "user listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        userName: "Tom Albert",
        emailAddress: "tomalbert@gmail.com",
        userType: "User",
        date: "12/02/2024",
        subject: "A Focus on Tension-Type Headaches and Migraine",
        message:
          "I hope this message finds you well. I would like to bring attention to two prevalent types of headaches: Tension-Type Headaches (TTH) and Migraines. These conditions are frequently encountered in clinical practice and can significantly impact a patient’s quality of life.",
      },
      {
        id: 2,
        userName: "Louis Thomas",
        emailAddress: "louistthomas@gmail.com",
        userType: "Guest",
        date: "01/12/2024",
        subject: "A Focus on Tension-Type Headaches and Migraine",
        message:
          "I hope this message finds you well. I would like to bring attention to two prevalent types of headaches: Tension-Type Headaches (TTH) and Migraines. These conditions are frequently encountered in clinical practice and can significantly impact a patient’s quality of life.",
      },
      {
        id: 3,
        userName: "Marie Max",
        emailAddress: "mariemax@gmail.com",
        userType: "Service Provider",
        date: "03/02/2024",
        subject: "A Focus on Tension-Type Headaches and Migraine",
        message:
          "I hope this message finds you well. I would like to bring attention to two prevalent types of headaches: Tension-Type Headaches (TTH) and Migraines. These conditions are frequently encountered in clinical practice and can significantly impact a patient’s quality of life.",
      },
      {
        id: 4,
        userName: "Victoria Andrew",
        emailAddress: "victoriaandrew@gmail.com",
        userType: "User",
        date: "08/08/2024",
        subject: "A Focus on Tension-Type Headaches and Migraine",
        message:
          "I hope this message finds you well. I would like to bring attention to two prevalent types of headaches: Tension-Type Headaches (TTH) and Migraines. These conditions are frequently encountered in clinical practice and can significantly impact a patient’s quality of life.",
      },
      {
        id: 5,
        userName: "Cindy Anne",
        emailAddress: "cindyanne@gmail.com",
        userType: "Guest",
        date: "08/08/2024",
        subject: "A Focus on Tension-Type Headaches and Migraine",
        message:
          "I hope this message finds you well. I would like to bring attention to two prevalent types of headaches: Tension-Type Headaches (TTH) and Migraines. These conditions are frequently encountered in clinical practice and can significantly impact a patient’s quality of life.",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const bannerAdsManagementData = {
  status: true,
  message: "user listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        brandName: "NeuroRelief",
        brandUrl: "NeuroRelief",
        emailAddress: "neurorelief@gmail.com",
        expiryDate: "2024-02-12",
        postedOn: "12/02/2024",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        status_detail: "1",
      },
      {
        id: "2",
        brandName: "MigraCare",
        brandUrl: "MigraCare",
        emailAddress: "migracare@gmail.com",
        expiryDate: "2024-12-01",
        postedOn: "01/12/2024",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        status_detail: "0",
      },
      {
        id: "3",
        brandName: "SereneNeck",
        brandUrl: "SereneNeck",
        emailAddress: "sereneneck@gmail.com",
        expiryDate: "2024-02-03",
        postedOn: "03/02/2024",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        status_detail: "1",
      },
      {
        id: "4",
        brandName: "CerebraHealth",
        brandUrl: "CerebraHealth",
        emailAddress: "cerebrahealth@gmail.com",
        expiryDate: "2024-08-08",
        postedOn: "08/08/2024",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        status_detail: "0",
      },
      {
        id: "5",
        brandName: "CalmWave Health",
        brandUrl: "CalmWave Health",
        emailAddress: "calmwavehealth@gmail.com",
        expiryDate: "2024-06-20",
        postedOn: "20/06/2024",
        photo: [
          "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
        ],
        status_detail: "1",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const inAppPurchaseManagementData = {
  status: true,
  message: "In-App Purchase Management listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        productTitle: "CephRelief",
        addedOn: "12/02/2024",
        price: 25,
        status_detail: "1",
        fileUrl: "https://example.com/medical-health-document.pdf",
        description:
          "CephaRelief is a fast-acting, clinically formulated solution designed to provide targeted relief from headaches and migraines. Whether you're dealing with tension-type headaches or the debilitating pain of migraines, CephaRelief works swiftly to ease discomfort and restore your well-being.",
      },
      {
        id: "2",
        productTitle: "Headaway",
        addedOn: "01/12/2024",
        price: 25,
        status_detail: "0",
        fileUrl: "https://example.com/medical-health-document.pdf",
        description:
          "CephaRelief is a fast-acting, clinically formulated solution designed to provide targeted relief from headaches and migraines. Whether you're dealing with tension-type headaches or the debilitating pain of migraines, CephaRelief works swiftly to ease discomfort and restore your well-being.",
      },
      {
        id: "3",
        productTitle: "NeuroSoothe",
        addedOn: "03/02/2024",
        price: 25,
        status_detail: "1",
        fileUrl: "https://example.com/medical-health-document.pdf",
        description:
          "CephaRelief is a fast-acting, clinically formulated solution designed to provide targeted relief from headaches and migraines. Whether you're dealing with tension-type headaches or the debilitating pain of migraines, CephaRelief works swiftly to ease discomfort and restore your well-being.",
      },
      {
        id: "4",
        productTitle: "TensionTamer",
        addedOn: "08/08/2024",
        price: 25,
        status_detail: "0",
        fileUrl: "https://example.com/medical-health-document.pdf",
        description:
          "CephaRelief is a fast-acting, clinically formulated solution designed to provide targeted relief from headaches and migraines. Whether you're dealing with tension-type headaches or the debilitating pain of migraines, CephaRelief works swiftly to ease discomfort and restore your well-being.",
      },
      {
        id: "5",
        productTitle: "ReliefZen",
        addedOn: "20/06/2024",
        price: 25,
        status_detail: "1",
        fileUrl: "https://example.com/medical-health-document.pdf",
        description:
          "CephaRelief is a fast-acting, clinically formulated solution designed to provide targeted relief from headaches and migraines. Whether you're dealing with tension-type headaches or the debilitating pain of migraines, CephaRelief works swiftly to ease discomfort and restore your well-being.",
      },
    ],
    first_page_url: "http://localhost/app_purchase_management?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/app_purchase_management?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/app_purchase_management?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/app_purchase_management?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/app_purchase_management?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/app_purchase_management?page=2",
    path: "http://localhost/app_purchase_management",
    per_page: 10,
    prev_page_url: null,
    to: 5,
    total: 5,
  },
};
// export const accountInfo = {
//   accountHolderName: "Tom Albert",
//   accountType: "Savings",
//   bankName: "Bank Abc",
//   routingNumber: "482185491",
//   accountNumber: "22872090"
// };
export const accountInfo = {
  name: "Tom Albert",
  cardNumber: "1121211111111222",
  cvcNumber: "123",
  validityDate: "2025/07/22",
};

export const contactsData = [
  { id: 1, name: "Tom Albert", phone: "+1 1234567890" },
  { id: 2, name: "John Doe", phone: "+1 9876543210" },
  { id: 3, name: "Liam", phone: "+1 9876543210" },
  { id: 4, name: "Lucas", phone: "+1 9876543210" },
  { id: 5, name: "Elijah", phone: "+1 9876543210" },
  { id: 6, name: "Henry", phone: "+1 9876543210" },
];
export const paymentLogsBookingData = {
  status: true,
  message: "Payment Logs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        bookingId: "#987654",
        bookingCharges: "$15",
        commission: "$5",
        bookingDate: "10/02/2024",
        paymentDate: "10/02/2024",
      },
      {
        id: "2",
        bookingId: "#123789",
        bookingCharges: "$25",
        commission: "$7",
        bookingDate: "01/05/2024",
        paymentDate: "01/05/2024",
      },
      {
        id: "3",
        bookingId: "#456123",
        bookingCharges: "$35",
        commission: "$10",
        bookingDate: "20/03/2024",
        paymentDate: "20/03/2024",
      },
      {
        id: "4",
        bookingId: "#234567",
        bookingCharges: "$45",
        commission: "$12",
        bookingDate: "15/07/2024",
        paymentDate: "15/07/2024",
      },
      {
        id: "5",
        bookingId: "#890123",
        bookingCharges: "$55",
        commission: "$15",
        bookingDate: "25/06/2024",
        paymentDate: "25/06/2024",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const paymentLogsOrderData = {
  status: true,
  message: "Payment Logs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        shopName: "CareFirst Pharmacy",
        customerName: "Tom albert",
        orderId: "#987654",
        commission: "$5",
        orderDate: "10/02/2024",
        amount: "$15",
      },
      {
        id: "2",
        shopName: "PharmaPlus",
        customerName: "louis Thomas",
        orderId: "#123789",
        commission: "$7",
        orderDate: "01/05/2024",
        amount: "$25",
      },
      {
        id: "3",
        shopName: "HealthWise Pharmacy",
        customerName: "Marie max",
        orderId: "#456123",
        commission: "$10",
        orderDate: "20/03/2024",
        amount: "$35",
      },
      {
        id: "4",
        shopName: "Nature’s Remedy Pharmacy",
        customerName: "Victoria Andrew",
        orderId: "#234567",
        commission: "$12",
        orderDate: "15/07/2024",
        amount: "$45",
      },
      {
        id: "5",
        shopName: "LifeLine Drugstore",
        customerName: "Cindy Anne",
        orderId: "#890123",
        commission: "$15",
        orderDate: "25/06/2024",
        amount: "$55",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const paymentLogsInAppData = {
  status: true,
  message: "Payment Logs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        orderId: "#987654",
        customerName: "Tom albert",
        orderDate: "10/02/2024",
        amount: "$15",
      },
      {
        id: "2",
        orderId: "#123789",
        customerName: "louis Thomas",
        orderDate: "01/05/2024",
        amount: "$25",
      },
      {
        id: "3",
        orderId: "#456123",
        customerName: "Marie max",
        orderDate: "20/03/2024",
        amount: "$35",
      },
      {
        id: "4",
        orderId: "#234567",
        customerName: "Victoria Andrew",
        orderDate: "15/07/2024",
        amount: "$45",
      },
      {
        id: "5",
        orderId: "#890123",
        customerName: "Cindy Anne",
        orderDate: "25/06/2024",
        amount: "$55",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const faqs = [
  {
    question: "What Are Your Hours Of Operation?",
    answerType: "video",
    answer: "",
    image: null,
    video:
      "https://videos.pexels.com/video-files/8471681/8471681-uhd_2732_1440_25fps.mp4",
  },
  {
    question: "How Can I Make An Appointment?",
    answerType: "text",
    answer: "Appointments can be made by calling our office ...",
    image: null,
    video: null,
  },
  {
    question: "What Do I Do In Case Of A Medical Emergency?",
    answerType: "image",
    answer: "",
    image:
      "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854063.jpg?semt=ais_hybrid",
    video: null,
  },
];

export const counterData = [
  {
    value: "50000",
    symbol: "+",
    label: "Clients Supported",
  },
  {
    value: "75",
    symbol: "+",
    label: "Certified Therapists",
  },
  { value: "100", symbol: "+", label: "Treatment Programs" },
  { value: "85", symbol: "%", label: "Improved Outcomes" },
];

export const aimsData = {
  status: true,
  detail: {
    title: "Our Aims",
    subtitle: "We create a safe & supportive space",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
};

export const productData = {
  status: true,
  message: "All Products",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Drug Consultation 1",
        description:
          "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
        category: "abc Category 1",
        price: "10.00",
        reviews: "720 reviews",
        image: images.serviceImg1,
        wishList: true,
        rating: "5",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },

      {
        id: 2,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$20.00",
        reviews: "720 reviews",
        image: images.serviceImg2,
        wishList: true,
        rating: "1.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$40.00",
        reviews: "720 reviews",
        image: images.serviceImg3,
        wishList: true,
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Drug Consultation 1",
        category: "abc Category 1",
        price: "$50.00",
        reviews: "720 reviews",
        image: images.serviceImg4,
        wishList: true,
        rating: "4.5",
        reviews: {
          count: 57,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$60.00",
        reviews: "720 reviews",
        image: images.serviceImg5,
        wishList: true,
        rating: "4.5",
      },
      {
        id: 6,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$100.00",
        reviews: "720 reviews",
        image: images.serviceImg6,
        wishList: true,
      },
      {
        id: 7,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$30.00",
        reviews: "720 reviews",
        image: images.serviceImg3,
        wishList: true,
        rating: "4.5",
      },
      {
        id: 8,
        title: "Drug Consultation 2",
        category: "abc Category",
        price: "$30.00",
        reviews: "720 reviews",
        image: images.serviceImg2,
        wishList: true,
        rating: "5",
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};

export const servicesData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$200.00",
        rating: 4.0,
        // reviews: "1.21K reviews",
        image: images.serviceImg1,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 1000,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$50.00",
        rating: 4.8,
        reviews: "890 reviews",
        image: images.serviceImg2,
        isWishListed: false,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$350.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};
export const newServicesData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$200.00",
        rating: 4.0,
        // reviews: "1.21K reviews",
        image: images.newServiceImg,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
      },
      {
        id: 2,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$50.00",
        rating: 4.8,
        reviews: "890 reviews",
        image: images.serviceImg2,
        isWishListed: false,
        provider_name: "ABC Service Provider Name",
      },
      {
        id: 3,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
      },
      {
        id: 4,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
      },
      {
        id: 5,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$350.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
      },
      {
        id: 6,
        title: "Services Name",
        category: "abc",
        quick: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};

export const servicesProviderData = {
  status: true,
  message: "Service Provider",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        name: "Kristina Castle",
        biodata:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        category: "Abc Category",
        rating: 5.0,
        reviews: "1.2K",
        image: images.serviceImg1,
        wishList: true,
        user_id: 1,
      },
      {
        id: 2,
        name: "Kristina Castle",
        category: "Abc Category",
        rating: 4.8,
        reviews: "890",
        image: images.serviceImg2,
        wishList: true,
        user_id: 2,
      },
      {
        id: 3,
        name: "Kristina Castle",
        category: "Abc Category",
        rating: 4.9,
        reviews: "720",
        image: images.serviceImg3,
        wishList: true,
        user_id: 3,
      },
      {
        id: 4,
        name: "Kristina Castle",
        category: "Abc Category",
        rating: 4.9,
        reviews: "720",
        image: images.serviceImg3,
        wishList: true,
        user_id: 4,
      },
      {
        id: 5,
        name: "Kristina Castle",
        category: "Abc Category",
        rating: 4.9,
        reviews: "720",
        image: images.serviceImg3,
        wishList: true,
        user_id: 5,
      },
      {
        id: 6,
        name: "Kristina Castle",
        category: "Abc Category",
        rating: 4.9,
        reviews: "720",
        image: images.serviceImg3,
        wishList: true,
        user_id: 6,
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const emergencyContactData = [
  { id: 1, name: "Tom Albert", phone: "+11234567890" },
  { id: 2, name: "John Doe", phone: "+19876543210" },
  { id: 3, name: "Liam", phone: "+19876543210" },
  { id: 4, name: "Lucas", phone: "+19876543210" },
  { id: 5, name: "Elijah", phone: "+19876543210" },
  { id: 6, name: "Henry", phone: "+19876543210" },
  { id: 7, name: "Henry", phone: "+19876543210" },
  { id: 8, name: "Albert", phone: "+19876543110" },
];
export const userAddEmergencyContactData = [
  {
    id: 1,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 2,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 3,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 4,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 5,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 6,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 7,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
  {
    id: 8,
    name: "ABC Contact",
    contact_no: "123-456-789",
  },
];

export const SubscriptionData = {
  status: true,
  message: "Payment Logs listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Basic",
        subTitle: "Subscription Plan",
        duration: "Month",
        price: "50",
        featuresList: [
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
        ],
      },
      {
        id: 2,
        title: "Standard",
        subTitle: "Subscription Plan",
        duration: "Month",
        price: "100",
        featuresList: [
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
        ],
      },
      {
        id: 3,
        title: "Premium",
        subTitle: "Subscription Plan",
        duration: "Month",
        price: "200",
        featuresList: [
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
          { item: "Lorem Ipsum is simply dummy text" },
        ],
      },
    ],
  },
};

export const subscriptionLogsUserData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        planName: "Monthly",
        price: "100",
        purchase_date: "2024-06-25T14:29:37.000000Z",
        expiry_date: "2024-06-26T14:29:37.000000Z",
        status_detail: "1",
      },
      {
        id: 2,
        planName: "Yearly",
        price: "10",
        purchase_date: "2024-06-25T14:29:37.000000Z",
        expiry_date: "2024-06-26T14:29:37.000000Z",
        type: "provider",
        status_detail: "0",
      },
      {
        id: 3,
        planName: "Monthly",
        price: "10",
        purchase_date: "2024-06-25T14:29:37.000000Z",
        expiry_date: "2024-06-26T14:29:37.000000Z",
        type: "provider",
        status_detail: "1",
      },
      {
        id: 4,
        planName: "Yearly",
        price: "10",
        purchase_date: "2024-06-25T14:29:37.000000Z",
        expiry_date: "2024-06-26T14:29:37.000000Z",
        type: "provider",
        status_detail: "0",
      },
      {
        id: 5,
        planName: "Monthly",
        price: "10",
        purchase_date: "2024-06-25T14:29:37.000000Z",
        expiry_date: "2024-06-26T14:29:37.000000Z",
        type: "provider",
        status_detail: "1",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const bookingsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "pending",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
      {
        id: 2,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "pending",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
      },
      {
        id: 3,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "rejected",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",

        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
        rejection_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
      },
      {
        id: 4,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "rejected",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        rejection_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
      },
      {
        id: 5,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "requested",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
      },
      {
        id: 6,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "requested",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        floor: "Lorem ipsum dolor",
        city: "Newyork",
      },
      {
        id: 7,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "approved",
        status: "In-Progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
      {
        id: 8,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "approved",
        status: "In-Progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
      {
        id: 9,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "approved",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
      {
        id: 10,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "approved",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },

      {
        id: 11,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "approved",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
      {
        id: 12,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "approved",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

// Testing wil be delete
export const addsManageData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        status: 1,
        status_detail: "Approved",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "user",
        user_detail: "User",
        email: "tomalbert@gmail.com",
        payment_status: "Paid",
        subscription_plan: "Weekly Plan",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 2,
        status: 0,
        status_detail: "Rejected",
        full_name: "Tom",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "subadmin",
        user_detail: "Sub Admin",
        email: "tomalbert@gmail.com",
        payment_status: "Unpaid",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 3,
        status: 1,
        status_detail: "Pending",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "subadmin",
        user_detail: "Sub Admin",
        email: "tomalbert@gmail.com",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 4,
        status: 0,
        status_detail: "Rejected",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "user",
        user_detail: "User",
        email: "tomalbert@gmail.com",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 5,
        status: 1,
        status_detail: "Approved",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "subadmin",
        user_detail: "Sub Admin",
        email: "tomalbert@gmail.com",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 6,
        status: 0,
        status_detail: "Approved",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "user",
        user_detail: "User",
        payment_status: "Unpaid",
        email: "tomalbert@gmail.com",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
      {
        id: 7,
        status: 0,
        status_detail: "Pending",
        full_name: "Tom Albert",
        club_name: "Abc",
        club_organization: "Abc",
        location: "Lorem ipsum dolor sit amet,",
        user_type: "user",
        user_detail: "User",
        email: "tomalbert@gmail.com",
        contact_no: "00-000000-00",
        purpose_advertisement:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        created_at: "2024-05-27T12:39:18.000000Z",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

// Testing wil be delete
export const AppPurchaseData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Title",
        price: "20",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv",
      },
      {
        id: 2,
        title: "Title",
        price: "20",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv",
      },
      {
        id: 3,
        title: "Title",
        price: "20",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv",
      },
      {
        id: 4,
        title: "Title",
        price: "20",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv",
      },
      {
        id: 5,
        title: "Title",
        price: "20",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const userFaqData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 4,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const educationVideoData = {
  status: true,
  message: "Education Videos",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Video Title 1",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg1,
        video_path:
          "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
        isSaved: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 3,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 4,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg4,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
      {
        id: 2,
        title: "Video Title 2",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg2,
        video_path:
          "https://videos.pexels.com/video-files/5721605/5721605-uhd_2732_1440_25fps.mp4",
        isSaved: false,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 1,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg1,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 3,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 4,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
      {
        id: 3,
        title: "Video Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg3,
        video_path:
          "https://videos.pexels.com/video-files/4769286/4769286-uhd_1440_2560_24fps.mp4",
        isSaved: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg1,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 1,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 4,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
      {
        id: 4,
        title: "Video Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg4,
        video_path:
          "https://videos.pexels.com/video-files/5721605/5721605-uhd_2732_1440_25fps.mp4,",
        isSaved: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 1,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg1,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 2,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 3,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
      {
        id: 5,
        title: "Video Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg5,
        video_path:
          "https://videos.pexels.com/video-files/4769286/4769286-uhd_1440_2560_24fps.mp4",
        isSaved: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg1,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 3,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 6,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
      {
        id: 6,
        title: "Video Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "video",
        image: images.serviceImg6,
        video_path:
          "https://videos.pexels.com/video-files/5721605/5721605-uhd_2732_1440_25fps.mp4,",
        isSaved: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 5,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg1,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 3,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg2,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
          {
            id: 2,
            title: "Video Title 1",
            language: "English",
            date: "2024-06-26T14:29:37.000000Z",
            type: "video",
            image: images.serviceImg3,
            video_path:
              "https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4",
            is_save: true,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const educationEBooksData = {
  status: true,
  message: "Education E Books logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 2,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 5,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 4,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 3,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 1,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 6,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 4,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg4,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 4,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 6,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 5,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg5,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 1,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 6,
        title: "E-Book Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "ebook",
        image: images.serviceImg6,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const educationArticlesData = {
  status: true,
  message: "Education Article",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Article Title 1",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 2,
        title: "Article Title 2",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg2,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 1,
            title: "Article Title 1",
            type: "article",
            description: "Related Article 1 description",
          },
          {
            id: 4,
            title: "Article Title 4",
            type: "article",
            description: "Related Article 4 description",
          },
        ],
      },
      {
        id: 3,
        title: "Article Title 3",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg3,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 1,
            title: "Article Title 1",
            type: "article",
            description: "Related Article 1 description",
          },
          {
            id: 5,
            title: "Article Title 5",
            type: "article",
            description: "Related Article 5 description",
          },
        ],
      },
      {
        id: 4,
        title: "Article Title 4",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg4,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 6,
            title: "Article Title 6",
            type: "article",
            description: "Related Article 6 description",
          },
        ],
      },
      {
        id: 5,
        title: "Article Title 5",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg5,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
          {
            id: 4,
            title: "Article Title 4",
            type: "article",
            description: "Related Article 4 description",
          },
        ],
      },
      {
        id: 6,
        title: "Article Title 6",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "article",
        image: images.serviceImg6,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        relatedArticles: [
          {
            id: 5,
            title: "Article Title 5",
            type: "article",
            description: "Related Article 5 description",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const educationOfflineData = {
  status: true,
  message: "Education Offline",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Offline Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "offline",
        video_image: images.serviceImg1,
        video_path: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 2,
        title: "Offline Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "offline",
        video_image: images.serviceImg1,
        video_path: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 4,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 3,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
      {
        id: 3,
        title: "Offline Title",
        language: "English",
        date: "2024-06-26T14:29:37.000000Z",
        type: "offline",
        video_image: images.serviceImg1,
        video_path: images.serviceImg1,
        is_save: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
        relatedArticles: [
          {
            id: 2,
            title: "Article Title 2",
            type: "article",
            description: "Related Article 2 description",
          },
          {
            id: 1,
            title: "Article Title 3",
            type: "article",
            description: "Related Article 3 description",
          },
        ],
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const RehabCenterData = {
  status: true,
  message: "branch listing",
  detail: {
    data: {
      id: 1,
      title: "Rehab Centre Near You",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  },
};

export const blockUserData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        user_name: "Abc Name",
        type: "User Type",
        status_detail: "1",
      },
      {
        id: 2,
        user_name: "Abc Name",
        type: "User Type",
        status_detail: "1",
      },
      {
        id: 3,
        user_name: "Abc Name",
        type: "User Type",
        status_detail: "1",
      },
      {
        id: 4,
        user_name: "Abc Name",
        type: "User Type",
        status_detail: "1",
      },
      {
        id: 5,
        user_name: "Abc Name",
        type: "User Type",
        status_detail: "1",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const wishListData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$20.00",
        rating: 4.0,
        // reviews: "1.21K reviews",
        image: images.serviceImg1,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 1000,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Pet walker",
        category: "abc Category",
        price: "$50.00",
        rating: 4.8,
        reviews: "890 reviews",
        image: images.serviceImg2,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Pet walker",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};

export const orderLogsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        shop_name: "Shop ABC",
        status: "delivered",
        contact_information: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          email: "tomalbert@gmail.com",
        },
        shipping_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
        billing_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
      },
      {
        id: 2,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        shop_name: "Shop ABC",
        status: "cancelled",
      },
      {
        id: 3,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        shop_name: "Shop ABC",
        status: "pending",
      },
      {
        id: 4,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        shop_name: "Shop ABC",
        status: "delivered",
      },
      {
        id: 5,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        shop_name: "Shop ABC",
        status: "cancelled",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const providerOrderLogsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        commission_amount: "100",
        status: "delivered",
        delivered_at: "E Delivery",
        contact_information: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          email: "tomalbert@gmail.com",
        },
        shipping_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
        billing_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
      },
      {
        id: 2,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        commission_amount: "100",
        status: "cancelled",
        delivered_at: "E Delivery",
        cancellation_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contact_information: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          email: "tomalbert@gmail.com",
        },
        shipping_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
        billing_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
      },

      {
        id: 3,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        commission_amount: "100",
        delivered_at: "E Delivery",
        status: "pending",
        contact_information: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          email: "tomalbert@gmail.com",
        },
        shipping_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
        billing_address: {
          user_name: "Tom Albert",
          phone_number: "+19159969739",
          address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod",
          country: "XYZ",
          state: "XYZ",
          city: "XYZ",
          zip_code: "123456",
        },
      },
      {
        id: 4,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        commission_amount: "100",
        status: "delivered",
      },
      {
        id: 5,
        order_id: "#123456",
        order_date: "2024-06-25T14:29:37.000000Z",
        amount: "100",
        commission_amount: "100",
        shop_name: "Shop ABC",
        status: "cancelled",
        cancellation_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const providerservicesData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$200.00",
        service_type: "offline",
        rating: 4.0,
        // reviews: "1.21K reviews",
        image: [images.serviceImg1],
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        booking_onsite: "30",
        booking_offsite: "30",
        add_address: "visit_user",
        maplink: "https://maps.app.goo.gl/nsB3rEm86YRny5Hx6",
        mondayTime: [
          { startTime: "09:00", endTime: "12:00" },
          { startTime: "13:00", endTime: "17:00" },
        ],
        wednesdayTime: [{ startTime: "10:00", endTime: "18:00" }],
        fridayTime: [{ startTime: "09:00", endTime: "15:00" }],

        reviews: {
          count: 900,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Pet walker",
        category: "abc Category",
        price: "$50.00",
        rating: 4.8,
        reviews: "890 reviews",
        image: images.serviceImg2,
        isWishListed: false,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Pet walker",
        category: "abc Category",
        price: "$350.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Drug Consultation",
        category: "abc Category",
        price: "$30.00",
        rating: 4.9,
        reviews: "720 reviews",
        image: images.serviceImg3,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        reviews: {
          count: 157,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};

export const providerBookingsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "pending",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        platform_commission: "250",
        request_charges: "20",
      },
      {
        id: 2,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "pending",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
        platform_commission: "250",
      },
      {
        id: 3,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "rejected",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",

        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
        platform_commission: "250",
        rejection_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
      },
      {
        id: 4,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "rejected",
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        rejection_reason:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
        platform_commission: "250",
      },
      {
        id: 5,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "requested",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_service:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
        request_charges: "20",
        platform_commission: "250",
      },
      {
        id: 6,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "requested",
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        floor: "Lorem ipsum dolor",
        city: "Newyork",
        request_charges: "20",
        platform_commission: "250",
      },
      {
        id: 7,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "online",
        charges: "10",
        approval_status: "approved",
        status: "In-Progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_charges: "20",
        platform_commission: "250",
      },
      {
        id: 8,
        title: "Drug Consultation",
        category: "Abc",
        provider_name: "Athalia Putri",
        provider_image: images.srvProviderImg,
        type: "onsite",
        charges: "10",
        approval_status: "approved",
        status: "In-Progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        user_name: "User Name",
        phone_number: "+1561555768",
        email_address: "abc@gmail.com",
        address: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        location: "test",
        service_date: "2024-06-26T14:29:37.000000Z",
        request_charges: "20",
        platform_commission: "250",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const providerpaymentLogsData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        order_id: "#1234",
        order_at: "2024-06-25T14:29:37.000000Z",
        payment_at: "2024-06-25T14:29:37.000000Z",
        order_amount: "250",
        amount: "350",
        commission: "300",
        order_status: "Order",
      },
      {
        id: 2,
        order_id: "#1234",
        order_at: "2024-06-25T14:29:37.000000Z",
        payment_at: "2024-06-25T14:29:37.000000Z",
        order_amount: "250",
        amount: "350",
        commission: "300",
        order_status: "Booking",
      },
      {
        id: 3,
        order_id: "#1234",
        order_at: "2024-06-25T14:29:37.000000Z",
        payment_at: "2024-06-25T14:29:37.000000Z",
        order_amount: "250",
        amount: "350",
        commission: "300",
        order_status: "Order",
      },
      {
        id: 4,
        order_id: "#1234",
        order_at: "2024-06-25T14:29:37.000000Z",
        payment_at: "2024-06-25T14:29:37.000000Z",
        order_amount: "250",
        amount: "350",
        commission: "300",
        order_status: "Booking",
      },
      {
        id: 5,
        order_id: "#1234",
        order_at: "2024-06-25T14:29:37.000000Z",
        payment_at: "2024-06-25T14:29:37.000000Z",
        order_amount: "250",
        amount: "350",
        commission: "300",
        order_status: "Booking",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const bankManagementData = {
  new: true,
  id: 1,
  account_holder_name: "Elbert James",
  account_number: "1234567234567123",
  status: 1,
  created_at: "2024-06-25T14:29:37.000000Z",
  account_type: "saving",
  bank_name: "bank_abc",
  routing_number: "123456789",
};
export const providershopData = {
  status: true,
  message: "My Shop",
  detail: {
    current_page: 1,
    data: {
      id: 1,
      shop_banner: [images.shopBanner],
      shop_name: "Abc",
      delivery_fees: "250",
      products: [
        {
          id: 1,
          status: 1,
          product_title: "Product Abc 1",
          product_category: "producta",
          product_amount: "50",
          product_quantity: "5",
          product_description:
            "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
          deliverey_type: "edelivery",
          image: images.serviceImg1,
        },
        {
          id: 2,
          status: 1,
          product_title: "Product Abc 2",
          product_category: "productb",
          product_amount: "50",
          product_quantity: "5",
          product_description:
            "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
          deliverey_type: "normal",
          image: [images.serviceImg1, images.serviceImg2],
        },
        {
          id: 3,
          status: 0,
          product_title: "Product Abc",
          product_category: "productc",
          product_amount: "50",
          product_description:
            "DigestAid is designed to support every aspect of your digestive health, offering targeted solutions for a wide range of digestive concerns. Whether you need relief from discomfort or want to maintain a healthy gut, DigestAid has a product to suit your needs.",
          deliverey_type: "edelivery",
          image: images.serviceImg1,
        },
      ],
    },
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const appointmentsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 2,
        status: "in-progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "3",
      },
      {
        id: 3,
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        session_type: "Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "3",
      },
      {
        id: 4,
        status: "cancelled",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "2",
        reason:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        id: 5,
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Chat",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 6,
        status: "in-progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Chat",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 7,
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Chat",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 8,
        status: "cancelled",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Chat",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
        reason:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        id: 9,
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Video Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 10,
        status: "in-progress",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Video Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 11,
        status: "past",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Video Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
      },
      {
        id: 12,
        status: "cancelled",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Quick",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Video Call",
        amount: "$10",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        rating: "4",
        reason:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const paymentLogsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        booking_id: "#123456",
        payment_date: "20/05/2022",
        total_amount: "$10",
        recieved_amount: "$10",
        commision: "$10",
      },
      {
        id: 2,
        booking_id: "#123456",
        payment_date: "20/05/2022",
        total_amount: "$10",
        recieved_amount: "$10",
        commision: "$10",
      },
      {
        id: 3,
        booking_id: "#123456",
        payment_date: "20/05/2022",
        total_amount: "$10",
        recieved_amount: "$10",
        commision: "$10",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const ratingReviewsData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Services Name",
        category: "abc",
        quick: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit",
        chat: "$30.00",
        call: "$30.00",
        video_call: "$30.00",
        price: "$200.00",
        rating: 4.0,
        // reviews: "1.21K reviews",
        image: images.serviceImg1,
        isWishListed: true,
        provider_name: "ABC Service Provider Name",
        reviews: {
          count: 1000,
          comments: [
            {
              user: {
                name: "D. David",
                "photo-path":
                  "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
              },
              comment:
                "Excellent product for digestive relief! DigestAid worked wonders for my bloating and indigestion. After using it for just a week, I feel so much better. Highly recommend it for anyone with digestive discomfort",
              rating: 2,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Ai Boi",
                "photo-path":
                  "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
              },
              comment:
                "Great for maintaining gut health. I've been using DigestAid regularly, and I've noticed a significant improvement in my overall digestive health. It's a great supplement to keep my gut in check.",
              rating: 4,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
              },
              comment:
                "Gentle and effective. I have a sensitive stomach, and DigestAid has been the perfect solution. It’s gentle on my system while effectively easing discomfort after meals.",
              rating: 5,
              timestamp: "Jul 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp",
              },
              comment:
                "Versatile digestive support. Whether I’m feeling gassy, bloated, or just need help digesting heavy meals, DigestAid always comes through. I like that it targets various digestive issues in one product",
              rating: 4,
              timestamp: "Dec 14, 2023",
            },
            {
              user: {
                name: "Athalia Putri",
                "photo-path":
                  "https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg",
              },
              comment:
                "A must-have for gut health enthusiasts. DigestAid has become a staple in my daily routine. It's helped me stay regular and feel lighter throughout the day. It’s a comprehensive solution for anyone focused on gut health",
              rating: 3,
              timestamp: "Feb 16, 2024",
            },
          ],
        },
      },
    ],
  },
  first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
  from: 1,
  last_page: 2,
  last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/food_app/admin-api/branches?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
  path: "http://localhost/food_app/admin-api/branches",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 11,
};

export const chatReportDetailsData = {
  status: true,
  message: "Subscription logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        status: "upcoming",
        booking_id: "#123",
        booking_date: "2024-06-26T14:29:37.000000Z",
        appointment_type: "Standard",
        appointment_date: "20/05/2022",
        appointment_charges: "$10.00",
        appointment_time: "12:00 PM - 12:30 PM",
        category: "Education",
        sub_category: "Langauge",
        user_name: "User A",
        user_number: "+1 1234567890",
        user_email: "alvinaaric1@gmail.com",
        session_type: "Call",
        amount: "$10",
        report_date: "2024-06-29T14:29:37.000000Z",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const slotManagementData = {
  status: true,
  message: "All Service Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 765,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 22,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:35.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "updated",
        referenceable: null,
        reference: {
          id: 22,
          name: "Order Medication",
          category_name: "Abc Category",
          description: "Vero doloribus et mo",
          price: "273",
          status: "1",
          type: "homecare",
          created_by: 1,
          created_at: "2025-04-22T07:05:48.000000Z",
          updated_at: "2025-05-27T14:35:21.000000Z",
          status_detail: "Active",
        },
      },
      {
        id: 759,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 23,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:24.000000Z",
        updated_at: "2025-05-27T14:55:24.000000Z",
        modification_status: "active",
        referenceable: null,
        reference: {
          id: 23,
          name: "Services Name",
          category_name: "Abc Category",
          description: "Vero doloribus et mo",
          price: "273",
          status: "1",
          type: "homecare",
          created_by: 1,
          created_at: "2025-04-22T07:05:53.000000Z",
          updated_at: "2025-05-27T14:34:54.000000Z",
          status_detail: "Active",
        },
      },
      {
        id: 724,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 26,
        day: "1",
        day_name: "monday",
        index: 0,
        start_time: "10:00:00",
        end_time: "11:00:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:02.000000Z",
        updated_at: "2025-05-27T14:55:02.000000Z",
        modification_status: "active",
        referenceable: null,
        reference: {
          id: 26,
          name: "Services Name",
          category_name: "Abc Category",
          description: "Ultrasound services",
          price: "30",
          status: "1",
          type: "homecare",
          created_by: 1,
          created_at: "2025-04-25T05:10:30.000000Z",
          updated_at: "2025-05-27T14:30:02.000000Z",
          status_detail: "Active",
        },
      },
      {
        id: 718,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 29,
        day: "1",
        day_name: "monday",
        index: 0,
        start_time: "19:30:00",
        end_time: "20:30:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:54:44.000000Z",
        updated_at: "2025-05-27T14:54:44.000000Z",
        modification_status: "active",
        referenceable: null,
        reference: {
          id: 29,
          name: "Services Name",
          category_name: "Abc Category",
          description: "Cardia Check up service in home care service",
          price: "200",
          status: "1",
          type: "homecare",
          created_by: 1,
          created_at: "2025-05-09T10:14:20.000000Z",
          updated_at: "2025-05-27T14:29:32.000000Z",
          status_detail: "Active",
        },
      },
      {
        id: 335,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 5,
        day: "1",
        day_name: "monday",
        index: 0,
        start_time: "02:42:00",
        end_time: "04:10:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-04-23T09:25:04.000000Z",
        updated_at: "2025-04-23T09:25:04.000000Z",
        modification_status: "active",
        referenceable: null,
        reference: {
          id: 5,
          name: "Services Name",
          category_name: "Abc Category",
          description: "best exercise in physician",
          price: "120",
          status: "0",
          type: "homecare",
          created_by: 1,
          created_at: "2025-04-08T09:00:19.000000Z",
          updated_at: "2025-05-27T14:45:29.000000Z",
          status_detail: "Inactive",
        },
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const slotManagementHistoryData = {
  status: true,
  message: "All Slots Data",
  detail: {
    current_page: 1,
    data: [
      {
        id: 974,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 22,
        day: "3",
        day_name: "wednesday",
        index: 0,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-30T13:31:51.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "active",
        slot_id: 974,
      },
      {
        id: 766,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 22,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:35.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "updated",
        slot_id: 766,
      },
      {
        id: 767,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 23,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:35.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "updated",
        slot_id: 767,
      },
      {
        id: 768,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 23,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:35.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "updated",
        slot_id: 768,
      },
      {
        id: 769,
        parent_id: null,
        slot_type: "homecare_service",
        reference_type: "App\\Models\\Service",
        reference_id: 23,
        day: "3",
        day_name: "wednesday",
        index: 2,
        start_time: "16:07:00",
        end_time: "16:08:00",
        status: 1,
        booking_status: "upcoming",
        created_at: "2025-05-27T14:55:35.000000Z",
        updated_at: "2025-05-30T13:31:51.000000Z",
        modification_status: "updated",
        slot_id: 769,
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
export const slotsData = {
  detail: {
    data: [
      {
        slot_id: 974,
        id: 1,
        day: "wednesday",
        date: "5/27/2025",
        slots: [
          {
            start_time: "16:07:00",
            end_time: "16:08:00",
            isBooked: false,
          },
          {
            start_time: "16:07:00",
            end_time: "16:08:00",
            isBooked: false,
          },
        ],
      },
      {
        id: 2,
        slot_id: 974,
        day: "Friday",
        date: "5/27/2025",
        slots: [
          {
            start_time: "16:07:00",
            end_time: "16:08:00",
            isBooked: false,
          },
          {
            start_time: "16:07:00",
            end_time: "16:08:00",
            isBooked: false,
          },
        ],
      },
      {
        id: 3,
        slot_id: 974,
        day: "friday",
        date: "5/27/2025",
        slots: [
          {
            start_time: "19:05:00",
            end_time: "23:08:00",
            isBooked: false,
          },
          {
            start_time: "19:05:00",
            end_time: "23:08:00",
            isBooked: false,
          },
        ],
      },
      {
        id: 3,
        slot_id: 974,
        day: "sunday",
        date: "5/27/2025",
        slots: [
          {
            start_time: "19:05:00",
            end_time: "20:05:00",
            isBooked: false,
          },
          {
            start_time: "19:05:00",
            end_time: "20:05:00",
            isBooked: false,
          },
        ],
      },
    ],
  },
};
