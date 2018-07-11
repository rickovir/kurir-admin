export class ListPengiriman{
	IDPengiriman:number;
	IDCabang:number;
	IDKurir:number;
	IDPaket:number;
	prioritas:number;
	kategori_paket:string;
	status_pengiriman:string;

	constructor(){
		this.IDPengiriman=0;	
		this.IDCabang=0;	
		this.IDPaket=0;
		this.IDKurir=0;
		this.prioritas = 0;	
		this.status_pengiriman= "";	
		this.kategori_paket= "";	
	}
}