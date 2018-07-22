import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
	providedIn: 'root'
})
export class StressStoreServiceService {
	readonly COLLECTION_NAME: string = 'stress';

	constructor(public db: AngularFirestore) {
	}

	public Get() {
		var objDate = new Date();
		objDate.setDate(objDate.getDate() - 100);
		this.db.collection(this.COLLECTION_NAME,
				ref => ref.where('created_at', '>=',objDate));
	}

	public Add(value) {

		const timestamp = new Date();
		return this.db.collection(this.COLLECTION_NAME).add({
			created_at: timestamp,
			parameter: value
		});
	}
}
