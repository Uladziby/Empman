import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "redux/store";
import { IStore } from "./interfaces";

export const Loader: React.FC = () => {
  const isLoading = useSelector((store: IStore) => store.isLoading)
  
  return (
    <div className="loader justify-content-center" hidden={!isLoading}>
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};
