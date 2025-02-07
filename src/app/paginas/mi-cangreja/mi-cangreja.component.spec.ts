import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCangrejaComponent } from './mi-cangreja.component';

describe('MiCangrejaComponent', () => {
  let component: MiCangrejaComponent;
  let fixture: ComponentFixture<MiCangrejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiCangrejaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiCangrejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
