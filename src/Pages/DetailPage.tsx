import { AsideLink } from "common/constants";
import { IStore } from "common/interfaces";
import { AsideItem } from "components/asideItem";
import { InputElem } from "components/UI-components/InputElem";
import { SyntheticEvent, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailPage.scss";

export const DetailPage: React.FC = () => {
  const [posittion, setPosition] = useState();
  enum Positions {
    junior = "junior",
    middle = "middle",
    senior = "senior",
  }
  const { id } = useParams<{ id: string }>();

  const dataEmp = useSelector((state:IStore)=> state.detail.employee);

  const handlerChangePosition = () => {

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
      <div className="detail">
        <h3>Profile {id}</h3>

        <div className="row detail_common">
          <h4>Common information</h4>
          <div className="player-card__photo-container">
            <div className="player-card__photo">KK</div>
          </div>
          <form className="Form" action="">
            <InputElem label={"First Name"} defaultVal={"Greg"} />
            <InputElem label={"Last Name"} defaultVal={"Green"} />
            <InputElem label={"Location"} defaultVal={"Moscow"} />
            <label>
              <h3>Professional level :</h3>
              <DropdownButton id="dropdown-basic-button" title="212">
                {Object.keys(Positions).map((elem, index) => {
                  return (
                    <Dropdown.Item key={index} value={elem} onClick={handlerChangePosition}>
                      {elem}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
