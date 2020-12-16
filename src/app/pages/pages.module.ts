import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, AboutUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
