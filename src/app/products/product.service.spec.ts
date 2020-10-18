import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from './product';
import { HttpErrorResponse } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', () => {
    const products: Product[] = [{ name: 'produc name' } as Product];

    service.products$.subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(products)
    );
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(service.productsUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(products);
  });

  it('should catch the error event', () => {
    const emsg = 'simulated network error';
    const expectedErrorMessage = `An error occurred: ${emsg}`;
    service.products$.subscribe(
      data => fail('should have failed with the network error'),
      (error) => {
        expect(error).toEqual(expectedErrorMessage);
      }
    );

    const req = httpTestingController.expectOne(service.productsUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
  
    service.products$.subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(emsg);
      }
    );
  
    const req = httpTestingController.expectOne(service.productsUrl);
  
    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
