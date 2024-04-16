import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWithAngularMaterialComponent } from './get-all-with-angular-material.component';

describe('GetAllWithAngularMaterialComponent', () => {
  let component: GetAllWithAngularMaterialComponent;
  let fixture: ComponentFixture<GetAllWithAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllWithAngularMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllWithAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
