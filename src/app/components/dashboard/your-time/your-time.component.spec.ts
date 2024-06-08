import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTimeComponent } from './your-time.component';

describe('YourTimeComponent', () => {
  let component: YourTimeComponent;
  let fixture: ComponentFixture<YourTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
