import { Component, OnInit } from '@angular/core';
import { Layer } from 'src/models/Layer';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
recipeArr:Recipe[]=[];
filterRecipe:Recipe[]=[];
l:Layer[]=[];
recipe1:Recipe=new Recipe(0,"",0,0,0,new Date(""),this.l,[],0,"",true);
// recipe1:Recipe=new Recipe();
  constructor(public recipeService:RecipeService) { }
//   filter()
//  {
  
//     this.filterRecipe = this.recipeArr.filter(item => (this.recipe1.Name == null || item.Name.includes(this.recipe1.Name)) && (this.recipe1.CategoryId == null || item.CategoryId == this.recipe1.CategoryId) &&
//       (this.recipe1.PreparationTimeInMinute == null || this.recipe1.PreparationTimeInMinute <= this.recipe1.PreparationTimeInMinute))
//     }


  // search()
  // {

  // }
  ngOnInit(): void {
    this.recipeService.getAllRecipe().subscribe(succ=>{this.recipeArr=succ},error=>{console.log(error)});
  }

}
