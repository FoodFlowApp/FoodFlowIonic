import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  userList: AngularFireList<any>;
  totalHeight: Number;

  constructor(public afDatabase: AngularFireDatabase) {
    this.userList = afDatabase.list('/users');
  }

  createUser(): any {
    const newUserRef = this.userList.push({});

    newUserRef.set({
      // name: name,
      // birthday: birthday,
      // height: this.totalHeight,
      // weight: weight,
      // bc: false
    })
    .then(newUser => console.log(newUser))
    .catch(err => console.log(err))
  }

  calculateHeight(feet, inches) {
    this.totalHeight = (feet * 12) + inches;
    console.log(this.totalHeight);
  }

}
