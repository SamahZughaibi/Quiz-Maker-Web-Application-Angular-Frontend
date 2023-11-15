import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTakingFormPageComponent } from './quiz-taking-form-page.component';

describe('QuizTakingFormPageComponent', () => {
  let component: QuizTakingFormPageComponent;
  let fixture: ComponentFixture<QuizTakingFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTakingFormPageComponent]
    });
    fixture = TestBed.createComponent(QuizTakingFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
