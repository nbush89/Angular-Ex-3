import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {
  count: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(){
    this.count += 1
  }
  decreaseCount(){
    this.count -= 1
  }
}
