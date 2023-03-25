import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { InsertcategoriesComponent } from './categories/insertcategories/insertcategories.component';
import { ModifcategoriesComponent } from './categories/modifcategories/modifcategories.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { InsertscategoriesComponent } from './scategories/insertscategories/insertscategories.component';
import { ModifscategoriesComponent } from './scategories/modifscategories/modifscategories.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListecategoriesComponent,
    InsertcategoriesComponent,
    ModifcategoriesComponent,
    ListarticlesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,
    ListscategoriesComponent,
    InsertscategoriesComponent,
    ModifscategoriesComponent,
    ListarticlescardComponent,
    ListarticlestableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
