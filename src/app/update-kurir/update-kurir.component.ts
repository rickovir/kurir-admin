import { Component, OnInit } from '@angular/core';
import { KurirService } from '../kurir.service';
import { Kurir } from '../Kurir';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-update-kurir',
  templateUrl: './update-kurir.component.html',
  styleUrls: ['./update-kurir.component.css']
})
export class UpdateKurirComponent implements OnInit {
	kurir:Kurir;
	nama_kurir:string;
	telepon:string;
	alamat:string;
	jenis:string;
	password:string;
	IDKurir:number;
	isSubmit:boolean;
	// penempatan
	alamat_penempatan:string;
	lat:number;
	lng:number;
  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private kurirService:KurirService) {
  }

  ngOnInit() {
	this.initVar();
  	this.isSubmit = false;
  	let id;
  	this.route.params.subscribe(
		(param)=>{
			id  = param['id'];
		});
  	this.kurirService.callSelectKurir(id);

  	this.kurirService.receiveSelectKurir().subscribe(
  		(data)=>{
  			console.log(data);
  			this.nama_kurir = data.kurir[0].nama_kurir,
  			this.telepon = data.kurir[0].telepon;
  			this.alamat = data.kurir[0].alamat;
  			this.jenis = data.kurir[0].jenis;
  			this.password = data.kurir[0].password;
  			this.IDKurir = data.kurir[0].IDKurir;
  			this.alamat_penempatan = data.penempatan_detail[0].deskripsi_lokasi;
  			this.lat = data.penempatan_detail[0].lat;
  			this.lng = data.penempatan_detail[0].lng;
  		});
  }

	initVar()
	{
		this.nama_kurir="";	
		this.telepon="";
		this.alamat="";
		this.jenis="";
		this.password="";
		this.alamat_penempatan="";
		this.IDKurir = 0;
	}
	submitData()
	{
		this.kurir = {
			IDKurir:this.IDKurir,
			nama_kurir:this.nama_kurir,
			telepon:this.telepon,
			alamat:this.alamat,
			jenis:this.jenis,
			password:this.password,
			created_on:0
		};
		console.log(this.kurir);
		let penempatan = {
			alamat_penempatan:this.alamat_penempatan,
			lat : this.lat,
			lng :this.lng,
		}
		this.kurirService.updateKurir(this.kurir, penempatan).subscribe(
			data=>{
				console.log(data);
			});
		this.isSubmit = true;

		setTimeout(()=>{
			this.isSubmit = false;
		},10000);
	}

	setAlamatPenempatan(alamat)
	{
	this.alamat_penempatan = alamat;
	}
	setLokasi(lat,lng)
	{
		this.lat = lat;
		this.lng = lng;
	}
	RunAutoCompletePenempatan()
	{
		// this just for angular desktop
		var input = document.getElementById('alamatPenempatan');
		var options = {componentRestrictions: {country: 'id'}};
		var autocomplete = new google.maps.places.Autocomplete(input, options);

		autocomplete.addListener('place_changed', () =>{
		    var place = autocomplete.getPlace();
		    this.setAlamatPenempatan(place.formatted_address);
		    console.log(place.name);
		    this.setLokasi(place.geometry.location.lat(),place.geometry.location.lng());
		    console.log(this.lat);
		    console.log(this.lng);
		    if (!place.geometry) {
		      alert("No details available for input: '" + place.name + "'");
		    return;
		  }
		  });
	}
}
