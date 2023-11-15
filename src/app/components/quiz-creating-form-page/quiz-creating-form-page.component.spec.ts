import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreatingFormPageComponent } from './quiz-creating-form-page.component';

describe('QuizCreatingFormPageComponent', () => {
  let component: QuizCreatingFormPageComponent;
  let fixture: ComponentFixture<QuizCreatingFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizCreatingFormPageComponent]
    });
    fixture = TestBed.createComponent(QuizCreatingFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
