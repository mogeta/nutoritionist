import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LoginButtonComponent} from './login-button/login-button.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {StressSliderComponent} from './stress-slider/stress-slider.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './/app-routing.module';
import {DailyReportComponent} from './daily-report/daily-report.component';
import {SimpleListComponent} from './simple-list/simple-list.component';
import {MatTableModule} from '@angular/material';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartPageComponent } from './chart-page/chart-page.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginButtonComponent,
		StressSliderComponent,
		DailyReportComponent,
		SimpleListComponent,
		ChartPageComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,

		BrowserAnimationsModule,
		MatSliderModule,
		MatButtonModule,
		MatTableModule,
		AppRoutingModule,

		Ng2GoogleChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
