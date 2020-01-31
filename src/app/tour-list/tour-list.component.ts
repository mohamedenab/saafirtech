import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  tourLists = [
    {
      id: 0, name: 'European Discovery tour', image: '../../assets/images/77954-640x360-london_eye_housesofparliament_skyline_640.jpg', passangersNo: {
        adult: 2, child: 1, infant: 0
      }, date: { day: '5-10-2019', time: '05:00pm' }, amountPaid: '2,887'
    }, {
      id: 0, name: 'Trekking Mont Blanc', image: '../../assets/images/48997529_401.jpg', passangersNo: {
        adult: 2, child: 0, infant: 0
      }, date: { day: '11-1-2019', time: '01:00pm' }, amountPaid: '1,571'
    },
  ]
  @ViewChild('tour', { static: true }) tour: TemplateRef<any>;
  currentTour: Object;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openPopup(item) {
    console.log('lol');
    this.currentTour = item;
    this.dialog.open(this.tour);
  }
}
