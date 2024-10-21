import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-catdetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catdetails.component.html',
  styleUrl: './catdetails.component.scss'
})
export class CatdetailsComponent implements OnInit, OnDestroy {

    // Call Services
    private readonly _ActivatedRoute = inject(ActivatedRoute);
    private readonly _CategoriesService = inject(CategoriesService);
  
    // Variable to Store Data
    catDetails: IProduct[] = []

    // Create Variable to UnSubscribe
    paramMapSub!: Subscription;
    getSpecificCategoriesSub!: Subscription;


    ngOnInit(): void {
      this.paramMapSub = this._ActivatedRoute.paramMap.subscribe({
        next: (p) => {
          let nameCategories = p.get('name');
          this.getSpecificCategoriesSub = this._CategoriesService.getSpecificCategories(nameCategories).subscribe({
            next: (res) => {
              this.catDetails = res;
            }
          })
        }
      })
    }


    ngOnDestroy(): void {
      this.paramMapSub?.unsubscribe();
    }

}
