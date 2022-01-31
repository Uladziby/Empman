import { PositionsEnum } from "common/constants";
import { IEmployee, IStore } from "common/interfaces";
import { useEffect, useState } from "react";
import { UseFormHandleSubmit, FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { connectAdvanced, useSelector } from "react-redux";
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
  isAdmin: boolean;
};

export const FormDetail: React.FC<PropsFormDetail> = ({ handlerDetailForm, isAdmin }) => {
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
    console.log(isAdmin);
  }, [dataEmp]);

  function onSubmitForm(data: IEmployee) {
    handlerDetailForm(Object.assign(data, dataForm));
    setDataForm(data);
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
          <Input id="exampleFile" name="file" type="file" readOnly={!isAdmin} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          First Name
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
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
            readOnly={!isAdmin}
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
          <input
            readOnly={!isAdmin}
            type="text"
            className="form-control"
            {...register("location")}
            value={dataForm.location}
            onChange={(ev) => setDataForm({ ...dataForm, location: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Age
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="number"
            className="form-control"
            {...register("age")}
            value={dataForm.age}
            onChange={(ev) => setDataForm({ ...dataForm, age: Number(ev.target.value) })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          dateFrom
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="text"
            className="form-control"
            {...register("dateFrom")}
            value={dataForm.dateFrom}
            onChange={(ev) => setDataForm({ ...dataForm, dateFrom: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="email"
            className="form-control"
            {...register("email")}
            value={dataForm.email}
            onChange={(ev) => setDataForm({ ...dataForm, email: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Phone
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="phone"
            className="form-control"
            {...register("phone")}
            value={dataForm.phone}
            onChange={(ev) => setDataForm({ ...dataForm, phone: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Free day
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="number"
            className="form-control"
            {...register("freeDays")}
            value={dataForm.freeDays}
            onChange={(ev) => setDataForm({ ...dataForm, freeDays: Number(ev.target.value) })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Position
        </Label>
        <Col sm={10}>
          <input
            readOnly={!isAdmin}
            type="text"
            className="form-control"
            {...register("position")}
            value={dataForm.position}
            onChange={(ev) => setDataForm({ ...dataForm, position: ev.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select
        </Label>
        <Col sm={10}>
          <select
            className="form-control"
            {...register("level")}
            value={dataForm.level}
            onChange={(ev) => setDataForm({ ...dataForm, level: ev.target.value as PositionsEnum })}
          >
            <option>{PositionsEnum.junior}</option>
            <option>{PositionsEnum.middle}</option>
            <option>{PositionsEnum.senior}</option>
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
          <Button
            id="Tooltip"
            outline
            color={`${isAdmin ? "primary" : "secondary"}`}
            type={`${isAdmin ? "submit" : "reset"}`}
          >
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
