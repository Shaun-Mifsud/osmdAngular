import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmdTestComponent } from './osmd-test.component';

describe('OsmdTestComponent', () => {
  let component: OsmdTestComponent;
  let fixture: ComponentFixture<OsmdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsmdTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
