import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent} from '../side-nav/side-nav.component';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideNavComponent],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      choices: this.fb.array([this.fb.control('', Validators.required)]),
      correctAnswer: ['', Validators.required],
      explanation: ['', Validators.required],
      hint: ['', Validators.required]
    });
  }

  get choices(): FormArray {
    return this.questionForm.get('choices') as FormArray;
  }

  addChoice() {
    this.choices.push(this.fb.control('', Validators.required));
  }

  removeChoice(index: number) {
    this.choices.removeAt(index);
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      // Handle form submission, e.g., send data to a server
    }
  }
}
