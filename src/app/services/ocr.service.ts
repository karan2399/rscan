import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { Receipt, ReceiptItem } from '../models/receipt.modal';



@Injectable({
  providedIn: 'root'
})
export class OcrService {

  receipt!: Receipt;
  products: { name: string, price: number }[] = [];
  recognizedText: any;

  constructor() { }

  recognizeImage(image: string): Promise<string> {
    return Tesseract.recognize(
      image,
      'eng',
      {
        logger: m => {}
      }
    ).then(({ data: { text } }) => {
      return text;
    }).catch(err => {
      console.error(err);
      return '';
    });
  }

  processTextToSheet(text:string){
    
  }

  parseReceipt(text: string): void {
    const lines = text.split('\n');
    const items: ReceiptItem[] = [];

    const productLines = lines.filter(line => /\$\d+\.\d{2} [DJ]$/.test(line));

    let date = '', time = '', storeNumber = '', storeAddress = '', discounts = 0, tax = 0,subTotal = 0, totalAmount = 0, paymentMethod = '', receiptNumber = '', cashier = '';

     let c =  productLines.map(line => {
      const parts = line.split(' ');
      const pricePerItem = parseFloat(parts[parts.length - 2].replace('$', ''));
      const itemName = parts.slice(0, parts.length - 2).join(' ');
      

      return { itemName, pricePerItem };
    });

    c.map(i => {
      items.push(i);
    })


    lines.forEach((line,index) => {
      if(line.includes('STORE')){
        storeNumber = line.split(' ')[1];
        storeAddress = lines[index + 1] + lines[index + 2] + lines[index + 3];
      }

      if(line.includes('SUBTOTAL')){
        subTotal = parseFloat(line[1].replace('$', '') || '0');
      }

      if(line.includes('TOTAL')){
        totalAmount = parseFloat(line[1].replace('$', '') || '0');
      }
      
    });
    this.receipt = { date, time, storeNumber, storeAddress, items, discounts, tax, subTotal, totalAmount, paymentMethod, receiptNumber, cashier };
  }


  parseProducts(text: string): void {
    
  }
  getReceipt(){
    return this.receipt;
  }

  setText(recognizedText: any) {
   this.recognizedText = recognizedText;
  }

  getText(){
    return this.recognizedText;
  }
}
