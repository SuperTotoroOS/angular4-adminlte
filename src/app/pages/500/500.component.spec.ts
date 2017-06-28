/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 500Component } from './500.component';

describe('500Component', () => {
  let component: 500Component;
  let fixture: ComponentFixture<500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
