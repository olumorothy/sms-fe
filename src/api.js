import axios from "axios";

const API_URL = "http://localhost:9090/api/v1/";

const instance = axios.create({
  baseURL: API_URL,
});

export const studentLogin = async (email, password) => {
  const studentData = {
    email,
    password,
  };
  try {
    const response = await instance.post("students/login", studentData);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
