import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCompComponent } from './portal-comp.component';

describe('PortalCompComponent', () => {
  let component: PortalCompComponent;
  let fixture: ComponentFixture<PortalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
