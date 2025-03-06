import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPublicationComponent } from './ajout-publication.component';

describe('AjoutPublicationComponent', () => {
  let component: AjoutPublicationComponent;
  let fixture: ComponentFixture<AjoutPublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPublicationComponent]
    });
    fixture = TestBed.createComponent(AjoutPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
