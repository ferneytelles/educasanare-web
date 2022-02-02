import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPostComponent } from './help-post.component';

describe('HelpPostComponent', () => {
  let component: HelpPostComponent;
  let fixture: ComponentFixture<HelpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
