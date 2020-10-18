import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailModalComponent } from './product-detail-modal.component';

describe('ProductDetailDialogComponent', () => {
  let component: ProductDetailModalComponent;
  let fixture: ComponentFixture<ProductDetailModalComponent>;
  let modalServiceMock = {
    open: jest.fn()
  } as unknown as NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailModalComponent ],
      providers: [
        { provide: NgbModal, useValue: modalServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when button is pressed', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('#atem-open-modal-btn');
    button.click();
    tick();
    expect(modalServiceMock.open).toHaveBeenCalled();
  }));
});
