import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContetbarComponent } from './contetbar.component';

describe('ContetbarComponent', () => {
  let component: ContetbarComponent;
  let fixture: ComponentFixture<ContetbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContetbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContetbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
