import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from "../../services/authentication.service";
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public ldapLoginCtrl: FormControl;
  public ldapPasswordCtrl: FormControl;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) { }
  ngOnInit() {
    this.ldapLoginCtrl = this.fb.control('', Validators.required);
    this.ldapPasswordCtrl = this.fb.control('', Validators.required);

    this.loginForm = this.fb.group({
      username: this.ldapLoginCtrl,
      password: this.ldapPasswordCtrl
    });
  }
  login() {
    const ldapInformation = {
      login: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    return this.authenticationService.login(ldapInformation).subscribe(
      success => {
        this.storageService.save('user', success);
        this.router.navigate(['']);
      },
      error => console.log(error)
    )
  }
}
