import { Component, OnInit } from '@angular/core';
import { KurirService } from '../kurir.service';
import { Kurir } from "../kurir";

@Component({
  selector: 'app-kurir',
  templateUrl: './kurir.component.html',
  styleUrls: ['./kurir.component.css']
})
export class KurirComponent implements OnInit {
	kurirData:Kurir[];
  constructor(private kurirService:KurirService) { 
  	this.kurirData = [];
  }

  ngOnInit() {
    this.kurirService.initData();
    this.kurirService.showKurir().subscribe(
      (data:Kurir[])=>{
        this.kurirData = data;
        console.log(data);
    });
    // kurir stream
    this.kurirService.kurirStream().subscribe(
      (data)=>{ 
        console.log(data);
        if(data.type == "add")
        {
          data.data.IDKurir = data.IDKurir;
          this.kurirData.unshift(data.data);
        }
        else if(data.type=="update")
        {
          for(let i =0; i<this.kurirData.length; i++)
          {
            if(this.kurirData[i].IDKurir == data.IDKurir)
            {
              this.kurirData[i] = data.data;
              this.kurirData[i].IDKurir = data.IDKurir;
            }
          }
        }
        else if(data.type == "delete")
        {
          this.kurirData = this.kurirData.filter(kurir=>kurir.IDKurir !==data.IDKurir);
        }
      });

  }

  kurirJenisChange(name)
  {
    if(name == "MTR")
      return "Motor";
    else if(name == "BSR")
      return "Besar";
  }

  doDeleteKurir(id)
  {
    this.kurirService.deleteKurir(id).subscribe((data)=>{
      console.log(data);
    });
  }

}
