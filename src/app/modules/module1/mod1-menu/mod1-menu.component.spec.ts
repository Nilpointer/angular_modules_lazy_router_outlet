import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1MenuComponent } from './mod1-menu.component';

describe('Mod1MenuComponent', () => {
  let component: Mod1MenuComponent;
  let fixture: ComponentFixture<Mod1MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
