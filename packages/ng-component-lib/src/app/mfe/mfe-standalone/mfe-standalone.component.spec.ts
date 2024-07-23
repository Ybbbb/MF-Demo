import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeStandaloneComponent } from './mfe-standalone.component';

describe('MfeStandaloneComponent', () => {
  let component: MfeStandaloneComponent;
  let fixture: ComponentFixture<MfeStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
