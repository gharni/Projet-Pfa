import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
// import { ProductsService } from '../Services/products.service';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  listeproduit!:Product[]


  // private S:ProductsService
  constructor(  private router: Router, private route: ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.S.getNewproduit().subscribe((dat:Product[])=>{
    //   return this.listeproduit = dat;
    // });
  }

  }
  