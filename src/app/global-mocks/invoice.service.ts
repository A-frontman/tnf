import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class InvoiceService {

	constructor(private readonly httpClient: HttpClient) {
	}

	generate(id: number, condition: boolean) {

		if (condition) {
			this.httpClient.put('aoi-path', { id })
		}

	}
}
