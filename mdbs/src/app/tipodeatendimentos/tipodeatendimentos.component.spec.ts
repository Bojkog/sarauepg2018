import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodeatendimentosComponent } from './tipodeatendimentos.component';

describe('TipodeatendimentosComponent', () => {
  let component: TipodeatendimentosComponent;
  let fixture: ComponentFixture<TipodeatendimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodeatendimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodeatendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
