import { useDispatch } from "react-redux";
import axios from "axios";
import { buildFormData } from "../Utils/helper";
import {
  setData,
  setRoles,
  setToken,
  logout as logoutAction,
} from "../Store/actions";

import { logout } from "./Api";

export const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (route, params = {}) => {
    try {
      const fd = new FormData();
      buildFormData(fd, params);

      const response = await axios.post(route, fd);
      const responseData = response?.data?.data;

      const { access_token, user } = responseData;

      // Update Redux state
      dispatch(setToken(access_token));
      dispatch(setRoles(user?.role === "consultant" ? "user" : user?.role));
      dispatch(setData(user));
      return response?.data?.status;
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
      return error.response ? error.response.data : { message: 'Unknown error occurred' };
    }
  };

  return login;
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = async (role) => {
    try {
      // await logout(`/${role}-api/auth/logout`);
      setTimeout(() => {
        localStorage.clear();
        dispatch(logoutAction());
        dispatch(setToken());
        dispatch(setRoles());
        dispatch(setData());
      }, 1000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return handleLogout;
};
