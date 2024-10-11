import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionResultComponent } from './conversion-result.component';

describe('ConversionResultComponent', () => {
  let component: ConversionResultComponent;
  let fixture: ComponentFixture<ConversionResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionResultComponent]
    });
    fixture = TestBed.createComponent(ConversionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
