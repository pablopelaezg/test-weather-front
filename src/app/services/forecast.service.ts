import {Forecast} from '../model/forecast';
import {SelectionElement} from '../model/selectionelement';

export class ForecastService {

    constructor() {}

    getForecast(source: string, city: string, unit: string): Forecast {
        return {
            todayForecast: {
                day: 'wednesday',
                icon: 'cloudy',
                minTemperature: '10ºC',
                maxTemperature: '20ºC',
                summary: 'test summary'
            },
            nextDaysForecast: [
                {
                    day: 'thrusday',
                    icon: 'sunny',
                    minTemperature: '10ºC',
                    maxTemperature: '20ºC',
                    summary: 'test summary'
                },
                {
                    day: 'friday',
                    icon: 'rainy',
                    minTemperature: '10ºC',
                    maxTemperature: '20ºC',
                    summary: 'test summary'
                }
            ]
        };
    }

    getForecastSources(): Array<SelectionElement> {
      return [
        {
          name: 'Forecast.io',
          id: 'FORECAST'
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
          name: 'Madrid',
          id: 'MADRID'
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
