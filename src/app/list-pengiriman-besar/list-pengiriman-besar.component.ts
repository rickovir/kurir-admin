import { Component, OnInit } from '@angular/core';
import { ListPengirimanBesarService } from '../list-pengiriman-besar.service';
import {Kurir} from "../kurir";
import {ListPengirimanBesar} from "../ListPengirimanBesar";

@Component({
  selector: 'app-list-pengiriman-besar',
  templateUrl: './list-pengiriman-besar.component.html',
  styleUrls: ['./list-pengiriman-besar.component.css']
})
export class ListPengirimanBesarComponent implements OnInit {
	cabangs:any[];
	IDCabang:string;
	lists:ListPengirimanBesar[];
	kurirs:Kurir[];
  constructor(private listPengirimanBesarService:ListPengirimanBesarService) { 
  }

  ngOnInit() {
  	this.listPengirimanBesarService.initData();
  	this.listPengirimanBesarService.showCabangAll().subscribe(
  		(data:any[])=>{
  		this.cabangs = data;
  		console.log(data);
  	});
  	this.listPengirimanBesarService.showKurir().subscribe(
  		(data:Kurir[]) => {
  			this.kurirs =data;
  			console.log(data);
  		});
  	this.listPengirimanBesarService.showList().subscribe(
  		(data:ListPengirimanBesar[])=>{
  			this.lists = data;
  			console.log(data);
  		});
    this.listPengirimanBesarService.ListPengirimanBesarStream().subscribe(
      (data:any)=>{
        console.log(data);
        if(data.type == "add")
        {
          data.data.IDListPengirimanBesar = data.IDListPengirimanBesar;
          this.lists.unshift(data.data);
        }
        else if(data.type="batal")
        {
          for(let i =0; i<this.lists.length; i++)
          {
            if(this.lists[i].IDListPengirimanBesar == data.dataID.IDListPengirimanBesar)
            {
              this.lists[i].isCancel = 'Y';
            }
          }
        }
      });
  }

  initData()
  {
  	this.cabangs = [];
  	this.IDCabang = "";
  }
  getCabangName(id)
  {
  	let tempCabang = this.cabangs.filter(data=>data.IDCabang == id);
  	return tempCabang[0].nama_cabang;
  }
  getKurirName(id)
  {
  	let tempKurir = this.kurirs.filter(data=>data.IDKurir == id);
  	return tempKurir[0].nama_kurir;
  }
  doBatalList(id)
  {
    var data = {IDListPengirimanBesar:id};
    this.listPengirimanBesarService.batalList(data).subscribe(data=>{
      console.log(data);
    });
  }

}
