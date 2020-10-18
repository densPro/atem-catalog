import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { MockBuilder } from 'ng-mocks';
import { ProductDetailModalComponent } from './products/product-detail-modal/product-detail-modal.component';
import { ProductListComponent } from './products/product-list/product-list.component';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent)
                   .mock(ProductCardComponent)
                   .mock(ProductDetailModalComponent)
                   .mock(ProductListComponent));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'atem-catalog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('atem-catalog');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Puppy food catalog');
    expect(compiled.querySelector('p').textContent).toContain('Lista de los productos que ofertamos');
  });
});
