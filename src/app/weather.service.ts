import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from 'src/model/OpenWeatherMapModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiBaseUrl:string = "http://api.openweathermap.org/data/2.5/forecast";
  private apiKey:string = "09eff06ee75bc6e0f67aec4023db2554";
  
  constructor(private http:HttpClient) 
  { 
  
  }
  getForecast(cityName:string, countryIsoCode: string): Observable<Forecast>{
    return this.http.get<Forecast>(`${this.apiBaseUrl}?q=${cityName},${countryIsoCode}&APPID=${this.apiKey}`);
  }
}
