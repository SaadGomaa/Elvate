import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient = inject(HttpClient);


  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/products/categories`);
  }


  getSpecificCategories(data:string | null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/products/category/${data}`);
  }


}
