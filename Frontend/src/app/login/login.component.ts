import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  faCoffee=faCoffee

  credentials={
    email:  "",
    password: ""
  }

  constructor(private router: Router,private loginService:LoginService, private http: HttpClient){

  }

  login(){
    // console.log(this.email);
    // console.log(this.password);
    // let bodyData = {
    //   email : this.email,
    //   password: this.password, 
    // };
    // this.http.post("http://localhost:8080/tourists/login", bodyData).subscribe((resultData: any)=>
    // {
      // console.log(resultData);
      // if(resultData.message == "Email not exist")
      // {
      //   alert("Account with these credientials doesn't exist");
      // }
      // else if(resultData.message == "Login Successful"){
      //   this.router.navigateByUrl("/packages");
      // }
      // else{
      //   alert("Incorrect Credientials");
      // }

    //   console.log("Login sucess",resultData.jwtToken);
    //   window.location.href="/packages"
      
    // });

    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null)){
      // console.log("we have to give details");
      this.loginService.generateToken(this.credentials).subscribe((response:any)=>{
          console.log('Login sucess',response.jwtToken);
          this.loginService.loginUser(response.jwtToken)
          window.location.href="/packages"
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'success',
            title: 'Signed in successfully'
          })
      },
      
      error=>{
        console.log('Login error',error);
        Swal.fire({
          title: 'Login Error',
          text: 'Account with these credentials doesnt exist',
          timer: 2000,
          icon: 'warning',
          showConfirmButton: false
        })
      }

      )

    }else{
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
