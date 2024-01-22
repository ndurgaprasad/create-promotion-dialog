import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CreatePromotionDialogComponent } from './create-promotion-dialog/create-promotion-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { EffectsModule } from '@ngrx/effects';
import {EventService} from "./service/event.service";
import {EventsEffects} from "./store/events.effects";
import {eventsReducer} from "./store/events.reducer";
import {promotionReducer} from "./store/create-promotion-modal.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CreatePromotionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    StoreModule.forRoot({events: eventsReducer, promotion: promotionReducer}, {}),
    FormsModule,
    MatButton,
    MatDatepickerModule,
    MatNativeDateModule,
    EffectsModule.forRoot([EventsEffects])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
