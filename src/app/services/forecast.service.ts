import {Forecast} from '../model/forecast';
import {SelectionElement} from '../model/selectionelement';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class ForecastService {

    constructor(private http: HttpClient) {}

    getForecast(source: string, city: string, unit: string): Observable<Forecast> {
        return this.http.get(environment.apiUrl, {
          params: {
            source,
            city,
            unit
          }
        });
    }

    getForecastSources(): Array<SelectionElement> {
      return [
        {
          name: 'DarkSky',
          id: 'DARKSKY'
        },
        {
          name: 'ApiXU',
          id: 'APIXU'
        }
      ];
    }

    getCities(): Array<SelectionElement> {
      return [
        {
          name: 'Bogotá',
          id: 'BOGOTA'
        },
        {
          name: 'Sao Paulo',
          id: 'SAO_PAULO',
        },
        {
          name: 'New York',
          id: 'NEW_YORK'
        }
      ];
    }

    getTemperatureUnits(): Array<SelectionElement> {
      return [
        {
          name: 'ºC',
          id: 'CELSIUS'
        },
        {
          name: 'ºF',
          id: 'FAHRENHEIT',
        }
      ];
    }

}
