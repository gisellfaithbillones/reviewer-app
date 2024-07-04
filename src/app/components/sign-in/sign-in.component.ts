import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;
  signInBackground = '../../../assets/images/sign-in.jpg';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.signInForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const {identifier, password} = this.signInForm.value;
      this.authService.signIn(identifier, password).subscribe(
        response => {
          this.router.navigate(['/dashboard']);
          console.log('Sign-in successful', response);
        },
        error => {
          console.error('Sign-inp failed', error);
        }
      );
    }
  }


}
