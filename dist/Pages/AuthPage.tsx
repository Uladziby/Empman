import { Constants } from "common/constants";
import { IStore } from "common/interfaces";
import { FormLogin } from "components/forms/FormLogin";
import { FormRegister } from "components/forms/FormRegister";
import React from "react";
import { useSelector } from "react-redux";
import "../components/card.scss";

export const AuthPage: React.FC = () => {

  const storeStartPage = useSelector((state: IStore) => state.start.TypeLogon);
  return (
    <main className="start">
      <div className={`card-container ${storeStartPage === Constants.SHOW_LOGIN?  'unflipped':'flipped' }`}>
        <div className="card">
          <div className="card__front">
            <FormLogin />
          </div>
          <div className="card__back">
            <FormRegister />
          </div>
        </div>
      </div>
    </main>
  );
};
