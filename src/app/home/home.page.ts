// import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal)
  modal!: IonModal;

  constructor() {}

  public start_name: string = 'James Marius';
  public campus: string = "NEUST Sumacab";


  public name: string = 'James Marius Santos';
  public email: string = 'mariusjamess@gmail.com';
  public phone: string = '09654393608';
  public gender: string = 'Male';

  public updateName: any;
  public updateEmail: any;
  public updatePhone: any;
  public updateGender: any;


  public designs: any = [
    {
      img: '../../assets/resonate-3.png',
      name: 'Resonate'
    }, 
    {
      img: '../../assets/kpopify-3.png',
      name: 'Kpopify'
    }
  ]


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


}
