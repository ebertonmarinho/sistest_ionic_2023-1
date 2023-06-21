import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAddCarro(){
    this.router.navigate(['/carros/add-carro'])
  }

  gotoListCarros(){
    this.router.navigate(['/carros/list-carros'])
  }

  backtoMain(){
    this.router.navigate([''])
  }

}
