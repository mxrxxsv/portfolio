import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Design2Page } from './design2.page';

describe('Design2Page', () => {
  let component: Design2Page;
  let fixture: ComponentFixture<Design2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Design2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
