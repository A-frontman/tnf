import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class InvoiceService {

	invoices: Invoice[] = [];

	constructor(private readonly httpClient: HttpClient) {
	}

	getInvoices(userId: string) {
		this.httpClient.get<HttpResponse<{ list: Invoice[] }>>(`${ environment.api }/${ userId }`).subscribe(
			(response) => {
				setTimeout(() => {

					if (!response.body) {
						throw 'INCORRECT_RESPONSE'
					}

					this.invoices = response.body.list;

				}, 500)
			}
		);
	}
}


export interface Invoice {
	id: number;
}
