import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { KurirComponent } from './kurir/kurir.component';
import { AcaraComponent } from './acara/acara.component';
import { PengirimanComponent} from './pengiriman/pengiriman.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PengirimanDetailComponent } from './pengiriman-detail/pengiriman-detail.component';
import { KurirDetailComponent } from './kurir-detail/kurir-detail.component';
import { AcaraDetailComponent } from './acara-detail/acara-detail.component';
import { AddKurirComponent } from './add-kurir/add-kurir.component';
import { UpdateKurirComponent } from './update-kurir/update-kurir.component';
import { ListPengirimanBesarComponent } from './list-pengiriman-besar/list-pengiriman-besar.component';
import { AddListPengirimanBesarComponent } from './add-list-pengiriman-besar/add-list-pengiriman-besar.component';
import { UpdateListPengirimanBesarComponent } from './update-list-pengiriman-besar/update-list-pengiriman-besar.component';

const adminRoute:Routes =[
 {
   path:'home',
   component:HomeComponent
 },
  {
   path:'kurir/add',
   component:AddKurirComponent
 },
  {
   path:'kurir',
   component:KurirComponent
 },
 {
    path:"kurir/update/:id",
    component:UpdateKurirComponent
 },
 {
   path:'kurir/:id',
   component:KurirDetailComponent
 },
  {
   path:'list-pengiriman-besar',
   component:ListPengirimanBesarComponent
 },
 {
    path:"list-pengiriman-besar/update/:id",
    component:UpdateListPengirimanBesarComponent
 },
  {
   path:'list-pengiriman-besar/add',
   component:AddListPengirimanBesarComponent
  },
 {
   path:'pengiriman',
   component:PengirimanComponent
 },
  {
   path:'pengiriman/:id',
   component:PengirimanDetailComponent
 }
];

const appRoute: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component:MainComponent,
    children:adminRoute
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AcaraComponent,
    KurirComponent,
    PengirimanComponent,    
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PengirimanDetailComponent,
    KurirDetailComponent,
    AcaraDetailComponent,
    AddKurirComponent,
    UpdateKurirComponent,
    ListPengirimanBesarComponent,
    AddListPengirimanBesarComponent,
    UpdateListPengirimanBesarComponent
  ],
  imports: [


    RouterModule.forRoot(
      appRoute,
      { enableTracing: true }
    ),


    BrowserModule,

    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
