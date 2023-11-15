import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResultsPageComponent } from './my-results-page.component';

describe('MyResultsPageComponent', () => {
  let component: MyResultsPageComponent;
  let fixture: ComponentFixture<MyResultsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyResultsPageComponent]
    });
    fixture = TestBed.createComponent(MyResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
