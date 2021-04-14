import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOvComponent } from './back-ov.component';

describe('BackOvComponent', () => {
  let component: BackOvComponent;
  let fixture: ComponentFixture<BackOvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
