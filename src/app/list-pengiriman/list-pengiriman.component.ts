import { Component, OnInit } from '@angular/core';
import { ListPengirimanService } from '../list-pengiriman.service';
@Component({
  selector: 'app-list-pengiriman',
  templateUrl: './list-pengiriman.component.html',
  styleUrls: ['./list-pengiriman.component.css']
})
export class ListPengirimanComponent implements OnInit {
	dataKurirMotor:any[];
	listKirim:any[];
  constructor(private listPengirimanService:ListPengirimanService) { }
  ngOnInit() {
  	this.initData();
  	this.listPengirimanService.callInitData();
  	this.listPengirimanService.showKurir().subscribe(
  		(data)=>{
  			this.dataKurirMotor = data;
  		});
  	this.listPengirimanService.showKurirList().subscribe(
  		(data)=>{
  			console.log(data);
  			this.listKirim = data;
  		})

    this.listPengirimanService.statusStream().subscribe(
      (data)=>{
        console.log("online ");
        console.log(data);
        
          for(let i =0; i<this.dataKurirMotor.length; i++)
          {
            if(this.dataKurirMotor[i].IDKurir == data.data.IDKurir)
            {
              this.dataKurirMotor[i].isActive = data.data.isActive;
            }
          }
      });
  }

  initData()
  {
  	this.dataKurirMotor = [];
  	this.listKirim = [];
  }

  cekJumlahKirim(id)
  {
  	let list =  this.listKirim.filter((data)=>{
  		return data.IDKurir == id;
  	})
  	if(list[0] == undefined)
  		return '0';
  	else
	  	return list[0].jumlah;

  }

}
