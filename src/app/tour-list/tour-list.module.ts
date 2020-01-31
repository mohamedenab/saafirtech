import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { TourListComponent } from './tour-list.component';



@NgModule({
  declarations: [TourListComponent],
  imports: [
    CommonModule,
    MatCardModule, MatDialogModule
  ]
})
export class TourListModule { }
