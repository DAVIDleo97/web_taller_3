import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAutosComponent } from './lista-de-autos.component';

describe('ListaDeAutosComponent', () => {
  let component: ListaDeAutosComponent;
  let fixture: ComponentFixture<ListaDeAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
