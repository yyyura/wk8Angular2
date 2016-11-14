import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  km: number = 100;
  miles: number = 60;

  constructor() { }

  KmToMiles(){
    this.miles=this.km*0.621371;
  }

  MilesToKm(){
    this.km=this.miles*1.60934;
  }

  ngOnInit() {
  }

}
