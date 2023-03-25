import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router,  } from '@angular/router';
import { Categories } from '../../models/categories';
import { Scategories } from '../../models/scategories';

@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
id:any;
articles: Articles = new Articles()
constructor (private artserv:ArticlesService, private route : ActivatedRoute , private router : Router){}


ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.artserv.GetArticle(this.id).subscribe(data=>this.articles=data),(error:any)=> console.log(error);
}

modifarticles=()=>{this.artserv.UpdateArticle(this.id,this.articles).subscribe(data=>this.router.navigate(['/larticles'])),
(error:any)=> console.log(error);}




}
