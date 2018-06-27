import { Component, OnInit } from '@angular/core';
import { KurirService } from '../kurir.service';
import { Kurir } from "../kurir";

@Component({
  selector: 'app-kurir',
  templateUrl: './kurir.component.html',
  styleUrls: ['./kurir.component.css']
})
export class KurirComponent implements OnInit {
	kurirData:Kurir[];
  constructor(private kurirService:KurirService) { 
  	this.kurirData = [];
  }

  ngOnInit() {
  	this.kurirService.getAllKurir().subscribe(
  		kurir=>{
  			this.kurirData = kurir;
  			console.log(this.kurirData);
  		});
  }

  deleteKurir(id)
  {
  	this.kurirService.deleteKurir(id).subscribe(
  		(data)=>{
  			console.log(data);
  		});
  }
  restoreKurir(id)
  {
  	this.kurirService.restoreKurir(id).subscribe(
  		(data)=>{
  			console.log(data);
  		});
  }

}
