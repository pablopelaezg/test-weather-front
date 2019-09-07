import { Component, OnInit } from '@angular/core';
import {Forecast} from '../model/forecast';
import {ForecastService} from '../services/forecast.service';
import {SelectionElement} from '../model/selectionelement';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private forecast: Forecast;

  private source: string;
  private city: string;
  private unit: string;

  private forecastSources: Array<SelectionElement>;
  private cities: Array<SelectionElement>;
  private units: Array<SelectionElement>;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.forecastSources = this.forecastService.getForecastSources();
    this.cities = this.forecastService.getCities();
    this.units = this.forecastService.getTemperatureUnits();
  }

  getForecast() {
    this.forecast = this.forecastService.getForecast(this.source, this.city, this.unit);
  }
}
