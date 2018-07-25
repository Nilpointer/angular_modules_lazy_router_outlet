import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2MainComponent } from './module2-main.component';

describe('Module2MainComponent', () => {
  let component: Module2MainComponent;
  let fixture: ComponentFixture<Module2MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
