import { AsideLink } from "common/constants";
import { IStore } from "common/interfaces";
import { filterEmp } from "common/randomId";
import { AsideItem } from "components/asideItem";
import CardEmp from "components/CardUser";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { createNewEmployeeThunks } from "redux/thunks";
import "./MainPage.scss";

export const MainPage: React.FC = () => {
  const dataEmp = useSelector((state: IStore) => state.main.Employees);
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(createNewEmployeeThunks());
  };
  const [searchVal, setSearchVal] = useState<string>("");

  return (
    <main className="container">
      <div className="sidebar-sticky main_aside">
        <ul className="nav flex-column">
          {Object.keys(AsideLink).map((item, index) => {
            return <AsideItem key={index} title={item} index={index} />;
          })}
        </ul>
      </div>
      <div className="main">
        <div className="main_title">
          <span className="h2 main_title-title">My Team</span>
          <Input
           className="w-50"
          bsSize="sm"
            type="text"
            placeholder="...Search"
            onChange={(event) => {
              setSearchVal(event.target.value);
            }}
          />
          <Button  variant="warning" className="m-2" onClick={handleShow}>
            Add new employee
          </Button>
        </div>
        <div className="main_content">
          {filterEmp(dataEmp, searchVal)
            .map((item, index) => {
              return <CardEmp key={index} data={item} />;
            })}
        </div>
      </div>
    </main>
  );
};
