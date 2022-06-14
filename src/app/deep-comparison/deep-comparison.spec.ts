import { HttpClient } from "@angular/common/http";
import { anything, deepEqual, instance, mock, verify } from "ts-mockito";
import { DeepComparison } from "./deep-comparison";

describe('DeepComparison - Objects', () => {

	it('Values comparison', () => {
		expect(1).toBe(1);
	});

	it('Values deep comparison', () => {
		expect(1).toEqual(1);
	});

	it('Objects comparison', () => {
		expect({ id: 1 }).toBe({ id: 1 });
	});

	it('Objects deep comparison', () => {
		expect({ id: 1 }).toEqual({ id: 1 });
	});

});

describe('DeepComparison - Function Call', () => {

	let httpMock: HttpClient;
	let classToBeTested: DeepComparison;

	beforeEach(() => {
		httpMock = mock(HttpClient);

		classToBeTested = new DeepComparison(instance(httpMock))
	})

	it('No params comparison', () => {
		classToBeTested.callApi('1');

		verify(httpMock.put(anything(), anything())).once();
	});

	it('No deep comparison', () => {
		classToBeTested.callApi('1');

		verify(httpMock.put(anything(), { id: '1' })).once();
	});

	it('Deep comparison', () => {
		classToBeTested.callApi('1');

		verify(httpMock.put(anything(), deepEqual({ id: '1' }))).once();
	});

	describe('Object clonning', () => {

		it('Object reference', () => {
			const obj1 = { id: 1 }
			const obj2 = obj1;

			expect(obj1).toBe(obj2)
		})

		it('Object reference - change value', () => {
			const obj1 = { id: 1 }
			const obj2 = obj1;

			obj2.id = 2;

			expect(obj1.id).toBe(1)
		})

		it('Object.assign', () => {
			const obj1 = { id: 1 }
			const obj2 = Object.assign({}, obj1);

			expect(obj1).toBe(obj2)
		})

		it('Object.assign - deep comparison', () => {
			const obj1 = { id: 1 }
			const obj2 = Object.assign({}, obj1);

			expect(obj1).toEqual(obj2)
		})
	})

});
