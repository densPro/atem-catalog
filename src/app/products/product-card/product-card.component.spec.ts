import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from '../../../../jest.setup';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../product';

describe('ProductComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductCardComponent,
        MockComponent('atem-product-detail-modal', { inputs: ['product'],  }  as Component)
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.product = { name: 'name', description: 'description'} as Product;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load image path when changes are detected.', () => {
    const product = { imageFileName: 'image-name'} as Product;
    component.product = product;
    component.ngOnChanges({});
    fixture.detectChanges();
    expect(component.imagePath).toEqual(`assets/products-photos/${product.imageFileName}`);
  });
});
