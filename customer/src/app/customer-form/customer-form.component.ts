import { Component, OnInit } from '@angular/core';

import {Customer} from './customer';
import {CustomerFromService} from './customer-form.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer = new Customer();
  customerFromService:CustomerFromService;

  indicators:Indicator[] = [
    new Indicator('1','Não contribuinte'),
    new Indicator('2','Contribuinte'),
    new Indicator('3','Contribuinte isento')
  ];

  types:Type[] = [
    new Type('1','Física'),
    new Type('2','Jurídica')
  ];

  constructor(customerFromService:CustomerFromService) {
    this.customerFromService = customerFromService;
   }

  ngOnInit() {
  }

  onSubmit(event:any) { 

    event.preventDefault()
    this.customerFromService.getAllCustomer()
    .subscribe(
    ctr => console.log(ctr[0].name),
    error => console.log('Erro ao tentar buscar lista de clientes'));;
  }

}

class Indicator{
  constructor(private id:string,private name:string){}
}

class Type{
  constructor(private id:string,private name:string){}
}
