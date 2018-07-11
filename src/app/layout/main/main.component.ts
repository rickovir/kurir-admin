import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let username = localStorage.getItem("username");
	let password = localStorage.getItem("password");

	if(username == "" || username == undefined)
	{
		window.location.href = "/login";
	}
	else if(username != "YWRtaW4=")
	{
		window.location.href = "/login";
	}

	if(password == "" || password == undefined)
	{
		window.location.href = "/login";
	}
	else if(password != "YWRtaW4=")
	{
		window.location.href = "/login";
	}
  }

  logOut()
  {
  	localStorage.setItem('username','');
  	localStorage.setItem('password','');
  	window.location.href = "/login";
  }
}
