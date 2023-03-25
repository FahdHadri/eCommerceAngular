import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  articles:Articles[];
  constructor (private artserv:ArticlesService){}

  ngOnInit() {
    this.Listart()
    }
Listart() {
    return this.artserv.ListArticles().subscribe(data =>this.articles = data),
    (erreur:any)=>console.log(erreur)

}
supparticles(id:object){
return this.artserv.Deletearticle(id).subscribe(data =>{this.Listart()});
}


}
