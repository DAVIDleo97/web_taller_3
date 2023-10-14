import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  private API_AUTOS = 'http://localhost:3000/Autos'
  private API_NICK= 'http://localhost:3000/users'

  constructor( private http:HttpClient) {}

  getNick(): Observable <any>{
    return this.http.get(this.API_NICK)
  }

  getAutos(): Observable<any>{
    return this.http.get(this.API_AUTOS)
  }

  postAutos( auto: any): Observable<any>{
    return this.http.post(this.API_AUTOS, auto)
  }

  putAutos( auto: any, id: string){
    this.API_AUTOS= `${this.API_AUTOS}/${id}`
    return this.http.put(this.API_AUTOS, auto)
  }

  deleteAutos( id: string): Observable<any>{
    this.API_AUTOS= `${this.API_AUTOS}/${id}`
    return this.http.delete(this.API_AUTOS)
  }

}
