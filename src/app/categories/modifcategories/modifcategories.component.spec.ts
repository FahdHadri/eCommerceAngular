import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcategoriesComponent } from './modifcategories.component';

describe('ModifcategoriesComponent', () => {
  let component: ModifcategoriesComponent;
  let fixture: ComponentFixture<ModifcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
