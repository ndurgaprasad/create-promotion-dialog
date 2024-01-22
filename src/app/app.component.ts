import { Component } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {CreatePromotionDialogComponent} from "./create-promotion-dialog/create-promotion-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {Promotion} from "./model/promotion.model";
import {take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {
    // @ts-ignore
    this.store.pipe(select('promotion')).subscribe((promotion: Promotion) => {
      console.log('Promotion State:', promotion);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePromotionDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }
}
