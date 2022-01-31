import { AsideLinkEnum } from "common/constants";
import { IStore } from "common/interfaces";
import { filterEmp } from "common/randomId";
import { AsideItem } from "components/asideItem";
import CardEmp from "components/CardUser";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { createNewEmployeeThunks, getAllEmpThunks } from "redux/thunks";
import "./MainPage.scss";

export const MainPage: React.FC = () => {
  const dataEmp = useSelector((state: IStore) => state.main.Employees);
  const isAdmin = useSelector((state: IStore) => state.start.user.isAdmin);

  const dispatch = useDispatch();
  const handleShow = () => {
    if (isAdmin) {
      dispatch(createNewEmployeeThunks());
    } else {
      alert("You don't have access");
    }
  };
  const [searchVal, setSearchVal] = useState<string>("");
  useEffect(() => {
    dispatch(getAllEmpThunks());
    updateCards();
  }, [dataEmp]);

  const updateCards = () => {
    return filterEmp(dataEmp, searchVal).map((item, index) => {
      return <CardEmp key={index} data={item} isAdmin={isAdmin} />;
    });
  };

  return (
    <main className="container">
      <div className="sidebar-sticky main_aside">
        <ul className="nav flex-column">
          {Object.keys(AsideLinkEnum).map((item, index) => {
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
          <Button variant={`${isAdmin ? "warning" : "secondary"}`} className="m-2" onClick={handleShow}>
            Add new employee
          </Button>
        </div>
        <div className="main_content">{updateCards()}</div>
      </div>
    </main>
  );
};
