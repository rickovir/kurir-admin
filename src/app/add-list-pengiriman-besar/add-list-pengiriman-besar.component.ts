import { Component, OnInit } from '@angular/core';
import { ListPengirimanBesarService } from '../list-pengiriman-besar.service';
import {Kurir} from "../kurir";
import {PaketBarang} from "../PaketBarang";
import {DetailPengirimanBesar} from "../DetailPengirimanBesar";
import {ListPengirimanBesar} from "../ListPengirimanBesar";

@Component({
  selector: 'app-add-list-pengiriman-besar',
  templateUrl: './add-list-pengiriman-besar.component.html',
  styleUrls: ['./add-list-pengiriman-besar.component.css']
})
export class AddListPengirimanBesarComponent implements OnInit {
	cabangs:any[];
	IDCabang:number;
	IDKurir:number;
	kurirs:Kurir[];
	pakets:PaketBarang[];
	paketsOP:PaketBarang[];
	detailPengiriman:DetailPengirimanBesar[];
	isSubmit:boolean;
  constructor(private listPengirimanBesarService:ListPengirimanBesarService) { 
  }

  ngOnInit() {
  	this.isSubmit = false;
  	this.initData();

  	this.cabangs = [];
  	this.kurirs = [];

  	this.listPengirimanBesarService.initDataAdd();
  	this.listPengirimanBesarService.showCabang().subscribe(
  		(data:any[])=>{
  		this.cabangs = data;
  		console.log(data);
  	});
  	this.listPengirimanBesarService.showKurir().subscribe(
  		(data:Kurir[]) => {
  			this.kurirs =data;
  			console.log(data);
  			this.selectionKurirBesar();
  		});
  	this.listPengirimanBesarService.showPaketBarang().subscribe(
  		(data:PaketBarang[]) => {
  			this.pakets =data;
  			this.paketsOP =data;
  			console.log(data);
  		});
  }

  initData()
  {
  	this.pakets = [];
  	this.paketsOP = [];
  	this.detailPengiriman = [];
  	this.IDCabang = 0;
  	this.IDKurir = 0;
  }
  selectionKurirBesar()
  {
  	this.kurirs = this.kurirs.filter(data=>{
  		return data.jenis == "BSR";
  	});
  }

  addToList(data)
  {
  	let dataDetail:DetailPengirimanBesar = {
  		IDPaket : data.IDPaket,
  		IDDetailPengirimanBesar:0,
  		IDListPengirimanBesar:0,
  		created_on:0
  	};
  	this.detailPengiriman.push(dataDetail);
  	this.paketsOP = this.paketsOP.filter(paket=>paket.IDPaket !== data.IDPaket);
  }

  removeFromList(data)
  {
  	this.detailPengiriman = this.detailPengiriman.filter(detail=>detail.IDPaket !== data.IDPaket);
  	let tempPaket:PaketBarang[] = this.pakets.filter(paket=>paket.IDPaket == data.IDPaket);
  	this.paketsOP.push(tempPaket[0]);
  }

  getNamaPaket(IDPaket)
  {
  	let tempPaket = this.pakets.filter(paket=>paket.IDPaket == IDPaket);
  	return tempPaket[0].nama_paket;
  }

  showPaketFormCabang()
  {
  	this.listPengirimanBesarService.callPaket(this.IDCabang);
  }

  submitData()
  {
  	let list:ListPengirimanBesar = {
  		IDCabangAsal : parseInt(localStorage.getItem("IDCabang")),
  		IDCabangTujuan : this.IDCabang,
  		IDKurir : this.IDKurir,
  		IDListPengirimanBesar :0,
  		isSend:"N",
  		created_on :0
  	};
  	this.listPengirimanBesarService.addList(list, this.detailPengiriman).subscribe(
  		(data)=>{
  			console.log(data);
  		});
	this.isSubmit = true;

	setTimeout(()=>{
		this.isSubmit = false;
	},10000);
	this.initData();
  }

  // getNamaCabang(IDCabang)
  // {
  // 	let tempCabang = this.cabangs.filter(cabang=>cabang.IDCabang == IDCabang);
  // 	return tempCabang[0].nama_cabang;
  // }

}
