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
  constructor(public ocrService:OcrService) {

  }

  ngOnInit(){
    this.currentDate = new Date();
    this.amPm =   this.currentDate.getHours() >= 12 ? ' PM' : ' AM';
    this.currentDateFormatted = this.currentDate.getFullYear() + "-" + (this.currentDate.getMonth() + 1) + "-" + this.currentDate.getDate() + " " +  this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + this.amPm;
    this.currentDay = this.currentDate.toLocaleDateString('en-US', { weekday: 'long' });        
  }
  

}
