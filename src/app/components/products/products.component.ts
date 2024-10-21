import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CategoriesService } from '../../core/services/categories.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, RouterLink, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {

  // Call Services
  private readonly _ProductsService = inject(ProductsService)
  private readonly _CategoriesService = inject(CategoriesService)

  // Variable to Store Data
  productsList: IProduct[] = [];
  categoriesList: string[] = [];
  searchText: string = '';

  // Create Variable to UnSubscribe
  getAllProductsSub!: Subscription;
  getAllCategoriesSub!: Subscription;



  ngOnInit(): void {
    
    // Get All Product Data From Apis And Store It
    this.getAllProductsSub = this._ProductsService.getAllProducts().subscribe({
      
      next:(res) => {
        this.productsList = res;
      }
    });
    
    // Get All Categories Data From Apis And Store It
    this.getAllCategoriesSub = this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res
      }
      })
  }

  ngOnDestroy(): void {
    this.getAllProductsSub?.unsubscribe();
    this.getAllCategoriesSub?.unsubscribe();
  }

}
