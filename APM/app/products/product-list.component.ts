import {Component, OnInit} from 'angular2/core';
import {ProductService} from './product.service';

import {IProduct} from './product';
import {StarComponent} from '../shared/star.component';
import{ProductFilterPipe} from './product-filter.pipe';
@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    directives: [StarComponent],
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe]
})


export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;
    constructor(private _productService : ProductService) { }

    toggleImage(): void {
	this.showImage = !this.showImage;
    }
    onRatingClicked(message: string) : void { 
	this.pageTitle = 'Product List: ' + products;
    }

    ngOnInit(): void {
	this._productService.getProducts()
	    .subscribe(
		products => this.products = products,
		    error=> this.errorMessage = <any>error);
    }
}

