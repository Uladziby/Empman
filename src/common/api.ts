import axios, { AxiosResponse } from "axios";
import { IDataLogIn, IEmployee, IUserData } from "./interfaces";

const urlBase = "http://localhost:4040";
const mainUrl = `${urlBase}/main`;
const login = `${urlBase}/login`;
const logout =`${urlBase}/logout`;
const employees = `${urlBase}/main/emp`;
const detail = `${urlBase}/detail`;
const registerUser = `${urlBase}/register`;



export async function getAllUsers(): Promise<AxiosResponse> {
  return await axios(mainUrl);
}

export async function checkLogIn(data : IDataLogIn):Promise<AxiosResponse| undefined>{
  try{
   return await axios.post(login, data); 
  }catch(e){
   alert('user not exist')
    console.log(e, "ups")
  }
}

export async function Logout(data : boolean) :Promise<AxiosResponse| undefined>{
  try{
    return await axios.post(logout,data);
  }catch(e){
    console.log(e, "logoiut is failed")

  }
}

export async function getAllEmployees(): Promise<AxiosResponse>{
  return await axios(employees)
}

export async function deleteEmp(id : string): Promise<AxiosResponse|undefined>{
  try {
    return await axios.delete(`${employees}/:${id}`)
  } catch (error) {
    console.log(error, "delete")

  }
}

export async function createEmp(): Promise<AxiosResponse|undefined>{
  try {
    return await axios.post(`${employees}`)
  } catch (error) {
    console.log(error, "delete")
  }
}

export async function getDataEmp(id : string): Promise<AxiosResponse|undefined>{
  try {
    return await axios.get(`${detail}/:${id}`)
  } catch (error) {
    console.log(error, "user not found")
  }
}

export async function updateDetailEmp(data : IEmployee, id : string): Promise<AxiosResponse|undefined>{
  try {
    return await axios.patch(`${detail}/:${id}`,data)
  } catch (error) {
    console.log(error, "user not found")
  }
}
//for register new user
export async function createNewUser(data : IUserData): Promise<AxiosResponse|undefined>{
  try {
    return await axios.post(`${registerUser}`,data)
  } catch (error) {
    console.log(error, "user not create")
  }
}