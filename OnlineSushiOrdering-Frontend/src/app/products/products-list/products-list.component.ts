import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";
import {catchError, delay, Observable, Subscription, take} from "rxjs";

@Component({
  selector: 'app-MyLabel-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit{
  products: ProductDto[] | null | undefined;
  products$: Observable<ProductDto[]> | undefined;
  error: any;
  constructor(private _productsService:ProductsService) {}
  ngOnInit():void{
    this.products$ = //this part just get the data as observable object from backend
    this._productsService.getAll()
    /*  // this part be change to html file with "| async" code
      .pipe(
        take(1) // how many times we want to listen
      )
      // also sure about it will auto unsubscribe the observable,
      // otherwise we need implements OnDestroy and use "ngOnDestroy" to unsubscribe the getAll method.

      // this part change as "products$" variable
      .subscribe(products =>{ // subscribe the observable
        this.products = products;
      })*/
    /*  .pipe(
        delay(5000) // this part only for example to show the loading screen.
      )*/
      .pipe(
        catchError(err => {
          this.error = err;
          throw err;
        })
      )
    ;
  }
}
