import { Component, OnInit } from '@angular/core';
import {StressStoreServiceService} from '../stress-store-service/stress-store-service.service';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  constructor(public db: StressStoreServiceService) { }

  ngOnInit() {
  }

}
