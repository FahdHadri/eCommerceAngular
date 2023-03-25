import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Articles } from '../models/articles';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseurl="http://localhost:3001/api/articles";


  constructor(private http:HttpClient) {}

  ListArticles():Observable<Articles[]>

    {
      return this.http.get<Articles[]>(this.baseurl);

    }

  Deletearticle(id: object):Observable<Articles>
  {
    return this.http.delete<Articles>(this.baseurl+ '/' +id)
  }
  AddArticles (art:Articles):Observable<Articles>
  {
    return this.http.post<Articles>("http://localhost:3001/api/articles",art)
  }

  GetArticle(id:object):Observable<Articles>
{
return this.http.get<Articles>(this.baseurl+ '/'+id);

}
UpdateArticle(id:object,art:Articles): Observable<Articles>
{
return this.http.put<Articles>(this.baseurl + '/' + id,art);
}


  }
