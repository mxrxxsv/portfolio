import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design2',
  templateUrl: './design2.page.html',
  styleUrls: ['./design2.page.scss'],
})
export class Design2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public name: string = 'Kpopify';

  public resonate: any = ['../../assets/kpopify-1.jpg', '../../assets/kpopify-2.jpg', '../../assets/kpopify-3.jpg', '../../assets/kpopify-4.jpg'];

  route() {
    this.router.navigate(['./home']);
  }

}
