import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

//firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routering: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  loginuser() {
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    Swal.fire({
      title: 'Wait please!!',
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const { email, password } = this.loginForm.value;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .loginUser(email, password)
      .then((credentials) => {
        console.log(credentials);
        Swal.close();
        this.routering.navigate(['/']);
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Close',
        });
      });
  }
}
