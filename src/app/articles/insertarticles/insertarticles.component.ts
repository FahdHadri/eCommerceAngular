import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
import { Router } from '@angular/router';
import { ScategoriesService } from '../../services/scategories.service';
import { Scategories } from '../../models/scategories';


@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {

scategories:Scategories[]
articles: Articles = new Articles()



  constructor (private artserv:ArticlesService, private router:Router , private scatserv:ScategoriesService){}

ngOnInit() {
  this.loadscategorie()
  }
  loadscategorie(){
    return this.scatserv.getscategories().subscribe(data =>this.scategories = data),
    (erreur:any)=>console.log(erreur)

  }






  ajoutarticles=()=>{this.artserv.AddArticles(this.articles).subscribe(data=>this.router.navigate(['/larticles']))}




  }


