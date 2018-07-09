export class ListPengirimanBesar{
	IDListPengirimanBesar:number;
	IDCabangTujuan:number;
	IDKurir:number;
	IDCabangAsal:number;
	isSend:string;
	created_on:number;

	constructor(){
		this.IDListPengirimanBesar=0;	
		this.IDCabangAsal=0;	
		this.IDCabangTujuan=0;
		this.isSend = "N";
		this.created_on = 0;	
	}
}