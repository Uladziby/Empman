import { Routes } from "common/constants";
import { IEmployee } from "common/interfaces";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ActionLoader } from "redux/ReducerLoader";
import { deleteEmpThunks, getDetailEmp } from "redux/thunks";
import { PhotoComponent } from "UI-components/PhotoComponent";
import "./CardUser.scss";

type PropsCardEmp = {
  data: IEmployee;
  isAdmin: boolean;
};
const CardEmp: React.FC<PropsCardEmp> = ({ data, isAdmin }) => {
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteEmpThunks(data.id));
  };

  const handlerGetEmp = () => {
    dispatch(ActionLoader(true));
    dispatch(getDetailEmp(data.id));
    setTimeout(() => {
      dispatch(ActionLoader(false));
    }, 2000);
  };

  return (
    <div className="col-lg-4 mt-2 main_content__empcard" id="empcard">
      <div className="main_content__empcard-img">
        <PhotoComponent
          title={`${data.firstName[0]}
            ${data.lastName[0]}`}
        />
        <span className="h2">
          {data.firstName} {data.lastName}
        </span>
        <span className="h4"> {data.position}</span>
      </div>
      <div className="main_content__empcard-btns">
        <Link
          className="btn btn-outline-dark w-40"
          href="#"
          role="button"
          to={`${Routes.detail}/:${data.id}`}
          onClick={handlerGetEmp}
        >
          Details
        </Link>
        {isAdmin ? (
          <button type="button" className="btn btn-outline-dark" onClick={handlerDelete}>
            Delete
          </button>
        ) : (
          <button
            type="button"
            className="btn w-40 btn-outline-secondary"
            onClick={() => {
              alert("you don't have acces");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill="currentColor"
              className="bi bi-x-circle"
              viewBox="-2 -2 20 20"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardEmp;
