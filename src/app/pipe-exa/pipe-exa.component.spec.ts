import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExaComponent } from './pipe-exa.component';

describe('PipeExaComponent', () => {
  let component: PipeExaComponent;
  let fixture: ComponentFixture<PipeExaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeExaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
