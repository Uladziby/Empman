import "./forms.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { checkLogInThunks, getAllEmpThunks } from "redux/thunks";
import { IDataLogIn, IStore } from "common/interfaces";
import { ActionLoader } from "redux/ReducerLoader";
import { useHistory } from "react-router-dom";
import { ActionSetCurrentUser } from "redux/actions";
import { useEffect, useState } from "react";

export const FormLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "greg@gmail.com",
      password: "1111",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [user ,setUser] =useState<IDataLogIn>({
    email: "",
    password: "",
  },)
  const isLoginUser = useSelector((state: IStore) : boolean => {
    return state.start.isLogin;
  });
 
  const validate = (data: IDataLogIn)=>{
    
    setUser(data);
    dispatch(ActionLoader(true));
    dispatch(checkLogInThunks(data));
  
    setTimeout(() => {
      history.push("/main");
      dispatch(getAllEmpThunks());
      dispatch(ActionLoader(false));
    }, 3000);
   
  }
  useEffect(()=>{
    if(isLoginUser){
      dispatch(ActionSetCurrentUser(user))
    }
  },[isLoginUser])

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit((data: IDataLogIn) => {
          validate(data)
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
          Entry
        </button>
      </form>
    </>
  );
};
//useHTTP find in repo minin  and create own api component
