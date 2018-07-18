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
		this.itemsCollection = afs.collection<Item>('stress');
		this.items = this.itemsCollection.valueChanges();
		console.log(this.itemsCollection);
		console.log(this.items);
	}

	ngOnInit() {
	}

}
