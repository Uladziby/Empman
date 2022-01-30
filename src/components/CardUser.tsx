import { Routes } from "common/constants";
import { IEmployee } from "common/interfaces";
import { useDispatch } from "react-redux";
import { Link, Route } from "react-router-dom";
import { ActionLoader } from "redux/ReducerLoader";
import { deleteEmpThunks, getDetailEmp } from "redux/thunks";
import { PhotoComponent } from "UI-components/PhotoComponent";
import "./CardUser.scss";

type PropsCardEmp = {
  data: IEmployee;
};
const CardEmp: React.FC<PropsCardEmp> = ({ data }) => {
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteEmpThunks(data.id));
  };

  const handlerGetEmp = () => {
    dispatch(ActionLoader(true));
    dispatch(getDetailEmp(data.id));
    console.log(data.id, "data.id")
    setTimeout(()=>{
      dispatch(ActionLoader(false));
    },2000)
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
          className="btn btn-success"
          href="#"
          role="button"
          to={`${Routes.detail}/:${data.id}`}
          onClick={handlerGetEmp}
        >
          Details
        </Link>
        <button type="button" className="btn btn-danger" onClick={handlerDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardEmp;
