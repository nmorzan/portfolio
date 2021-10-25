import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExapleCssComponent } from './exaple-css.component';

describe('ExapleCssComponent', () => {
  let component: ExapleCssComponent;
  let fixture: ComponentFixture<ExapleCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExapleCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExapleCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
