import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarService } from './shared/car/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiphyService } from './shared/giphy/giphy.service';
import { CarEditComponent } from './car-edit/car-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ApiService} from "./core/api.service";
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    LoginComponent
  ],
  imports: [
       BrowserModule,
       HttpClientModule,
       BrowserAnimationsModule,
       MatButtonModule,
       MatCardModule,
       MatInputModule,
       MatListModule,
       MatToolbarModule,
       FormsModule,
       ReactiveFormsModule,
       RouterModule.forRoot(appRoutes)
     ],
  providers: [CarService,GiphyService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
