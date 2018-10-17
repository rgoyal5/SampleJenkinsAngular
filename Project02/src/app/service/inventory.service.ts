import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  items: Item[];
  constructor() {
    this.items=[];
   }

   getAllItems(){
     return this.items;
   }

   add(item:Item){
     item.price=item.qty*item.rate;
     this.items.push(item);
   }
}
