import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  GetAllCategories(){
    return this.myHttp.get<Category[]>("https://localhost:44336/api/category/GetAllCategories")
  }
  GetCategoryById(id:number){
    return this.myHttp.get<Category>("https://localhost:44336/api/category/GetCategoryById/"+id)
  }
  constructor(public myHttp:HttpClient) { }
}
