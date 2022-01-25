import { AsideLink } from "common/constants";
import { IStore } from "common/interfaces";
import { AsideItem } from "components/asideItem";
import CardEmp from "components/CardUser";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { createNewEmployeeThunks } from "redux/thunks";
import "./MainPage.scss";

export const MainPage: React.FC = () => {
  const dataEmp = useSelector((state: IStore) => state.main.Employees);
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(createNewEmployeeThunks());
  };

  return (
    <div className="container">
      <div className="sidebar-sticky main_aside">
        <ul className="nav flex-column">
          {Object.keys(AsideLink).map((item, index) => {
            return <AsideItem key={index} title={item} index={index} />;
          })}
        </ul>
      </div>
      <main className="main">
        <div className="main_title">
          <span className="h2">My Team</span>
          <Button variant="warning" className="m-2" onClick={handleShow}>
            Add new employee
          </Button>
        </div>
        <div className="main_content">
          {dataEmp.map((item, index) => {
           return  <CardEmp key ={index} data = {item}/>
          })}
        </div>
      </main>
    </div>
  );
};
