import { Component, OnInit } from '@angular/core';
import {PaketBarang} from "../PaketBarang";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListPengirimanService } from '../list-pengiriman.service';
import { ListPengiriman } from '../ListPengiriman';
import { Kurir } from '../Kurir';

@Component({
  selector: 'app-update-list-pengiriman',
  templateUrl: './update-list-pengiriman.component.html',
  styleUrls: ['./update-list-pengiriman.component.css']
})
export class UpdateListPengirimanComponent implements OnInit {
	cabangs:any[];
	pakets:PaketBarang[];
	paketsOP:PaketBarang[];
  listPengirimanInit:any[];
	listPengiriman:ListPengiriman[];
	IDKurir:number;
	nama_kurir:string;
	alamat_penempatan:string;
	lat:number;
	lng:number;
  isSubmit:boolean;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private listPengirimanService:ListPengirimanService) { 
  }

  ngOnInit() {  	
    this.isSubmit = false;
    this.initData();
  	let id;
  	let IDCabang = localStorage.getItem('IDCabang');
  	this.route.params.subscribe(
		(param)=>{
			id  = param['id'];
		});
  	this.listPengirimanService.callSelectKurir(id);

  	this.listPengirimanService.receiveSelectKurir().subscribe(
  		(data)=>{
  			console.log(data);
  			this.nama_kurir = data.kurir[0].nama_kurir,
  			this.IDKurir = data.kurir[0].IDKurir;
  			this.alamat_penempatan = data.penempatan_detail[0].deskripsi_lokasi;
  			this.lat = data.penempatan_detail[0].lat;
  			this.lng = data.penempatan_detail[0].lng;
  		});

  	this.cabangs = [];
    this.listPengirimanService.showCabang().subscribe(
      (data:any[])=>{
      this.cabangs = data;
      console.log(data);
    });
    this.listPengirimanService.callKurirList(id);
  	this.listPengirimanService.receiveKurirList().subscribe(
  		(data:any[])=>{
  		this.listPengirimanInit = data;
  		console.log(data);
  	});
  	this.listPengirimanService.showPaketBarang().subscribe(
  		(data:PaketBarang[]) => {
  			this.pakets =data;
  			this.paketsOP =data;
  			console.log(data);
  		});
  	this.listPengirimanService.callPaket(IDCabang);
  }
  initData()
  {
  	this.pakets = [];
  	this.paketsOP = [];
    this.listPengiriman = [];
    this.listPengirimanInit = [];
    this.IDKurir = 0;
    this.nama_kurir = "";
    this.alamat_penempatan ="";
    this.lat=0;
    this.lng = 0;
  }
  addToList(data)
  {
  	let prioritas = 0;
  	if(data.kategori_paket == "EXP")
  	{
  		prioritas = 1;
  	}
  	let dataDetail:ListPengiriman = {
  		IDPaket : data.IDPaket,
  		IDPengiriman:0,
  		IDKurir:this.IDKurir,
  		prioritas:prioritas,
  		kategori_paket:data.kategori_paket,
  		IDCabang:parseInt(localStorage.getItem('IDCabang'))
  	};
  	this.listPengiriman.push(dataDetail);
  	this.paketsOP = this.paketsOP.filter(paket=>paket.IDPaket !== data.IDPaket);
  }

  removeFromList(data)
  {
  	this.listPengiriman = this.listPengiriman.filter(detail=>detail.IDPaket !== data.IDPaket);
  	let tempPaket:PaketBarang[] = this.pakets.filter(paket=>paket.IDPaket == data.IDPaket);
  	this.paketsOP.push(tempPaket[0]);
  }

  getNamaPaket(IDPaket)
  {
    let tempPaket = this.pakets.filter(paket=>paket.IDPaket == IDPaket);
    return tempPaket[0].nama_paket;
  }

  getAlamatPaket(IDPaket)
  {
    let tempPaket = this.pakets.filter(paket=>paket.IDPaket == IDPaket);
    return tempPaket[0].alamat_penerima;
  }

  submitData()
  {
    this.listPengirimanService.addList(this.listPengiriman).subscribe(
      data=>{
        console.log(data);
      });
    this.isSubmit = true;

    setTimeout(()=>{
      this.isSubmit = false;
    },10000);
    window.location.reload();
  }

  deleteList(data)
  {
    this.listPengirimanService.deleteList(data.IDPengiriman).subscribe(
      dataDB=>{
        console.log(dataDB);
      });

        let paketAdd:PaketBarang = {
          IDPaket:data.IDPaket,
          IDCabang:data.IDCabang,
          nama_paket:data.nama_paket,
          no_resi:data.no_resi,
          nama_pengirim:data.nama_pengirim,
          alamat_pengirim:data.alamat_pengirim,
          telepon_pengirim:data.telepon_pengirim,
          nama_penerima:data.nama_penerima,
          alamat_penerima:data.alamat_penerima,
          telepon_penerima:data.telepon_penerima,
          berat:data.berat,
          kategori_paket:data.kategori_paket,
          jenis_paket:data.jenis_paket,
          tarif:data.tarif,
          created_on:data.created_on,
          lat:data.lat,
          lng:data.lng,
        };

        console.log(paketAdd);
        this.listPengirimanInit = this.listPengirimanInit.filter(nowData=>nowData.IDPengiriman !== data.IDPengiriman);
        this.pakets.push(paketAdd);
        // this.paketsOP.push(paketAdd);
  }
}
