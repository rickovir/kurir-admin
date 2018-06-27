import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Pengiriman} from "./pengiriman";

@Injectable({
  providedIn: 'root'
})
export class PengirimanService {
  constructor( private http:HttpClient) { }

  public getAllPengiriman():Observable<Pengiriman[]>
  {
    let httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<Pengiriman[]>('http://localhost/cencal/api/getpengiriman/',httpOptions)
    .pipe(
      tap(pengiriman => console.log(`fetched ${pengiriman}`)),
      catchError(this.handleError('getHeroes', []))
    );
  }
  
  public getPengiriman(id)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	  };
  	return this.http.get('http://localhost/cencal/api/getpengiriman/'+id,httpOptions);
  }

  public deletePengiriman(id_pengiriman:string)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	let postData = {id_pengiriman:id_pengiriman};
  	return this.http.post('http://localhost/cencal/api/deletepengiriman/',JSON.stringify(postData) ,httpOptions);
  }
  public restorePengiriman(id_pengiriman:string)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	let postData = {id_pengiriman:id_pengiriman};
  	return this.http.post('http://localhost/cencal/api/restorepengiriman/',JSON.stringify(postData) ,httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
