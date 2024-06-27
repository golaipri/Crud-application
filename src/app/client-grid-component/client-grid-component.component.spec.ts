import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGridComponentComponent } from './client-grid-component.component';

describe('GridComponent', () => {
  let component: ClientGridComponentComponent;
  let fixture: ComponentFixture<ClientGridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientGridComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
