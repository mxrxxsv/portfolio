// import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal)
  modal!: IonModal;

  constructor(private router: Router) {}

  public start_name: string = 'James Marius';
  public campus: string = 'NEUST Sumacab';
  public year: string = '3rd';
  public picture: string = '../../assets/oraxol.png';

  public name: string = 'James Marius Santos';
  public email: string = 'mariusjamess@gmail.com';
  public phone: string = '09654393608';
  public gender: string = 'Male';

  public updateName: any;
  public updateEmail: any;
  public updatePhone: any;
  public updateGender: any;

  public withBg: boolean = false;
  public isWithStyleBind: boolean = false;

  public designs: any = [
    {
      img: '../../assets/resonate-3.png',
      name: 'Resonate',
      router: './design1',
    },
    {
      img: '../../assets/kpopify-3.png',
      name: 'Kpopify',
      router: './design2',
    },
  ];

  cancel() {
    this.modal.dismiss(null, 'cancel');

    this.updateName = this.name;
    this.updateEmail = this.email;
    this.updatePhone = this.phone;
    this.updateGender = this.gender;
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  onGenderChange(event: any) {
    this.gender = event.detail.value;
  }

  route(route: any) {
    this.router.navigate([route]);
  }

  public toggleBG() {
    this.withBg ? (this.withBg = false) : (this.withBg = true);
    this.update();
  }

  public bg: any = {
    withBackground: this.withBg,
  };

  public styleSetA: any = {
    color: 'var(--ion-color-dark)',
    'border-color': 'var(--ion-color-dark)',
  };

  public styleSetB: any = {};

  public toggleStyleBinding() {
    this.isWithStyleBind
      ? (this.isWithStyleBind = false)
      : (this.isWithStyleBind = true);

    this.update();
  }

  public update() {
    this.bg = {
      withBackground: this.withBg,
    };

    this.picture = this.picture = '../../assets/marius.jpg';
  }
}
