import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akmessages',
  templateUrl: './akmessages.component.html',
  styleUrls: ['./akmessages.component.scss'],
})
export class AkmessagesComponent implements OnInit {

  constructor() { }

  message = localStorage.inItPage;

  ngOnInit() {

  }

}
