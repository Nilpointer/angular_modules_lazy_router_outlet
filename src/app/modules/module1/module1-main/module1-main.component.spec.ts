import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1MainComponent } from './module1-main.component';

describe('Module1MainComponent', () => {
  let component: Module1MainComponent;
  let fixture: ComponentFixture<Module1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
