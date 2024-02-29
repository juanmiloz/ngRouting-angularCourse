import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>()
  hide: boolean = true;

  constructor(private loginBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.loginBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }

  get email (){
    return this.loginForm.get('email')
  }

  get password (){
    return this.loginForm.get('password')
  }


  // Submit del formulario login
  submitLogin(): void {
    if(this.loginForm.valid){
      console.table(this.loginForm.value)
      this.loginAction.emit(this.loginForm.value)
      // *this.loginForm.reset();
    }
  }

}
