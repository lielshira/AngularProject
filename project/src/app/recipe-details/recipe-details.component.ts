import { Component, OnInit,Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { UsersService } from '../users.service';
import { User } from 'src/models/User';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
@Input()
recipe:any;
categ=new Category(0,'','');
// recipe1=new Recipe(0,'',0,0,0,new Date,[],[],0,'',false)
category:any;
  id:any;
  constructor(public rec:RecipeService,private activatedRout:ActivatedRoute,public categorySer:CategoryService,public us:UsersService) { }
  

  ngOnInit(): void {

    //this.id = this.activatedRout.snapshot.params['id'];
    this.activatedRout.params.subscribe(p=>{
      this.id=parseInt(p.id) ;
      
      this.rec.GetRecipeById(this.id).subscribe(succ=>{
        this.recipe=succ;
        this.categorySer.GetCategoryById(this.recipe.CategoryId).subscribe(param=>{this.categ=param});
      },error=>{console.log(error)});
    })

     
  

  

  }
  delete()
  {
    alert("המתכון נמחק בהצלחה!")
  }



  currentUserIsRecipeWoner(userId:number){
    let user:User = this.us.getUser();

    return user && user.Id == userId;
  }
}
