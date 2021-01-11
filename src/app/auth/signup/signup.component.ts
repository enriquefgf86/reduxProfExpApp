import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routering: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  registeruser() {
    if (this.signUpForm.invalid) {
      return;
    }

    const { name, email, password } = this.signUpForm.value; //desesctructurando el objeto traido en el signup form
    //para acceder a cada uno de sus valores mediante sus

    console.log(this.signUpForm);
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm.value);

    this.authService
      .createUser(name, email, password)
      .then((credentials) => {
      
        console.log(credentials);
        this.routering.navigate(['/']);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Close',
        });
      }); //usando los valores del objeto desesctructurado
    //para asignarselo al servicio en cuastion y trigerrizar
    //la accion
  }
}
