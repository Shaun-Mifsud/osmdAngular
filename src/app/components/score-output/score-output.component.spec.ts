import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreOutputComponent } from './score-output.component';

describe('ScoreOutputComponent', () => {
  let component: ScoreOutputComponent;
  let fixture: ComponentFixture<ScoreOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
