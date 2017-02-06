import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  name: "xelaRoute"
  description: "Self Audio Introduction System, Used for children, literacy or disabled people to help navigate on using the application."
  author: ""
  developers: [
    "Socheat Sok (socheatsok78@gmail.com)",
    "Sinat Heum (heumsinatgic25@gmail.com)",
    "Sorya Phoeun (soryaphoeun08@gmail.com)"
  ]
  licenses: "GNU GPL"
*/

/* public navCtrl: NavController, public navParams: NavParams */

@Injectable()
export class xelaRoute {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ) {
      console.log("xelaController: xelaRoute: Active!");
      console.log("xelaController: xelaRoute: route() -> ", this.navCtrl);
  }

  public route(page: any, index: number): void {
    console.log("xelaController: xelaRoute: route() -> ", this.navCtrl);
    this.navCtrl.push(
      page, {
        q_id: index
      }
    );
  }

  public popToRoot(): void {
    this.navCtrl.popToRoot();
  }
}
