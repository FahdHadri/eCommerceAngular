import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';


const routes: Routes = [
 {path:"larticles",component:ListarticlesComponent},
 {path:"lcategories",component:ListecategoriesComponent},
 {path:"lscategories",component:ListscategoriesComponent},
 {path:"larticlescard",component:ListarticlescardComponent},
 {path:"insertart", component:InsertarticlesComponent},
 {path:"listarticles", component:ListarticlestableComponent},
 {path:"editarticles/:id",component:ModifarticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
