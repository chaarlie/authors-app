import { Injectable, OnInit } from '@angular/core';
import { Author } from './model/Author';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

import { authors } from '../../shared/authors-mock';

@Injectable({
  providedIn: 'root'
})
export class AuthorService implements OnInit { 
  private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private API_GET: string = 'https://ps5p65sz7c.execute-api.us-east-1.amazonaws.com/dev/authors';
  private API_POST: string = 'https://ps5p65sz7c.execute-api.us-east-1.amazonaws.com/dev/authors';
  private API_PUT: string = 'https://ps5p65sz7c.execute-api.us-east-1.amazonaws.com/dev/authors';
  private API_DELETE: string = 'https://ps5p65sz7c.execute-api.us-east-1.amazonaws.com/dev/authors';
    
  constructor(private http: HttpClient) { }

  ngOnInit() { }
  
  getAll(): Observable<Author[]> {
    return of(authors);
    /**
     * As of now, im finding an issue with CORS and AWS Lamda
     */
    // const httpOptions = {
    //   headers: new HttpHeaders({ "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT" })
    // };
    // return this.http.get<Author[]>(this.API_GET, httpOptions)
  }

  create(author: Author): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.post(this.API_POST, author, this.httpOptions).pipe(
      tap(_ => console.log(`updated author id=${author.id}`)),
      catchError(this.handleError<any>('create author'))
    );
  }

  update(author: Author) {
    return this.http.put(this.API_PUT, author, this.httpOptions).pipe(
      tap(_ => console.log(`updated author id=${author.id}`)),
      catchError(this.handleError<any>('create author'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}
