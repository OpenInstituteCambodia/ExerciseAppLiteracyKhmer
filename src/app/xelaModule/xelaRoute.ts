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
  }

  public route(page: any, index: number): void {
    console.log("xelaController: xelaRoute: route() -> ", index);
    this.navCtrl.push(
      page, {
        p_id: index
      }
    );
  }

  public question(page: any, option: any): void {
    console.log("xelaController: xelaRoute: question() -> ", option);
    this.navCtrl.push(
      page, {
        q_type: option["q_type"], // Question Type M1, M2, -> M4
        l_id: option["l_id"], // Lesson Number
        p_id: option["p_id"], // Page Number
        q_id: option["q_id"], // Question Number
        c_id: option["c_id"] // Question Number
      }
    );
  }

  public result(page: any, option: any): void {
    console.log("xelaController: xelaRoute: result() -> ", option);
    this.navCtrl.push(
      page, {
        r_id: option["r_id"],
        next_question: option["next_question"]
      }
    );
  }

  public popToRoot(): void {
    this.navCtrl.popToRoot();
  }
}
