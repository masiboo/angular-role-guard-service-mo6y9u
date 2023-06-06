import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-everyone',
  templateUrl: './everyone.component.html',
  styleUrls: ['./everyone.component.css']
})
export class EveryoneComponent implements OnInit {
  selectedSerial:any = ''
  
  constructor() { }
  toolSeries = [
    {
      "Series": "12345678A",
      "Serials" : ["199921", "123321", "54654", "357", "386758", '123'],
      "State": ["OK","BAD","BAD","UNKNOWN", "OK"]
    }
  ]

  ngOnInit() {
  }

  OnSerialChanged(value){
    console.log(value)
  }


}