import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

loged:boolean=false;  
$currentUser = new Subject();

  GetAllUsers(){
    return this.myHttp.get<User[]>("https://localhost:44336/api/user/GetAllUsers")
  }
  Login(u:User){
    return this.myHttp.post<any>("https://localhost:44336/api/user/Login", u)
  }
  Register(u:User){
    return this.myHttp.post<any>("https://localhost:44336/api/user/Register", u)
  }
 currentUser:User=new User(0,"","","","");
updateUser=new Subject();
  
  constructor(public myHttp:HttpClient) {}


  storage(us:User)
  {
   localStorage.setItem("user",JSON.stringify(us))
   this.$currentUser.next(us);
   this.loged = true;
  }
  clearStorage()
  {
    window.localStorage.clear();
    this.$currentUser.next(null);

  }

  getstorege()
  {
  console.log(localStorage.getItem("user")) ;
  return localStorage.getItem("user")?localStorage.getItem("user") : "";
  }

  getUser(){
    let userJson = this.getstorege();
   return JSON.parse( userJson? userJson : "");
  }

  isLogged(){
    return this.loged;   
  }

}
