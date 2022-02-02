import axios, { AxiosResponse } from "axios";
import {
  IDataLogIn,
  IEmployee,
  IResponseDataUser,
  IUserData,
} from "./interfaces";

const urlBase = "https://empman-uladziby.herokuapp.com";
//const urlBase = "http://localhost:4000";
const mainUrl = `${urlBase}/main`;
const login = `${urlBase}/login`;
const logout = `${urlBase}/logout`;
const employees = `${urlBase}/main/emp`;
const detail = `${urlBase}/detail`;
const registerUser = `${urlBase}/register`;

const headers = {
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "true",
  },
};
const instAxios = axios.create({
  /* withCredentials: true, */
  baseURL: `${urlBase}`,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "true",
  },
});

export async function getAllUsers(): Promise<AxiosResponse> {
  return await axios.get(mainUrl);
}

export async function checkLogIn(
  data: IDataLogIn
): Promise<AxiosResponse<IUserData> | undefined> {
  try {
    console.log(data);
    const res = await instAxios.post("/login", data);
    return res;
  } catch (e) {
    console.log(e, "ups");
    alert("error ");
  }
}

export async function Logout(
  data: boolean
): Promise<AxiosResponse | undefined> {
  try {
    console.log(data);
    return await instAxios.post(logout, false);
  } catch (e) {
    console.log(e, "logout is failed");
  }
}

export async function getAllEmployees(): Promise<AxiosResponse> {
  return await instAxios.get(employees, headers);
}

export async function deleteEmp(
  id: string
): Promise<AxiosResponse | undefined> {
  try {
    return await instAxios.delete(`${employees}/:${id}`);
  } catch (error) {
    console.log(error, "delete");
  }
}

export async function createEmp(): Promise<AxiosResponse | undefined> {
  try {
    return await instAxios.post(`${employees}`);
  } catch (error) {
    console.log(error, "delete");
  }
}

export async function getDataEmp(
  id: string
): Promise<AxiosResponse | undefined> {
  try {
    return await instAxios.get(`${detail}/:${id}`);
  } catch (error) {
    console.log(error, "user not found");
  }
}

export async function updateDetailEmp(
  data: IEmployee,
  id: string
): Promise<AxiosResponse | undefined> {
  try {
    return await instAxios.put(`/detail/:${id}`, data);
  } catch (error) {
    console.log(error, "user not found");
  }
}
//for register new user
export async function createNewUser(
  data: IUserData
): Promise<AxiosResponse | undefined> {
  try {
    return await instAxios.post(`${registerUser}`, data, headers);
  } catch (error) {
    console.log(error, "user not create");
  }
}
