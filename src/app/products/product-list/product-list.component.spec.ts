import { Component } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from '../../../../jest.setup';
import { ProductService } from '../product.service';
import { ProductListComponent } from './product-list.component';
import { ProductServiceMock } from './product-list.mocks';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductListComponent,
        MockComponent('atem-product-card', { inputs: ['product'],  }  as Component)
      ],
      providers: [
        { provide: ProductService, useClass: ProductServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
