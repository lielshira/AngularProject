import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { NgModule } from '@angular/core';
import { User } from 'src/models/User';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // name: string = "";
  // id: number = 0;
  // adress: string = "";
  // mail: string = "";
  // password: string = "";
  constructor(public us: UsersService, private router: Router) { }
us1:User=new User(0,"","","","");
  checkUser2(myForm: NgForm) {
    this.us.Register(this.us1).subscribe(succ => {
      // debugger
       this.us.currentUser.Name = this.us1.Name;
      if (succ == true) {
        alert("סיסמא שגויה");
      }
      else if (succ == false) {
        // this.us.currentUser = succ;
        if(succ!=undefined)
        {
            this.us.storage(succ);
        }
        this.router.navigate(['all-rec'])
      }
      else {
        if(succ!=undefined)
        {
            this.us.storage(succ);
        }
        // this.us.currentUser = succ;
        this.router.navigate(['all-rec'])
      }

    }, error => { console.log(error) })


  }
  ngOnInit(): void {
    //this.name = this.us.currentUser.Name;
    let u= this.us.getstorege();
    if(u!==null||u!=undefined)
    {
      let u1=JSON.parse(u);
      console.log(u1);
     this.us1.Name= u1["Name"];

    }
    
  }
}



