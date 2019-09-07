import {DayForecast} from './dayforecast';

export interface Forecast {
    todayForecast?: DayForecast;
    nextDaysForecast?: Array<DayForecast>;
}
