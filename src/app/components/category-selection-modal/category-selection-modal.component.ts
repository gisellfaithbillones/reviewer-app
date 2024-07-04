import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-category-selection-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideNavComponent],
  templateUrl: './category-selection-modal.component.html',
  styleUrls: ['./category-selection-modal.component.css']
})
export class CategorySelectionModalComponent {
  categoryForm: FormGroup;
  categories = [
    {id: 1, name: 'AFAR'},
    {id: 2, name: 'AUD'},
    {id: 3, name: 'FAR'},
    {id: 4, name: 'MS'},
    {id: 5, name: 'RFBT'},
    {id: 6, name: 'TAX'}
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.categoryForm = this.fb.group({
      selectedCategory: ['', Validators.required],
    });
  }

  confirmSelection() {
    const selectedCategory = this.categoryForm.get('selectedCategory')?.value;
    if (selectedCategory) {
      console.log('Selected Category:', selectedCategory);
      this.router.navigate(['/add-question']);
    } else {
      console.error('Selected category is null');
      // Handle the error case here
    }
  }

}
