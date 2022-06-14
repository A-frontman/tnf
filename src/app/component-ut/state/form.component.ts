import { Component, OnInit } from '@angular/core';
import { ProcessFormSubmitService } from "./process-form-submit.service";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.css' ]
})
export class FormComponent implements OnInit {

	filled = false;

	constructor(private readonly formService: ProcessFormSubmitService) {
	}

	ngOnInit(): void {
	}

	enableSubmit() {
		this.filled = true;
	}

	confirmSubmit() {
		if (this.filled) {
			this.formService.process();
		}
	}
}
