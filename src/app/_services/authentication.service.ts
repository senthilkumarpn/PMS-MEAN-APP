import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {appConfig  } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(username:string,password: string){
    return this.http.post<any>(appConfig.apiUrl+'/users/authenticate',{username:username,password:password}).pipe(map(user=> {
      if(user && user.token){
        localStorage.setItem("currentUser",JSON.stringify(user));
      }
      return user;
    }));
  }
  logout(){
    localStorage.removeItem("currentUser");
  }
}

