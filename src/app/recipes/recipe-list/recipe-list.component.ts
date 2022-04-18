import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpasta-recipes&psig=AOvVaw3VNVxPX4k9GFaaXRL07HME&ust=1650399771784000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDR7rO4nvcCFQAAAAAdAAAAABAD')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
