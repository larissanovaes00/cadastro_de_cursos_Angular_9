import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { FormReativoComponent } from './components/form-reativo/form-reativo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo-curso', component: FormReativoComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
