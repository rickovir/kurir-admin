import { Component, OnInit } from '@angular/core';
import { PengirimanService } from '../pengiriman.service';
import { Pengiriman } from "../pengiriman";

@Component({
  selector: 'app-pengiriman',
  templateUrl: './pengiriman.component.html',
  styleUrls: ['./pengiriman.component.css']
})
export class PengirimanComponent implements OnInit {
	pengirimanData:Pengiriman[];
  constructor(private pengirimanService:PengirimanService) { 
  	this.pengirimanData = [];
  }

  ngOnInit() {
  	this.pengirimanService.getAllPengiriman().subscribe(
  		pengiriman=>{
  			this.pengirimanData = pengiriman;
  			console.log(this.pengirimanData);
  		});
  }

  deletePengiriman(id)
  {
  	this.pengirimanService.deletePengiriman(id).subscribe(
  		(data)=>{
  			console.log(data);
  		});
  }
  restorePengiriman(id)
  {
  	this.pengirimanService.restorePengiriman(id).subscribe(
  		(data)=>{
  			console.log(data);
  		});
  }

}
