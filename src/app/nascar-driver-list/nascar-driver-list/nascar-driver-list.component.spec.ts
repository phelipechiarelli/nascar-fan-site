import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NascarDriverListComponent } from './nascar-driver-list.component';

describe('NascarDriverListComponent', () => {
  let component: NascarDriverListComponent;
  let fixture: ComponentFixture<NascarDriverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NascarDriverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NascarDriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
