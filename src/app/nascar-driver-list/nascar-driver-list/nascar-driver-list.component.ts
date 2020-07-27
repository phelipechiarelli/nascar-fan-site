import { NascarDriverListModel } from './../../../models/nascar-driver-list.model';
import { NascarDriverListService } from './../../../services/nascar-driver-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nascar-driver-list',
  templateUrl: './nascar-driver-list.component.html',
  styleUrls: ['./nascar-driver-list.component.scss']
})
export class NascarDriverListComponent implements OnInit {

  driverList: NascarDriverListModel[];
  err: any;

  constructor(private driverListService: NascarDriverListService) {

    this.getDriversList();
   }

  ngOnInit(): void {
  }

  getDriversList() {
    this.driverListService.getNascarDriverList().subscribe(
      (driversData) => {
        this.driverList = driversData;        
      },
      (error: any) => {
        this.err = error;
      } 
    )
  }
}
