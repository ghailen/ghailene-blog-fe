import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {LoginPayload} from "../login-payload";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      userName: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginPayload.userName = this.loginForm.get('userName').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/home');

      } else {
        console.log('Login failed');
      }
    });
  }
}
