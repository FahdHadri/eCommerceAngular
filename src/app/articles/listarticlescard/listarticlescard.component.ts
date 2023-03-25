import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';


@Component({
  selector: 'app-listarticlesca',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
  articles:Articles[];
  constructor (private artserv:ArticlesService){}

  ngOnInit() {
    this.Listart()
    }
Listart() {
    return this.artserv.ListArticles().subscribe(data =>this.articles = data),
    (erreur:any)=>console.log(erreur)

}



}
