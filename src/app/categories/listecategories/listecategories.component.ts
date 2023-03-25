import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {

  categories:Categories[];
  constructor (private catserv:CategoriesService){}

  ngOnInit() {
    this.Listcat()
    }
    Listcat() {
      return this.catserv.ListCategories().subscribe(data =>
        this.categories = data), (err:any)=>console.log(err)

  }


}
