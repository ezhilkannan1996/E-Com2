import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.css']
})
export class ProductSidebarComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['Category 1', 'Category 2', 'Category 3']; // Update with your actual categories

  onCategorySelected(category: string): void {
    this.categorySelected.emit(category);
  }
}
