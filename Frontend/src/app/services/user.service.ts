import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient, private loginService: LoginService) { }

  token = this.loginService.getToken();
  
  

  // getCurrentUser(){
  //   console.log(this.token);
  //   return this.http.get(`${this.baseUrl}/home/current-user`, )
  // }

  getUser(){
    console.log(this.token);
    return this.http.get(`${this.baseUrl}/tourists/listall`, )
  }
}