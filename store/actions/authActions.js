//
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

// Action Types
import * as actionType from "./types";
import { CART_LIST, HOME } from "../../components/Navigation/types";

export const signup = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post(`/signup`, userData);

    dispatch(setUser(res.data.token));
    navigation.navigate(CART_LIST);
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/signin`, userData);
      dispatch(setUser(res.data.token));
      console.log("2");
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = (history) => {
  return setUser();
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) dispatch(setUser());
    else dispatch(setUser(token));
  }

  dispatch(setUser());
};

const setUser = (token) => async (dispatch) => {
  console.log(token);
  if (token) {
    await AsyncStorage.setItem("myToken", token);

    dispatch({
      type: actionType.SET_USER,
      payload: decode(token),
    });
  } else {
    await AsyncStorage.removeItem("@MyApp_key");
    dispatch({
      type: actionType.SET_USER,
      payload: null,
    });
  }
};
