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
  public start_name: string = 'James Marius Santos';

  public name: string = 'James Marius Santos';
  public email: string = 'mariusjamess@gmail.com';
  public phone: string = '09654393608';
  public gender: string = 'Male';

  cancel() {
    this.modal.dismiss(null, 'cancel');
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
