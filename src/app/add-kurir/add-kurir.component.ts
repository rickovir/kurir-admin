import { Component, OnInit } from '@angular/core';
import { Kurir } from '../Kurir';
import { KurirService } from '../kurir.service';

declare var google: any;
@Component({
  selector: 'app-add-kurir',
  templateUrl: './add-kurir.component.html',
  styleUrls: ['./add-kurir.component.css']
})
export class AddKurirComponent implements OnInit {
	kurir:Kurir;
	nama_kurir:string;
	telepon:string;
	alamat:string;
	jenis:string;
	password:string;
	isSubmit:boolean;
	// penempatan
	alamat_penempatan:string;
	lat:number;
	lng:number;
  constructor(private kurirService:KurirService) {
  	this.initVar();
  	this.isSubmit = false;
  }

  ngOnInit() {
  	// this.kurirService.initData();
  }

	initVar()
	{
		this.nama_kurir="";	
		this.telepon="";
		this.alamat="";
		this.jenis="";
		this.password="";
		this.alamat_penempatan="";
	}
	submitData()
	{
		this.kurir = {
			IDKurir:0,
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
		this.kurirService.addKurir(this.kurir, penempatan).subscribe(data=>{
			console.log(data);
		});
		this.isSubmit = true;

		setTimeout(()=>{
			this.isSubmit = false;
		},10000);
		this.initVar();
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
