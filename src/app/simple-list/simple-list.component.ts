import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

export interface Item {
	parameter: number;
	created_at: string;
}

@Component({
	selector: 'app-simple-list',
	templateUrl: './simple-list.component.html',
	styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {
	public displayedColumns: string[] = ['parameter', 'created_at'];
	items: Observable<Item[]>;
	private itemsCollection: AngularFirestoreCollection<Item>;

	constructor(private afs: AngularFirestore) {
		const objDate = new Date();
		objDate.setDate(objDate.getDate() - 1);
		this.itemsCollection = this.afs.collection('stress',
			ref => ref.where('created_at', '>=', objDate));
		this.items = this.itemsCollection.valueChanges();
		console.log(this.itemsCollection);
		console.log(this.items);
	}

	ngOnInit() {
	}

}
