import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getAllRecipe(){
    return this.myHttp.get<Recipe[]>("https://localhost:44336/api/recipe/GetAllRecipes")
  }
  AddRecipe(rec:Recipe){
    return this.myHttp.post<Recipe>("https://localhost:44336/api/recipe/AddRecipe",rec)
  }
  GetRecipeById(id:number){
    return this.myHttp.get<number>(`https://localhost:44336/api/recipe/GetRecipeById?id=${id}`);

  }


  constructor(public myHttp:HttpClient) { }
}
