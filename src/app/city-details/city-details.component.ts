import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Forecast } from 'src/model/OpenWeatherMapModel';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  weather:Forecast;
  constructor(private weatherService:WeatherService){
    weatherService.getForecast('Namur', 'BE').subscribe(weather => this.weather = weather);
    console.log(this.weather);
  }

  ngOnInit() {
  }

}
