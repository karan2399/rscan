import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item.modal';
import { SplitService } from 'src/app/services/split.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-splitwise',
  templateUrl: './splitwise.component.html',
  styleUrls: ['./splitwise.component.scss'],
})
export class SplitwiseComponent  implements OnInit {
  @ViewChild('printContent', { static: false }) content!: ElementRef;
  itemName: string = '';
  itemPrice: number = 0;
  selectedUsers: string[] = [];
  totalBillAmount: number = 0;

  taxOptions = [0, 5, 13, 15, 20];
  items: any[] = [];

  // userName: string = 'Karan'; 

  showSummary: boolean = false;
  userGroupOwingSummary: { userGroup: string[], totalOwed: number, userDetails: { userName: string, amountOwed: number }[] }[] = [];
  sharedItemsByGroup: { userGroup: string[], items: { itemName: string, itemPrice: number, taxPercent: number, totalPrice: number }[] }[] = [];

  totalOwedByUsers: { userName: string, totalOwed: number, totalTax: number }[] = [];

  itemTax = 0;

  constructor(public splitService: SplitService) {}

  ngOnInit(): void {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push('item');
    }
      
  }


  addItem(){

    if (this.selectedUsers.includes('All')) {
      this.selectedUsers = this.splitService.getUsers().filter(user => user !== 'All');
    }


    if (this.itemName && this.itemPrice && this.selectedUsers.length > 0) {
      this.splitService.addItem(this.itemName,this.itemPrice, this.selectedUsers,this.itemTax);
      this.itemName = '';
      this.itemPrice = 0;
      this.selectedUsers = [];
    }
    this.showSummaryToUsers();
    this.itemTax = 0;

  }

  showSummaryToUsers(){
    this.showSummary = true;
    this.userGroupOwingSummary = this.splitService.getUserGroupOwingSummary();
    this.totalOwedByUsers = this.splitService.getTotalOwedByEachUser();
    this.totalBillAmount = this.splitService.getTotalBillAmount();
    this.sharedItemsByGroup = this.splitService.getItemsSharedPerGroup();
  }

  deleteItem(item: Item) {
    this.splitService.deleteItem(item);
    this.showSummaryToUsers();
  }


  //PDF printing
  async generatePDF(){
    const element = this.content.nativeElement;
    const doc = new jsPDF('p', 'mm', 'a4');

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const pageHeight = doc.internal.pageSize.getHeight();
    let heightLeft = pdfHeight;

    let position = 0;

    doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    // Get current date and time
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:.]/g, '');
    const fileName = `split-report-${timestamp}.pdf`;

    doc.save(fileName);

  }
}
