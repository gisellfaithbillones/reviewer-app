import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryOfAccountsComponent } from './theory-of-accounts.component';

describe('TheoryOfAccountsComponent', () => {
  let component: TheoryOfAccountsComponent;
  let fixture: ComponentFixture<TheoryOfAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryOfAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheoryOfAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
