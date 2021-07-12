//
import instance from "./instance";
// Action Types
import * as actionType from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      dispatch({
        type: actionType.FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createShop = (newShop) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newShop) {
      formData.append(key, newShop[key]);
    }

    const res = await instance.post("/shops", formData);

    dispatch({
      type: actionType.CREATE_SHOP,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
