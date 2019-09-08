import { Component, OnInit } from '@angular/core';
import {Forecast} from '../model/forecast';
import {SelectionElement} from '../model/selectionelement';
import {ForecastService} from '../services/forecast.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  private form: FormGroup;

  constructor(private forecastService: ForecastService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forecastSources = this.forecastService.getForecastSources();
    this.cities = this.forecastService.getCities();
    this.units = this.forecastService.getTemperatureUnits();
    this.makeForm();
  }

  getForecast() {
    this.forecastService.getForecast(this.source, this.city, this.unit)
      .subscribe(forecast => {
        this.forecast = forecast;
      });
  }

  makeForm() {
    this.form = this.formBuilder.group({
      source: ['', Validators.required],
      city: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }
}
