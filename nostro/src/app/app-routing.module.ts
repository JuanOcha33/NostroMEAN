import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "../app/components/photo-list/photo-list.component";
import { PhotoFormComponent } from "../app/components/photo-form/photo-form.component";
import { PhotoEditComponent } from '../app/components/photo-edit/photo-edit.component';
import { HomeComponent } from '../app/components/home/home.component';
import { NosotrosComponent } from '../app/components/nosotros/nosotros.component';
import { ContactoComponent } from '../app/components/contacto/contacto.component';
import { MenuComponent } from '../app/components/menu/menu.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photo/new',
    component: PhotoFormComponent
  },
  {
    path: 'photo/:id',
    component: PhotoEditComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
