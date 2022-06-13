import { TestBed } from '@angular/core/testing';
import { Invoice, InvoiceService } from './invoice.service';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { anything, instance, mock, when } from "ts-mockito";
import { Subject } from "rxjs";

describe('InvoiceService', () => {
	let service: InvoiceService;

	let response$ = new Subject<HttpResponse<{ list: Invoice[] }>>()
	let httpMock = mock(HttpClient);

	when(httpMock.get(anything())).thenReturn(response$)

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: HttpClient, useValue: instance(httpMock) }
			]
		});

		service = TestBed.inject(InvoiceService);
	});

	it('should get invoices list', () => {
		service.getInvoices('/1');

		response$.next(new HttpResponse({ body: { list: [ { id: 1 }, { id: 4 } ] } }))

		expect(service.invoices).toEqual([ { id: 1 }, { id: 4 } ])
	});

});
