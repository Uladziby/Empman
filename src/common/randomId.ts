import { uid } from "uid"

export function createID():string{
    const lengthId = 3
    return uid(lengthId)
}

export function createShortName(firstName,lastName) {
  
   
      firstName = firstName!.split(' ')[0]
      lastName = lastName!.split(' ')[1]
    

    return firstName[0] + lastName[0]
  }