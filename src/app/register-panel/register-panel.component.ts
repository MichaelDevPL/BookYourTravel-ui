import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {

  public registerForm: FormGroup;
  public userData: User = new User();
  private submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  passwordMatchValidator(): boolean {
    return this.f.password.value === this.f.password_confirmation.value
      ? true : false;
 }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    submit(){
      console.log(this.f.first_name.status)
      console.log(this.passwordMatchValidator())
      this.submitted = true;
      if (!this.registerForm.invalid) {
            this.userData.name = this.f.first_name.value + ' ' + this.f.last_name.value;
            this.userData.email = this.f.email.value;
            this.userData.password = this.f.password.value;

            this.userService.createUser(this.userData);
        }
      }
}
