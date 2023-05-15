import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatestnumberComponent } from './greatestnumber.component';

describe('GreatestnumberComponent', () => {
  let component: GreatestnumberComponent;
  let fixture: ComponentFixture<GreatestnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatestnumberComponent]
    });
    fixture = TestBed.createComponent(GreatestnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
