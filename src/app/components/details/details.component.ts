import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy {

  // Call Services
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);

    // Variable to Store Data
    detailsList: IProduct | null = null;

    // Create Variable to UnSubscribe
    paramMapSub!: Subscription;
    getSpecificProductsSub!: Subscription;


    ngOnInit(): void {
      this.paramMapSub = this._ActivatedRoute.paramMap.subscribe({
        next: (p) => {
          let idProduct = p.get('id');
          this.getSpecificProductsSub = this._ProductsService.getSpecificProducts(idProduct).subscribe({
            next: (res) => {
              this.detailsList = res;
            }
          })
        }
      })
    }


    ngOnDestroy(): void {
      this.getSpecificProductsSub?.unsubscribe();
      this.paramMapSub?.unsubscribe();
    }

}
