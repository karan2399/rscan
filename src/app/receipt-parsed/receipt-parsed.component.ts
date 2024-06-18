import { Component, OnInit } from '@angular/core';
import { Receipt } from '../models/receipt.modal';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-receipt-parsed',
  templateUrl: './receipt-parsed.component.html',
  styleUrls: ['./receipt-parsed.component.scss'],
})
export class ReceiptParsedComponent  implements OnInit {
  receipt!: Receipt;

  


  constructor(public ocrService:OcrService) { }

  ngOnInit( ) {
   
  }

  loadReceipt(){
    this.receipt = this.ocrService.getReceipt();
    this.ocrService.parseProducts(this.ocrService.getText());
    console.log(this.receipt);
    
  }

}
