import { Injectable } from '@angular/core';
import { Iuser } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArray : Array<Iuser> = [
    {
      username : "Rohit",
      userId : "876",
      userRole : "Admin"
    },
    {
      username : "Sachin",
      userId : "654",
      userRole : "Admin"
    },
    {
      username : "Virat",
      userId : "421",
      userRole : "Candidate"
    },
    {
      username : "Sushil",
      userId : "532",
      userRole : "Candidate"
    },
  ]
  constructor() { }

  fetchAllUsers():Array<Iuser>{
    return this.userArray
  }

  fetchUser(id:string):Iuser{
    return this.userArray.find(user => user.userId === id) as Iuser
  }

  addNewUser(newUser : Iuser){
    this.userArray.unshift(newUser);
  }

  updateUser(updatedObj : Iuser){
    let getIndex = this.userArray.findIndex(user => user.userId === updatedObj.userId);
    this.userArray[getIndex] = updatedObj;
  }

  removeUser(userObj : Iuser){
    let getIndex = this.userArray.findIndex(
      user => user.userId === userObj.userId
    )
    this.userArray.splice(getIndex, 1);

    alert(`User ${userObj.username} is removed successfully!!!`)
  }
}
