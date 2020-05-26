import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
let pager;
let pageOfItems;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient ) { }

  fetch(pageNo,size) : Observable<any> {
    return this.http.get<any>(`http://localhost:5000/pages?pageNo=${pageNo}&size=${size}`);
  }
  public loadPage(page) {
    // get page of items from api
    return this.http.get<any>(`/api/items?page=${page}`).subscribe(x => {
        pager = x.pager;
        pageOfItems = x.pageOfItems;
    });
}
  

  getUsers(params) {
    return this.http.post('http//users', params);
  }
  getData():Observable<any>
{
  const url="http://localhost:5000/user"
  return this.http.get<any>(url)

}
}
