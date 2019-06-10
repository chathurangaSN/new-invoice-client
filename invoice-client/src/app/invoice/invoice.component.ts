import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  entryForm = this.fb.group({
    item: [''],
    qty: ['']
  }

  );
  itemList: Item[] = [
    { id: "S1A1N1U01", name: 'Anker milk powder 400g', rate: 350, dis: 5 },
    { id: "S1A2N1U01", name: 'Maliban milk powder 400g', rate: 300, dis: 10 },
    { id: "S1A1N1U03", name: 'Anker milk powder 1kg', rate: 100, dis: 5 },
    { id: "S1A2N1U03", name: 'Maliban milk powder 1kg', rate: 100, dis: 10 },
    { id: "S1A3N1U01", name: 'Raththi milk powder 400g', rate: 100, dis: 0 },
    { id: "S1A3N1U03", name: 'Raththi milk powder 1kg', rate: 100, dis: 0 },
    { id: "S1A1N1U02", name: 'Anker milk powder 800g', rate: 100, dis: 5 },
    { id: "S1A2N1U02", name: 'Maliban milk powder 800g', rate: 100, dis: 10 },
    { id: "S1A3N1U02", name: 'Raththi milk powder 800g', rate: 100, dis: 0 },
    { id: "S1A1N2U02", name: 'Anker butter 800g', rate: 100, dis: 5 }
  ];
  item1: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submitEntry() {
    console.log("in submitEntry");
    console.log(this.entryForm.value);

  }
  showEntry() {
    console.log("in showEntry");
  }
  showCustomerDetail() {
    console.log("in showCustomerDetail");
  }

  submitInvoiceDetail() {
    console.log("in submitInvoiceDetail");
  }

}
