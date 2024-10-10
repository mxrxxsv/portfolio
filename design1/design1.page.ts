import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.page.html',
  styleUrls: ['./design1.page.scss'],
})
export class Design1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public name: string = 'Resonate';

  public resonate: any = ['../../assets/resonate-1.jpg', '../../assets/resonate-2.jpg', '../../assets/resonate-3.jpg', '../../assets/resonate-4.jpg'];

  route() {
    this.router.navigate(['./home']);
  }

}
