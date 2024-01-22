import { createReducer, on } from '@ngrx/store';
import { eventsLoaded } from './events.actions';

export const initialState: string[] = [];

export const eventsReducer = createReducer(
  initialState,
  on(eventsLoaded, (state, { events }) => events)
);
