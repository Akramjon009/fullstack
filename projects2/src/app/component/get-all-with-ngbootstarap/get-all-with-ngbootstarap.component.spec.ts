import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWithNgbootstarapComponent } from './get-all-with-ngbootstarap.component';

describe('GetAllWithNgbootstarapComponent', () => {
  let component: GetAllWithNgbootstarapComponent;
  let fixture: ComponentFixture<GetAllWithNgbootstarapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllWithNgbootstarapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllWithNgbootstarapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
