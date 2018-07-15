import { Component, OnInit } from '@angular/core';
import {MatSliderModule}   from '@angular/material/slider';
@Component({
  selector: 'stress-slider',
  templateUrl: './stress-slider.component.html',
  styleUrls: ['./stress-slider.component.css']
})
export class StressSliderComponent implements OnInit {

  public stressValue = 50;

  constructor() { }

  ngOnInit() {
  }

  changeStressParameter(e){
    console.log(e);
    console.log(this.stressValue);
  }

}
