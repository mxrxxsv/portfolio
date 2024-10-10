import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Design1Page } from './design1.page';

describe('Design1Page', () => {
  let component: Design1Page;
  let fixture: ComponentFixture<Design1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Design1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
