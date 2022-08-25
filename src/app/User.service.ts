import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "./API";


export interface UserVM{
  id:number,
  first_Name:string,
  last_Name:string,
  numb: number,
  age: number,
  bairthDate:Date,
  email:string,
  pass:number,
  posts?: Array<Posts>;


}
export interface PostVM{
  Title :string,
  UserId:number,
  CreatDate :Date,
  CreateBy:number
}

@Injectable({
  providedIn: 'root'

})

export class UserService {


//
//
//   UserList:UserVM[]=[{
//     name:'Aya ',
//     numb: 597333333,
//     age: 22,
//     bairthDate:new Date('sep 10,2000'),
//     email:'aya@gmail.com',
//     pass:12345
// },
// {
//   name:'Bayan  ',
//   numb: 597999999,
//   age: 16,
//   bairthDate:new Date('jun 1,2020'),
//   email:'bayan@gmail.com',
//   pass:123123
// }]
  constructor(public httpClient : HttpClient) { }

  getUser(): Observable<UserVM[]>{
    return this.httpClient.get<UserVM[]>("https://localhost:7264/api/User")

  }
  postUser(user:UserVM): Observable<UserVM>{
    return this.httpClient.post<UserVM>("https://localhost:7264/api/User",user
     )
  }
  putUser(user:UserVM, id :number): Observable<UserVM>{
    return this.httpClient.put<UserVM>("https://localhost:7264/api/User" +id,user
    );
  }

  getPost(): Observable<PostVM[]>{
    return this.httpClient.get<PostVM[]>("https://localhost:7264/api/User")

  }
}
