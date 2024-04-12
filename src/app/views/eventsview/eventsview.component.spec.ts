import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsviewComponent } from './eventsview.component';

describe('EventsviewComponent', () => {
  let component: EventsviewComponent;
  let fixture: ComponentFixture<EventsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
