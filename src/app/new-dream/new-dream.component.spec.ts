/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewDreamComponent } from './new-dream.component';

describe('NewDreamComponent', () => {
  let component: NewDreamComponent;
  let fixture: ComponentFixture<NewDreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
