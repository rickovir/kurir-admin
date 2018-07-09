import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import * as io from 'socket.io-client';

import {Kurir} from "./kurir";

@Injectable({
  providedIn: 'root'
})
export class KurirService {
    private socketUrl:string;
    private socket:any;
  constructor() {
    this.socketUrl = "http://localhost:3000";
    this.socket = io(this.socketUrl);
    this.socket.connect();  
  }
  public initData()
  {
    this.socket.on('connect',()=>{
      this.socket.emit('show_kurir');
    })
  }
    // show_paket_barang
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

  public addKurir(data, dataPenempatan):Observable<any>
  {
    let send = {
      type : 'add',
      data : data,
      cabang : {
        IDCabang : localStorage.getItem("IDCabang"),
        nama_cabang : localStorage.getItem("nama_cabang")
      },
      dataPenempatan
    };
    console.log(send);
    this.socket.emit('kurir_stream', send);
    
      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('kurir_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }
  public updateKurir(data, dataPenempatan):Observable<any>
  {
    let send = {
      type : 'update',
      data : data,
      IDKurir : data.IDKurir,
      cabang : {
        IDCabang : localStorage.getItem("IDCabang"),
        nama_cabang : localStorage.getItem("nama_cabang")
      },
      dataPenempatan
    };
    this.socket.emit('kurir_stream', send);
    
    console.log(send);

      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('kurir_stream', 
          (data) => {
            observer.next(data);
          });
        })
      return observable;
  }

  public deleteKurir(id):Observable<any>
  {
    let send = {
      type : 'delete',
      IDKurir : id
    };
    this.socket.emit('kurir_stream', send);
    
    console.log(send);

      let observable:Observable<any> = new Observable(
        (observer) => {
        this.socket.on('kurir_stream', 
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
}
