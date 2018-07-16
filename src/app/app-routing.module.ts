import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StressSliderComponent} from "./stress-slider/stress-slider.component";
import {LoginButtonComponent} from "./login-button/login-button.component";

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: 'stress' },
  { path: 'stress', component: StressSliderComponent },
  { path: '**', component: LoginButtonComponent }
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
