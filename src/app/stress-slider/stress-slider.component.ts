import {Component, OnInit} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {StressStoreServiceService} from '../stress-store-service/stress-store-service.service';

@Component({
	selector: 'stress-slider',
	templateUrl: './stress-slider.component.html',
	styleUrls: ['./stress-slider.component.css']
})
export class StressSliderComponent implements OnInit {

	public stressValue = 50;

	constructor(public db: StressStoreServiceService) {
	}

	ngOnInit() {
	}

	changeStressParameter(e) {
		console.log(e);
		console.log(this.stressValue);

		this.db.Add(this.stressValue)
			.then(function (docRef) {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
	}

}
