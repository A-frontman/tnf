import { HttpClient } from "@angular/common/http";

export class DeepComparison {

	constructor(private http: HttpClient) {
	}

	callApi(id: string) {
		this.http.put('apiPath', { id });
	}

}
