import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './state/form.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
	declarations: [
		FormComponent
	],
	exports: [
		FormComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule
	]
})
export class ComponentUtModule {
}
