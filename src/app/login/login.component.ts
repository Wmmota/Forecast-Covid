import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    ) { }

  ngOnInit(): void {
  }


  // checkLogin() {
  //   this.isLoading = true;
  //   this.isError = false;

  //   this.loginService.checkLogin()
  //   .pipe(
  //     take(1),
  //     finalize( () => this.isLoading = false )
  //   ).subscribe(
  //       response => { this.onSuccess(response) },
  //       error => { this.onError(error) }
  //     )
  // }

  // onSuccess(response: any[]) {
  //   this.isError = false;
  //   //this.countryList = response;

  //   this.router.navigate(['home']);
  // }

  // onError(error: any) {
  //   this.isError = true;
  //   console.log(error);
  // }
 

}
