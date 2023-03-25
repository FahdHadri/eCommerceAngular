import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Categories } from '../models/categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseurl="http://localhost:3001/api/categories";


  constructor(private http:HttpClient) {}

  ListCategories():Observable<Categories[]>

    {
      return this.http.get<Categories[]>(this.baseurl);

    }



  }

