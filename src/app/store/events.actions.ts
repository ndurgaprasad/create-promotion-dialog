import { createAction, props } from '@ngrx/store';

export const loadEvents = createAction('[Events] Load Events');
export const eventsLoaded = createAction('[Events] Events Loaded', props<{ events: string[] }>());
