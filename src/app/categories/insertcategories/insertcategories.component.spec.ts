import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcategoriesComponent } from './insertcategories.component';

describe('InsertcategoriesComponent', () => {
  let component: InsertcategoriesComponent;
  let fixture: ComponentFixture<InsertcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
