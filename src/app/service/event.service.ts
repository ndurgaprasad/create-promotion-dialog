// event.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private mockEvents: string[] = ['Event 1', 'Event 2', 'Event 3'];

  constructor() {}

  getEvents(): Observable<string[]> {
    return of(this.mockEvents);
  }
}
