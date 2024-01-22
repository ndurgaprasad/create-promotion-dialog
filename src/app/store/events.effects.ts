import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as eventsActions from './events.actions';
import {EventService} from "../service/event.service";

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}

  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventsActions.loadEvents),
      mergeMap(() =>
        this.eventService.getEvents().pipe(
          map(events => eventsActions.eventsLoaded({ events })),
          catchError(() => of({ type: 'Error loading events' }))
        )
      )
    )
  );
}
