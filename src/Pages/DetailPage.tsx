import { AsideLinkEnum } from "common/constants";
import { IEmployee, IStore } from "common/interfaces";
import { AsideItem } from "components/asideItem";
import { FormDetail } from "components/forms/FormDetail";
import { useCallback, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, updateDetailEmpThunks } from "redux/thunks";
import { PhotoComponent } from "UI-components/PhotoComponent";
import "./DetailPage.scss";

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { firstName, lastName } = useSelector((state: IStore) => state.detail.employee);
  const isAdmin = useSelector((state: IStore) => state.start.user.isAdmin);

  const dispatch = useDispatch();
  const dataFromForm = (data: IEmployee) => {
    console.log(data.firstName, "detailpage");
    dispatch(updateDetailEmpThunks(data, id.slice(1)));
  };
  useCallback(() => {
    reRenderForm();
  }, [firstName, lastName]);

  const reRenderForm = () => {
    return <FormDetail isAdmin={isAdmin} handlerDetailForm={dataFromForm} />;
  };
  const history = useHistory();
  return (
    <div className="container">
      <div className="sidebar-sticky main_aside">
        <ul className="nav flex-column">
          {Object.keys(AsideLinkEnum).map((item, index) => {
            return <AsideItem key={index} title={item} index={index} />;
          })}
        </ul>
      </div>
      <div className="detail">
        <div>
          <Button
            className="my-2"
            color="primary"
            onClick={() => {
              history.goBack();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back
          </Button>
        </div>
        <h3>Profile employee : CardId(№ {id.slice(1)})</h3>
        <div className="row detail_common">
          <PhotoComponent title={`${firstName[0]}${lastName[0]}`} />
          {reRenderForm()}
        </div>
      </div>
    </div>
  );
};
