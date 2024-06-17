export interface ReceiptItem {
    itemName: string;
    quantity?: number;
    pricePerItem: number;
    subtotal?: number;
  }
  
  export interface Receipt {
    date: string;
    time: string;
    storeNumber: string;
    storeAddress: string;
    items: ReceiptItem[];
    discounts: number;
    tax: number;
    subTotal: number;
    totalAmount: number;
    paymentMethod: string;
    receiptNumber: string;
    cashier: string;
  }
  