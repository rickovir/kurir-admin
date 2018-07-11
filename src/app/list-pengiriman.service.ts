import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import * as io from 'socket.io-client';
import {Kurir} from "./kurir";
import {PaketBarang} from "./PaketBarang";

@Injectable({
  providedIn: 'root'
})
export class ListPengirimanService {
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
  public callInitData()
  {
    this.socket.on('connect',()=>{
      this.socket.emit('show_list_pengiriman_motor');
    	this.socket.emit('show_kurir_motor');
    })
  }
  public callInitDataUpdate()
  {
    this.socket.on('connect',()=>{
      this.socket.emit('show_list_pengiriman_motor');
    	this.socket.emit('show_kurir_motor');
    	this.socket.emit('show_kurir_motor');
    })
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
	public callPaket(IDCabang)
	{
		this.socket.emit('show_paket_pengiriman', IDCabang );
	}
	// show_paket_barang
  public showKurirList()
  {
    let observable:Observable<any[]> = new Observable(
        (observer) => {
        this.socket.on('show_list_pengiriman_motor_messages', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
    // show_paket_barang
  public showKurir()
  {
    let observable:Observable<Kurir[]> = new Observable(
        (observer) => {
        this.socket.on('show_kurir_motor_messages', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
  public kurirStream()
  {
    let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('kurir_stream', 
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
			this.socket.on('show_paket_pengiriman_messages', 
				(data) => {
				observer.next(data);
				});
    	})
    return observable;
  }
  public callSelectKurir(id)
  {
    this.socket.emit("select_kurir",{IDKurir:id});
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
  public callKurirList(id)
  {
    this.socket.emit("show_list_pengiriman",{IDKurir:id});
  }

  public receiveKurirList()
  {
    let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('init_list_pengiriman', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }

  public addList(list):Observable<any>
  {
    let send = {
      type : 'add',
      list
    };
    console.log(send);
    this.socket.emit('list_pengiriman_stream', send);
    
      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }

  public deleteList(id):Observable<any>
  {
  	let send = {
      type : 'delete',
      IDPengiriman : id
    };
    console.log(send);
    this.socket.emit('list_pengiriman_stream', send);
    
      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('list_pengiriman_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }
  public statusStream()
  {
    let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('kurir_status', 
          (data) => {
          observer.next(data);
          });
        })
      return observable;
  }
}
