import { Positions } from "common/constants";
import { IEmployee, IStore } from "common/interfaces";
import { useEffect, useState } from "react";
import { UseFormHandleSubmit, FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  Form,
  FormGroup,
  Col,
  FormText,
  Button,
  Input,
  Label,
  UncontrolledTooltip,
  Tooltip,
  InputGroup,
} from "reactstrap";

type PropsFormDetail = {
  handlerDetailForm: (data: IEmployee) => void;
};

export const FormDetail: React.FC<PropsFormDetail> = ({ handlerDetailForm }) => {
  const {
    firstName,
    lastName,
    location,
    level,
    age,
    id,
    dateFrom,
    position,
    freeDays,
    phone,
    email,
    skills,
  }: IEmployee = useSelector((state: IStore) => state.detail.employee);
  const dataEmp = useSelector((state: IStore) => state.detail.employee);
  const { register, handleSubmit } = useForm<IEmployee>();

  const [dataForm, setDataForm] = useState<IEmployee>({
    photo: "",
    id: "",
    firstName: "",
    lastName: "",
    age: 0,
    dateFrom: "",
    position: "",
    freeDays: 0,
    phone: "",
    skills: [],
    location: "",
    level: "junior",
    email: "",
  });

  useEffect(() => {
    setDataForm(dataEmp);
  }, [dataEmp]);

  function onSubmitForm(data: IEmployee) {
    handlerDetailForm(data);
    setDataForm(data)
    console.log("form", dataForm);
    //Object.assign(dataEmp,data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          Upload Photo
        </Label>
        <Col sm={10}>
          <Input id="exampleFile" name="file" type="file" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          First Name
        </Label>
        <Col sm={10}>
          <input
            type="text"
            className="form-control"
            {...register("firstName")}
            value={dataForm.firstName}
            onChange={(ev) => setDataForm({ ...dataForm, firstName: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Last Name
        </Label>
        <Col sm={10}>
          <input
            type="text"
            className="form-control"
            {...register("lastName")}
            value={dataForm.lastName}
            onChange={(ev) => setDataForm({ ...dataForm, lastName: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Location
        </Label>
        <Col sm={10}>
          <input type="text" className="form-control" {...register("location")} value={location} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Age
        </Label>
        <Col sm={10}>
          <input type="text" className="form-control" {...register("age")} value={age} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          dateFrom
        </Label>
        <Col sm={10}>
          <input type="text" className="form-control" {...register("dateFrom")} value={dateFrom} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <input type="email" className="form-control" {...register("email")} value={email} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Phone
        </Label>
        <Col sm={10}>
          <input type="phone" className="form-control" {...register("phone")} value={phone} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Free day
        </Label>
        <Col sm={10}>
          <input type="text" className="form-control" {...register("freeDays")} value={freeDays} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Position
        </Label>
        <Col sm={10}>
          <input type="text" className="form-control" {...register("position")} value={position} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select
        </Label>
        <Col sm={10}>
          <select className="form-control" {...register("level")} value={level}>
            <option>{Positions.junior}</option>
            <option>{Positions.middle}</option>
            <option>{Positions.senior}</option>
          </select>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          <Button id="Tooltip" outline color="primary" type="submit" /* onClick={preventDefault} */>
            Save
          </Button>
          <Tooltip placement="top" target="Tooltip" autohide={true}>
            Hello world
          </Tooltip>
        </Col>
      </FormGroup>
    </Form>
  );
};
