import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Category } from 'src/models/Category';
import { Layer } from 'src/models/Layer';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  categoryArr: Category[] = [];
  ngOnInit(): void {
    this.categoryS.GetAllCategories().subscribe(succ => { this.categoryArr = succ }, error => { console.log(error) });
  }

  id = 0;
  name = "";
  category = 0;
  time = 0;
  level = 0;
  date1 = new Date();
  // des="";
  // ingrid=[];
  layer = [new Layer("", [])];
  prep = [];
  useId = 0;
  img = "";
  display = true;
  openDialog(template:any) {
    this.dialog.open(template);
  }
  
  constructor(public rec: RecipeService, public router: Router, public categoryS: CategoryService,public dialog: MatDialog) { }
  addRec() {
    this.rec.AddRecipe(new Recipe(this.id, this.name, this.category, this.time, this.level, this.date1, this.layer, this.prep, this.useId, this.img, this.display)).subscribe(succ => {
      //alert("המתכון נוסף בהצלחה");
      //this.openDialog();
      this.router.navigate(['all-rec'])
    }, error => { console.log(error) })
  }



  r = new Recipe(0, '', 0, 0, 0, new Date, [], [], 0, '', false)
  AddLayer() {
    this.r.Layers.push(new Layer('', ['']));

  }
  AddStep(i: number) {
    this.r.Layers[i].Components.push("");
  }

}




