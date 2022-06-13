import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class InvoiceService {

	invoices: Invoice[] = [];

	constructor(private readonly httpClient: HttpClient) {
	}

	getInvoices(path: string) {
		this.httpClient.get<HttpResponse<{ list: Invoice[] }>>(path).subscribe(
			(response) => {
				if (!response.body) {
					throw 'INCORRECT_RESPONSE'
				}

				this.invoices = response.body.list;
			}
		);
	}
}


interface Invoice {
	id: number;
	buyer: string;
	seller: string;
}
