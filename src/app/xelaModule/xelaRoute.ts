import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Routable Page
import { MenuPage } from '../../pages/menu/menu';
import { QuestionPage } from '../../pages/question/question';
import { ResultPage } from '../../pages/result/result';
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
  }

  public route(index: number): void {
    console.log("xelaController: xelaRoute: route() -> ", index);
    this.navCtrl.push(
      MenuPage, {
        p_id: index
      }
    );
  }

  public question(index: number): void {
    console.log("xelaController: xelaRoute: question() -> ", index);
    this.navCtrl.push(
      QuestionPage, {
        q_id: index
      }
    );
  }

  public result(index: number): void {
    console.log("xelaController: xelaRoute: result() -> ", index);
    this.navCtrl.push(
      ResultPage, {
        r_id: index
      }
    );
  }

  public popToRoot(): void {
    this.navCtrl.popToRoot();
  }
}
