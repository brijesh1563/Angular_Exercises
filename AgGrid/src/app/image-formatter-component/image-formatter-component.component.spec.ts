import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormatterComponentComponent } from './image-formatter-component.component';

describe('ImageFormatterComponentComponent', () => {
  let component: ImageFormatterComponentComponent;
  let fixture: ComponentFixture<ImageFormatterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFormatterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormatterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
