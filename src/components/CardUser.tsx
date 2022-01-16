import { IEmployee } from "common/interfaces";
import { useDispatch } from "react-redux";
import { deleteEmpThunks } from "redux/thunks";
import "./CardUser.scss";

type PropsCardEmp = {
  data: IEmployee;
};
const CardEmp: React.FC<PropsCardEmp> = ({ data }) => {
  const dispatch = useDispatch();

  const handlerDelete =()=>{
    dispatch(deleteEmpThunks(data.id))
  }

  return (
    <div className="col-lg-4 main_content__empcard">
      <div className="main_content__empcard-img">
      <div className="player-card__photo-container">
        <div className="player-card__photo">{data.firstName[0]}{data.lastName[0]}</div>
      </div>
        <span className="h2">
          {data.firstName} {data.lastName}
        </span>
        <span className="h4"> {data.position}</span>
      </div>
        <div className="main_content__empcard-btns">
        <a className="btn btn-success" href="#" role="button">
          Details
        </a>
        <button type="button" className="btn btn-danger" onClick={handlerDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardEmp;
