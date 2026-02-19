import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFiltroComponent } from './editor-filtro';

describe('EditorFiltro', () => {
  let component: EditorFiltroComponent;
  let fixture: ComponentFixture<EditorFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorFiltroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
