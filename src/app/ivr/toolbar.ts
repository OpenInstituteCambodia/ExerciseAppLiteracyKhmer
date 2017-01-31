import { Component } from '@angular/core';

@Component({
  selector: 'ion-footer',
  template: `
    <ion-footer *ngIf="showToolbar" sbtn-question>
      <ion-toolbar>
        <!-- <ion-title>Footer</ion-title> -->
        <button ion-button clear>
          <ion-icon name="arrow-back"></ion-icon>
        </button>
        <button ion-button clear>
          <ion-icon name="refresh"></ion-icon>
        </button>
        <button ion-button clear>
          <ion-icon name="log-out"></ion-icon>
        </button>
      </ion-toolbar>
    </ion-footer>
  `
})
export class ivrToolbarCtl {
  public showToolbar: boolean = false;

  constructor(){

  }

  // Todo
}
