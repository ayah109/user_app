import { Injectable } from '@angular/core';


export interface UserVM{
  name: string,
  numb: number,
  age: number,
  bairthDate:Date,
  email:string,
  pass:number;
}

@Injectable({
  providedIn: 'root'

})

export class UserService {


  UserList:UserVM[]=[{
    name:'Aya ',
    numb: 597333333,
    age: 22,
    bairthDate:new Date('sep 10,2000'),
    email:'aya@gmail.com',
    pass:12345
},
{
  name:'Bayan  ',
  numb: 597999999,
  age: 16,
  bairthDate:new Date('jun 1,2020'),
  email:'bayan@gmail.com',
  pass:123123
}]
  constructor() { }
}
