export class ListPengiriman{
	IDPengiriman:number;
	IDCabang:number;
	IDKurir:number;
	IDPaket:number;
	prioritas:number;
	kategori_paket:string;

	constructor(){
		this.IDPengiriman=0;	
		this.IDCabang=0;	
		this.IDPaket=0;
		this.IDKurir=0;
		this.prioritas = 0;	
		this.kategori_paket= "";	
	}
}