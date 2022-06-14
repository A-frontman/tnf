import { TestBed } from '@angular/core/testing';
import { InvoiceService } from './invoice.service';
import { HttpClient } from "@angular/common/http";
import { anything, deepEqual, instance, mock, verify } from "ts-mockito";

describe('InvoiceService', () => {
	let service: InvoiceService;

	let httpMock = mock(HttpClient)

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: HttpClient, useValue: instance(httpMock) }
			]
		});

		service = TestBed.inject(InvoiceService);
	});

	it('should call http PUT when condition is true', () => {
		// Given
		const id = 2;

		// When
		service.generate(id, true)

		// Then
		verify(httpMock.put(anything(), deepEqual({ id }))).once()
	});

	it('should call not http PUT when condition is false', () => {
		// Given
		const id = 2;

		// When
		service.generate(id, false)

		// Then
		verify(httpMock.put(anything(), anything())).never()
	});
});
