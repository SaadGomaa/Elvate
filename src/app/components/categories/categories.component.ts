import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  
  // Call Services
  private readonly _CategoriesService = inject(CategoriesService)

  // Variable to Store Data
  categoriesList: any[] = [];

  // Create Variable to UnSubscribe
  getAllCategoriesSub!: Subscription;

  ngOnInit(): void {
    this.getAllCategoriesSub = this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res;
      }
    })
  }

  ngOnDestroy(): void {
    this.getAllCategoriesSub?.unsubscribe();
  }

}
