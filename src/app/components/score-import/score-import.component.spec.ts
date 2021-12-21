import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreImportComponent } from './score-import.component';

describe('ScoreImportComponent', () => {
  let component: ScoreImportComponent;
  let fixture: ComponentFixture<ScoreImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
