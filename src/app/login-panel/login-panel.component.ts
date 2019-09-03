import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginModel } from '../shared/model/login.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  public loginForm: FormGroup;
  private submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSignIn() {
    this.submitted = true;
    if (!this.loginForm.invalid) {
      return this.userService.singIn(this.loginForm.value);
    }
  }

}
