import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpBackground= '../../../assets/images/signup.jpg';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const {email, password, passwordConfirmation, phoneNumber} = this.signUpForm.value;
      this.authService.signUp(email, password, passwordConfirmation, phoneNumber ).subscribe(
        response => {
          console.log('Sign-up successful', response);
        },
        error => {
          console.error('Sign-up failed', error);
        }
      );
    }
  }
}
