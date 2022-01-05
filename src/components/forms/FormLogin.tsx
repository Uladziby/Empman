import "./forms.scss";
import { useForm } from "react-hook-form";

export const FormLogin: React.FC = () => {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async (data: any) => { console.log(data); };




  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Log in</h3>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="htmlForm-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
