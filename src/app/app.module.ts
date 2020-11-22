import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormReativoComponent } from './components/form-reativo/form-reativo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesListComponent,
    CreateCourseComponent,
    HomeComponent,
    FilterPipe,
    FormReativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
