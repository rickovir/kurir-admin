import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Kurir} from "./kurir";

@Injectable({
  providedIn: 'root'
})
export class KurirService {
  constructor( private http:HttpClient) { }

  public getAllKurir():Observable<Kurir[]>
  {
    let httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<Kurir[]>('http://localhost/cencal/api/getkurir/',httpOptions)
    .pipe(
      tap(kurir => console.log(`fetched ${kurir}`)),
      catchError(this.handleError('getHeroes', []))
    );
  }
  
  public getKurir(id)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	  };
  	return this.http.get('http://localhost/cencal/api/getkurir/'+id,httpOptions);
  }

  public deleteKurir(id_kurir:string)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	let postData = {id_kurir:id_kurir};
  	return this.http.post('http://localhost/cencal/api/deletekurir/',JSON.stringify(postData) ,httpOptions);
  }
  public restoreKurir(id_kurir:string)
  {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	let postData = {id_kurir:id_kurir};
  	return this.http.post('http://localhost/cencal/api/restorekurir/',JSON.stringify(postData) ,httpOptions);
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
