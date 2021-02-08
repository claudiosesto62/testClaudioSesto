import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterfoldComponent } from './centerfold.component';

describe('CenterfoldComponent', () => {
  let component: CenterfoldComponent;
  let fixture: ComponentFixture<CenterfoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterfoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterfoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
