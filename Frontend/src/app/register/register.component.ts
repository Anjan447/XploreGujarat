import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  credentials = {
    name: "",
    mobile: "",
    email: "",
    password:""
  }
  confirmpassword = "";
  
  constructor(private http: HttpClient,private router: Router,private loginService: LoginService ){

  }

  save(){
    // let bodyData = {
    //   "name" : this.name,
    //   "mobile" : this.mobile,
    //   "email" : this.email,
    //   "password" : this.password, 
    // };
  //   this.http.post("http://localhost:8080/tourists/signup", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Successfully");
  //   });
  // }

  if ((this.credentials.email != '' && this.credentials.password != '' && this.credentials.name != '' && this.confirmpassword != '' && this.credentials.mobile != '') && (this.credentials.email != null && this.credentials.password != null && this.credentials.name != null && this.confirmpassword != null && this.credentials.mobile != null) && (this.credentials.password == this.confirmpassword)) {
    // console.log("we have to give details");
    this.loginService.createUser(this.credentials).subscribe(
      (res) => {
        console.log(res);
        // window.location.href="/login"
        Swal.fire({
          title: 'Registration Succesful!',
          text: 'redirecting to login page',
          timer: 4000,
          icon: 'success',
          showConfirmButton: false
        })
        this.router.navigate(['login']);


      },
      (error: HttpErrorResponse) => {
        console.error(error);

      }
    ) 
    // console.log("user created");
  } 
  else if (this.credentials.password !== this.confirmpassword) {
    Swal.fire({
      title: 'Passwords doesnt match',
      text: 'please confirm password',
      timer: 2000,
      icon: 'warning',
      showConfirmButton: false
    })
  } 
  else {
    console.log("Fields are empty");
    Swal.fire({
      title: 'Fields are Empty',
      text: 'please enter valid data',
      timer: 2000,
      icon: 'error',
      showConfirmButton: false
    })
  }

}

}
