import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  name: string = "";
  user: User = new User(0, "", "", "", "");
  sub: Subscription | undefined;
  u:User | undefined;
  constructor(public us: UsersService) { }
  out()
  {
   this.us.clearStorage();
   this.u=undefined;
    
  }
  ngOnInit() {
    //let user1=new User(0,"","","","");
    
    let user=localStorage.getItem("user");
    this.us.$currentUser.next(JSON.parse(user || '{}'));

    let _self=this;
    this.us.$currentUser.subscribe(succ => {
      debugger
      console.log(succ);
      _self.u = succ as User;
      //this.name = u.Name;
      
    },
    err=>{
      console.error(err);
      _self.u=new User(0,"אורח","","","")
    })
    console.log(this.u?.Name)
    // this.sub = this.us.getstorege().su(data => {
    //   this.user = data;
    //   console.log(data)
    // })

  }


}

// constructor(public click1: ActivatedRoute) {
//   this.click1.params.subscribe(para => {
//     console.log(para);
//     this.name = para.us;
//     this.name = para["us"];
//   })

