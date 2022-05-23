import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signiIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signiUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
