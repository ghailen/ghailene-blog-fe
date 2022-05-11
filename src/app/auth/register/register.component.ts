import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterPayload} from "../../register-payload";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router) {
    this.registerForm = this.formBuilder.group({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
    );

    this.registerPayload = {
      userName: '',
      email: '',
      password: '',
      confirmedPassword: ''
    }
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.registerPayload.userName = this.registerForm.get('userName').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmedPassword = this.registerForm.get('confirmPassword').value;

    this.authService.register(this.registerPayload).subscribe(data => {
      this.router.navigateByUrl('/register-success')
      console.log("register success")
    }, error => console.log("register failed"))
  }


}
