import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { KurirService } from '../kurir.service';

import {Kurir} from "../kurir";

@Component({
  selector: 'app-kurir-detail',
  templateUrl: './kurir-detail.component.html',
  styleUrls: ['./kurir-detail.component.css']
})
export class KurirDetailComponent implements OnInit {
  kurir:any;

  constructor(  
  private route: ActivatedRoute,
  private router: Router,
  private kurirService: KurirService) { 
  	this.kurir= null;
  }

  ngOnInit() {
  	this.route.params.subscribe(
  		param =>{
  			console.log(param['id']);
  			this.kurirService.getKurir(param['id']).subscribe(
  				data=>{
  					this.kurir = data;
  					console.log(data);
  				}
  			);
  		}
	);
  }

}
