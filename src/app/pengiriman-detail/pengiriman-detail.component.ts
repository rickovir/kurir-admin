import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PengirimanService } from '../pengiriman.service';

import {Pengiriman} from "../pengiriman";

@Component({
  selector: 'app-pengiriman-detail',
  templateUrl: './pengiriman-detail.component.html',
  styleUrls: ['./pengiriman-detail.component.css']
})
export class PengirimanDetailComponent implements OnInit {
  pengiriman:any;

  constructor(  
  private route: ActivatedRoute,
  private router: Router,
  private pengirimanService: PengirimanService) { 
  	this.pengiriman= null;
  }

  ngOnInit() {
  	this.route.params.subscribe(
  		param =>{
  			console.log(param['id']);
  			this.pengirimanService.getPengiriman(param['id']).subscribe(
  				data=>{
  					this.pengiriman = data;
  					console.log(data);
  				}
  			);
  		}
	);
  }

}
