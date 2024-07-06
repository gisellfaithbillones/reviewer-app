import {Component, importProvidersFrom} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SideNavComponent} from "../side-nav/side-nav.component";
import {ReviewerService} from "../../services/reviewer.service";
import {AuthService} from "../../services/auth.service";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reviewer-name',
  standalone: true,
  imports: [
    SideNavComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reviewer-name.component.html',
  styleUrl: './reviewer-name.component.css'
})
export class ReviewerNameComponent {
  reviewerForm: FormGroup;
  attachment: File | null = null;
  user: any = null;
  reviewers: any[] = [];

  ngOnInit() {
    this.getAuthUser();
    this.getReviewerByUserId(this.user?._id);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reviewerService: ReviewerService,
    private authService: AuthService) {

    this.reviewerForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      attachment: [null]
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.attachment = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.reviewerForm.valid) {
      const formData = new FormData();
      formData.append('title', this.reviewerForm.get('title')?.value);
      formData.append('description', this.reviewerForm.get('description')?.value);
      if (this.attachment) {
        formData.append('attachment', this.attachment);
      }
      formData.append('userId', this.user?._id);

      this.reviewerService.createReviewerSession(formData).subscribe({
        next: (response) => {
          console.log('Form submission successful:', response);
        },
        error: (error) => {
          console.error('Form submission error:', error);
        }
      });

      // Reset form after submission
      this.reviewerForm.reset();
      this.attachment = null;
      this.getReviewerByUserId(this.user?._id);
    }
  }

  getReviewerByUserId(userId: string) {

    console.log('User ID:', userId);

    this.reviewers = [
      { id: '1', title: 'Reviewer 1', description: 'Description 1', attachment: 'path/to/image1.jpg', userId: 'user123'},
      { id: '2', title: 'Reviewer 2', description: 'Description 2', attachment: 'path/to/image2.jpg', userId: 'user123' },
      { id: '3', title: 'Reviewer 3', description: 'Description 3', attachment: 'path/to/image3.jpg', userId: 'user123' }
    ];

    // this.reviewerService.getReviewerByUserId(userId).subscribe({
    //   next: (reviewer) => {
    //     this.reviewers = [reviewer];
    //     console.log('Reviewer:', reviewer);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching reviewer:', error);
    //   }
    // });
  }

  getAuthUser() {
    // this.user = {
    //   _id: 'user123' // Example user ID
    // };

    this.authService.getLoggedInUserDetails().subscribe({
      next: (user) => {
        this.user = user;
        console.log('Logged in user:', user);
      },
      error: (error) => {
        console.error('Error fetching logged in user:', error);
      }
    });
  }

  viewSession(reviewerId: string): void {
    this.router.navigate(['/add-question', reviewerId]);
  }

  takeQuiz(reviewerId: string): void {
    this.router.navigate(['/take-quiz', reviewerId]);
  }

}
