import { IEmployee } from "common/interfaces";
import { uid } from "uid";

export function createID(): string {
  const lengthId = 3;
  return uid(lengthId);
}

export function createShortName(firstName: string, lastName: string) {
  firstName = firstName!.split(" ")[0];
  lastName = lastName!.split(" ")[1];

  return firstName[0] + lastName[0];
}

export function filterEmp(data: IEmployee[], searchVal: string): IEmployee[] {
  return data.filter((elem) => {
    if (searchVal === "") {
      return elem;
    } else if (
      elem.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      elem.lastName.toLowerCase().includes(searchVal.toLowerCase()) ||
      elem.position.toLowerCase().includes(searchVal.toLowerCase())
    ) {
      return elem;
    }
  });
}
