import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { useAnimation } from '@angular/animations';
import { User } from 'src/models/User';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
loged:boolean=false;
  @Input()
  recipe:any;

  
  constructor(public router:Router,public us: UsersService) { }

  detailsRec(id:number)
  {
    this.router.navigate([`details-rec/${id}`])

  }    
  u:User | undefined;

  ngOnInit(): void {
    let _self=this;
    console.log(this.loged);
    console.log(_self.u);
    this.us.isLogged();


    this.us.$currentUser.subscribe(succ => {
      console.log(succ);
      _self.u = succ as User;
      // if(  _self.u !=null)
      // {
      //   this.loged=true;
      // }
    },
    err=>{
      console.error(err);
      
       _self.u=new User(0,"אורח","","","")
    })


  }

  isLogged(){
    return this.us.isLogged();
  }

}
