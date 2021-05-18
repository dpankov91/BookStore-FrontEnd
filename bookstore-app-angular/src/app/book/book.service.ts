import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(environment.apiUrl + '/api/book');
  }

}
