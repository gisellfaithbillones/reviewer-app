import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedReviewerComponent } from './related-reviewer.component';

describe('RelatedReviewerComponent', () => {
  let component: RelatedReviewerComponent;
  let fixture: ComponentFixture<RelatedReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedReviewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
