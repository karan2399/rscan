import { Component, OnInit } from '@angular/core';
import { Receipt } from '../models/receipt.modal';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  receipt!: Receipt;

  currentDate!: Date;
  currentDay!: string;
  currentDateFormatted!: string;
  amPm!: string;
  currentTime!: string;
  greeting!: string;
  constructor(public ocrService:OcrService) {

  }

  ngOnInit(){
    this.updateTime();
  
  }

   updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

    let greeting;
    if (now.getHours() < 12) {
        greeting = 'Good Morning';
    } else if (now.getHours() < 18) {
        greeting = 'Good Afternoon';
    } else if (now.getHours() < 22) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }

    this.currentTime = strTime;
    this.greeting = greeting;
    setInterval(this.updateTime, 1000);
}


  

}
