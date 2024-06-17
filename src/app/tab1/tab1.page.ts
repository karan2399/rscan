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

  constructor(public ocrService:OcrService) {

  }

  ngOnInit(){
  }
  loadReceipt(){
    this.receipt = this.ocrService.getReceipt();
    this.ocrService.parseProducts(this.ocrService.getText());
    console.log(this.receipt);
    
  }

}
