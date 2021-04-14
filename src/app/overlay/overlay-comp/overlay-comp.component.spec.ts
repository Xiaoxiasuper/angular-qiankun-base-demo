import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayCompComponent } from './overlay-comp.component';

describe('OverlayCompComponent', () => {
  let component: OverlayCompComponent;
  let fixture: ComponentFixture<OverlayCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
