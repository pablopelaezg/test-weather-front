import { Component, OnInit, Input } from '@angular/core';
import {DayForecast} from '../../model/dayforecast';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input()
  private weekForecast: Array<DayForecast>;

  constructor() { }

  ngOnInit() {
  }

}
