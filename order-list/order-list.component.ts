import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { PlacedOrder } from 'src/app/interface/data-type';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  placedOrders: PlacedOrder[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getPlacedOrders$().subscribe(orders => {
      this.placedOrders = orders;
    });
  }
}
