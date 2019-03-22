import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataListService {

  public users: Users[] = [];

  private _url: string = '/assets/data/users.json';


/**************GET users from the local storage*************/

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      /* console.log(data); */
      this.users=data;
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._url);
  }

/*****************UPDATE the user on the server**********/



}
