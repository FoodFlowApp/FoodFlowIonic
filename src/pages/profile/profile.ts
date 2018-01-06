import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  showMens = false;
  showNut = false;
  showFit = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showMenstrual() {
    this.showMens = !this.showMens;
    console.log('show menstural clicked')
  }

  showNutrition() {
    this.showNut = !this.showNut;
  }

  showFitness() {
    this.showFit = !this.showFit;
  }

}
