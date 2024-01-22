import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import * as eventsActions from "../store/events.actions";
import * as modalActions from "../store/create-promotion-modal.actions";
import {Observable} from "rxjs";
import {Promotion} from "../model/promotion.model";

@Component({
  selector: 'app-create-promotion-dialog',
  templateUrl: './create-promotion-dialog.component.html',
  styleUrl: './create-promotion-dialog.component.scss'
})
export class CreatePromotionDialogComponent {
  promotionName: string;
  startDate: Date;
  endDate: Date;
  selectedEvent: string;
  events$: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<CreatePromotionDialogComponent>,
    private store: Store
  ) {
    // @ts-ignore
    this.events$ = this.store.pipe(select('events'));
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDateChange(): void {
    if (this.startDate && this.endDate) {
      this.store.dispatch(eventsActions.loadEvents());
    }
  }

  onSaveClick(): void {
    const promotion: Promotion = {
      name: this.promotionName,
      startDate: this.startDate,
      endDate: this.endDate,
      event: this.selectedEvent
    };

    this.store.dispatch(modalActions.savePromotion({ promotion: promotion }));

    this.dialogRef.close();
  }

  isValid(): boolean {
    return !!this.promotionName && !!this.startDate && !!this.endDate && !!this.selectedEvent;
  }
}
