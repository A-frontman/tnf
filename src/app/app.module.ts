import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentUtModule } from "./component-ut/component-ut.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ComponentUtModule,

		
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
