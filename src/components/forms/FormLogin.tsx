import "./forms.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Loader } from "common/loader";
import { checkLogInThunks, getAllEmpThunks, getUsers } from "redux/thunks";
;
import { IDataLogIn } from "common/interfaces";
import { ActionLoader } from "redux/ReducerLoader";
import { Redirect, useHistory } from "react-router-dom";
import { getAllEmployees } from "common/api";

export const FormLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "admin@admin",
      password: "admin",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory()


  
  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit((data: IDataLogIn) => {
          
          dispatch(ActionLoader(true));
          dispatch(checkLogInThunks(data));
          setTimeout(() => {
            history.push("/main")
            dispatch(getAllEmpThunks())
            dispatch(ActionLoader(false));
          }, 3000);
           })}
      >
        <h3>Log in</h3>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            {...register("password", {
              required: "This is requiered",
              minLength: {
                value: 4,
                message: "Min length is four sympols",
              },
            })}
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
//useHTTP find in repo minin  and create own api component
