import "./forms.scss";
import { useForm } from "react-hook-form";
import { IUserData } from "common/interfaces";
import { useDispatch } from "react-redux";
import { ActionCreateNewUser } from "redux/actions";

export const FormRegister: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit((data :IUserData[]) => {
          dispatch(ActionCreateNewUser(data))
          console.log(data);

        })}
      >
        <h3>Sign up</h3>
        <div className="htmlForm-group">
          <label htmlFor="inputFirstName">First name</label>
          <input
            {...register("first name", { required: true })}
            type="text"
            className="htmlForm-control"
            id="inputFirstName"
            aria-describedby="emailHelp"
            placeholder="Enter first name"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="inputLastName">Last name</label>
          <input
            {...register("last name", { required: true })}
            type="text"
            className="htmlForm-control"
            id="inputLastName"
            aria-describedby="emailHelp"
            placeholder="Enter last name"
          />
        </div>
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
