import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {firebase} from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class StressStoreServiceService {

  constructor(public db: AngularFirestore) {
  }

  public Add(value) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return this.db.collection("stress").add({
      created_at: timestamp,
      parameter: value
    });
  }
}
