import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularReviewerComponent } from './popular-reviewer.component';

describe('PopularReviewerComponent', () => {
  let component: PopularReviewerComponent;
  let fixture: ComponentFixture<PopularReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularReviewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
