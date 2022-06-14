import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ProcessFormSubmitService } from "./process-form-submit.service";
import { instance, mock, verify } from "ts-mockito";
import { By } from "@angular/platform-browser";

describe('FormComponent', () => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	let formServiceMock: ProcessFormSubmitService;

	beforeEach(async () => {

		formServiceMock = mock(ProcessFormSubmitService)

		await TestBed.configureTestingModule({
			declarations: [ FormComponent ],
			providers: [
				{ provide: ProcessFormSubmitService, useValue: instance(formServiceMock) }
			]
		})
		.compileComponents();

		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Wrong way', () => {
		it('should not submit when form is not filled', () => {
			// Given
			const component = fixture.componentInstance;

			// When
			component.confirmSubmit()

			// Then
			verify(formServiceMock.process()).never();
		});

		it('should submit when form is filled', () => {
			// Given
			const component = fixture.componentInstance;

			// When
			component.enableSubmit()
			component.confirmSubmit()

			// Then
			verify(formServiceMock.process()).never();
		});
	})

	describe('Better way', () => {
		it('should not submit when form is not filled', () => {
			// Given
			const buttons = fixture.debugElement.queryAll(By.css('button'))
			const submitButton = buttons[1];

			// When
			submitButton.nativeElement.click();
			fixture.detectChanges();

			// Then
			verify(formServiceMock.process()).never();
		});

		it('should submit when form is filled', () => {
			// Given
			const buttons = fixture.debugElement.queryAll(By.css('button'))
			const fillFormButton = buttons[0];
			const submitButton = buttons[1];

			// When
			fillFormButton.nativeElement.click();
			// fixture.detectChanges();
			submitButton.nativeElement.click();

			// Then
			verify(formServiceMock.process()).once();
		});
	})
});
