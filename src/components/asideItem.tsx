import React from "react";
import { Link, Router, useHistory } from "react-router-dom";


type PropsAsideItem={
    title: string;
    index: number
}
export const AsideItem: React.FC<PropsAsideItem> = ({title,index}) => {
  const history = useHistory();
const changeLocation =()=>{
  if(title === "Detail"){
    history.goForward();
  }else{
    history.push('/main');
  }
  
}
  return (
    <li className='nav-item' id={index.toString()}>
      <button className="nav-link aside_btn active" onClick={changeLocation} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        {title}
      </button>
    </li>
  );
};

