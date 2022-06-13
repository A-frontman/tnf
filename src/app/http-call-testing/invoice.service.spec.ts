import { TestBed } from '@angular/core/testing';

import { InvoiceService } from './invoice.service';

describe('SomeService', () => {
  let service: InvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
