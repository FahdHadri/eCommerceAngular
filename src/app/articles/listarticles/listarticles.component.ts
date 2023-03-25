import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { Categories } from '../../models/categories';


@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  articles:Articles[];
private _id: object;
  constructor (private artserv:ArticlesService, private catserv:CategoriesService){}
categories:Categories[];
term:string;


  ngOnInit() {
    this.Listart()
    this.Listcategories()
    }
Listart() {
    return this.artserv.ListArticles().subscribe(data =>this.articles = data),
    (erreur:any)=>console.log(erreur)
}
Listcategories(){
  return this.catserv.ListCategories().subscribe(data => { this.categories = data ; }  ), (err:any)=>console.log(err)  }

supparticles(id:object){
return this.artserv.Deletearticle(id).subscribe(data =>{this.Listart()});
}


}


