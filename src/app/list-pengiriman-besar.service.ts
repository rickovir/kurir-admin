import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as io from 'socket.io-client';
import {ListPengirimanBesar} from "./ListPengirimanBesar";
import {Kurir} from "./Kurir";
import {PaketBarang} from "./PaketBarang";

@Injectable({
  providedIn: 'root'
})
export class ListPengirimanBesarService {
	private socketUrl:string;
	private socket:any;

  constructor() {
    this.socketUrl = localStorage.getItem("socketUrl");
    if(this.socketUrl == undefined)
    {
      window.location.href = "/login";
    }
    else
    {
      this.socket = io(this.socketUrl);
      this.socket.connect();  
    }
  }
  	public initData():void
  	{
  		this.socket.on('connect',()=>{
  			let IDCabang = localStorage.getItem("IDCabang");
  			this.socket.emit('show_cabang', IDCabang );
  			this.socket.emit('show_kurir');
  			this.socket.emit('show_list_pengiriman_besar');
	  	});
	}
  	public initDataAdd():void
  	{
  		this.socket.on('connect',()=>{
  			let IDCabang = localStorage.getItem("IDCabang");
  			this.socket.emit('show_cabang_list', IDCabang );
  			this.socket.emit('show_kurir');
	  	});
	}
	public callPaket(IDCabang)
	{
		this.socket.emit('show_paket_list', IDCabang );
	}
	 // show_cabang
  public showCabangAll()
  {
  	let observable:Observable<any[]> = new Observable(
    	(observer) => {
			this.socket.on('show_cabang_messages', 
				(data) => {
				observer.next(data);
				});
    	})
    return observable;
  }
	 // show_cabang
  public showCabang()
  {
  	let observable:Observable<any[]> = new Observable(
    	(observer) => {
			this.socket.on('show_cabang_list_messages', 
				(data) => {
				observer.next(data);
				});
    	})
    return observable;
  }
  // show_kurir
  public showKurir()
  {
    let observable:Observable<Kurir[]> = new Observable(
        (observer) => {
        this.socket.on('show_kurir_messages', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
  // show_kurir
  public showList()
  {
    let observable:Observable<ListPengirimanBesar[]> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_besar_messages', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
	 // show_cabang
  public showPaketBarang()
  {
  	let observable:Observable<PaketBarang[]> = new Observable(
    	(observer) => {
			this.socket.on('show_paket_list_messages', 
				(data) => {
				observer.next(data);
				});
    	})
    return observable;
  }

  public ListPengirimanBesarStream()
  {
    let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_besar_stream', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
  public addList(list, detail):Observable<any>
  {
    let send = {
      type : 'add',
      list,
      detail : detail,
    };
    console.log(send);
    this.socket.emit('list_pengiriman_besar_stream', send);
    
      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_besar_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }
  public batalList(data)
  {
    let send = {
      type : 'batal',
      data
    };
    console.log(send);
    this.socket.emit('list_pengiriman_besar_stream', send);
    
      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_besar_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }
  
  public callSelectListBesar(id)
  {
    this.socket.emit("select_list_pengiriman_besar",{IDListPengirimanBesar:id});
  }
  public receiveSelectKurir()
  {
  let observable:Observable<any> = new Observable(
      (observer) => {
      this.socket.on('select_kurir_messages', 
        (data) => {
        observer.next(data);
        });
      })
    return observable;
  }
}
