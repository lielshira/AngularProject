import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from 'src/models/User';
import { UsersService } from '../users.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = "";
  pas: string = "";
 
  constructor(public us: UsersService, private router: Router) { }
   us1:User=new User(0,"","","","");
  ngOnInit(): void {

  }

  checkUser(myForm: NgForm) {
   
    this.us.Login(this.us1).subscribe(succ => {
      debugger
      this.us.currentUser.Name = this.name;
      if (succ == true) {
        alert("סיסמא שגויה")
        

      }
      else if (succ == false) {
        this.us.storage(new User(0, this.name, "", "", ""));
        this.router.navigate(['register'])

      }
      else {
        if(succ!=undefined)
        {
            this.us.storage(succ);
        }
        this.router.navigate(['all-rec'])
        //this.us.currentUser = succ;
      }

    }, error => { console.log(error) })


  }

}
