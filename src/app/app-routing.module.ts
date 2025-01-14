import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    //Hasta el import es la primera parte es el path del módulo que quiero cargar de manera estática, la segunda parte le indica que cargue como se llama ese componente
    loadChildren: () => import("./countries/countries.module").then(m => m.CountriesModule)
  },
  {
    //Si no es ninguno de los de arriba, manda a home
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
