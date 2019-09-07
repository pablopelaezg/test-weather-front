import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from '../../../model/dayforecast';

@Component({
  selector: 'app-week-item',
  templateUrl: './week-item.component.html',
  styleUrls: ['./week-item.component.css']
})
export class WeekItemComponent implements OnInit {

  @Input()
  private dayForecast: DayForecast;

  constructor() { }

  ngOnInit() {
  }

}
