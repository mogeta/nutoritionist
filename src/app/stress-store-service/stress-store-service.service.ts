import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class StressStoreServiceService {

  constructor(public db: AngularFirestore) {
  }

  public Add(value) {

    const timestamp = new Date();
    return this.db.collection("stress").add({
      created_at: timestamp,
      parameter: value
    });
  }
}
