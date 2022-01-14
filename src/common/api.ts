import axios, { AxiosResponse } from "axios";
import { IDataLogIn } from "./interfaces";

const urlBase = "http://localhost:4040";
const mainUrl = `${urlBase}/main`;
const login = `${urlBase}/login`;
const AllEmp = `${urlBase}/main/emp`



export async function getAllUsers(): Promise<AxiosResponse> {
  return await axios(mainUrl);
}

export async function checkLogIn(data : IDataLogIn):Promise<AxiosResponse| undefined>{
  console.log('api',data)
  try{
   return await axios.post(login, data); 
  }catch(e){
    console.log(e, "ups")
  }
  
}

export async function getAllEmployees(): Promise<AxiosResponse>{
  return await axios(AllEmp)
}