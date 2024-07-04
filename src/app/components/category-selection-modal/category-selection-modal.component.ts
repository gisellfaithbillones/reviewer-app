import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-selection-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideNavComponent],
  templateUrl: './category-selection-modal.component.html',
  styleUrls: ['./category-selection-modal.component.css']
})
export class CategorySelectionModalComponent {
  categories: any[] = [];
  categoryForm: FormGroup;
  showNewCategoryInput: boolean = false;
  newCategoryName: string = '';

  ngOnInit() {
    this.categoryForm = new FormGroup({
      selectedCategory: new FormControl(''),
      newCategoryName: new FormControl('')  // FormControl for new category name
    });
    this.getCategories();
  }

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService) {
    this.categoryForm = this.fb.group({
      selectedCategory: ['', Validators.required],
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Categories:', categories);
      },
      error: (error) => console.error('Error fetching categories:', error)
    });
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.showNewCategoryInput = target.value === 'newCategory';
  }

  addNewCategory() {
    // Safely get the value of the form control and trim it
    const newCategoryName = this.categoryForm.get('newCategoryName')?.value?.trim() ?? '';

    if (newCategoryName.length === 0) {
      console.error('The category name cannot be empty.');
      return; // Exit early if validation fails
    }

    this.categoryService.addCategory({name: newCategoryName}).subscribe({
      next: (newCategory) => {
        this.categories.push(newCategory);
        this.categoryForm.controls['selectedCategory'].setValue(newCategory.id);
        this.categoryForm.reset(); // Reset the entire form
        console.log('New category added:', newCategory);
      },
      error: (error) => {
        console.error('Error adding category:', error);
      }
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
