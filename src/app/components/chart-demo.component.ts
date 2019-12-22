import { Component, OnInit } from '@angular/core';
import { NyDataService } from '../services/ny-data.service';
import * as crossfilter from 'crossfilter2';

@Component({
    selector: 'chart-demo',
    templateUrl: './chart-demo.component.html',
    styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit {
    numberCardView: Array<number>;
    pieChartView: Array<number>;
    chartScheme: Object;
    allCounties: Array<any>;
    topCounties: Array<any>;

    constructor(private nyDataService: NyDataService) {
        this.numberCardView = [1000, 200];
        this.pieChartView = [1000, 500];
        this.chartScheme = {
            domain: [
                '#FAC51D',
                '#66BD6D',
                '#FAA026',
                '#29BB9C',
                '#E96B56',
                '#55ACD2',
                '#B7332F',
                '#2C83C9',
                '#9166B8',
                '#92E7E8'
            ]
        };
    }

    prepareChartData(source) {
        let parksCf = crossfilter(source);
        let countyDimension = parksCf.dimension(item => item.county);
        let countyGroups = countyDimension.group();
        let allGroups = countyGroups.all();
        let topGroups = countyGroups.top(5);

        //Set up data in a format expected by the chart component {name: x, value: y}
        this.allCounties = allGroups.map(item => {
            return { name: item.key, value: item.value };
        });
        this.topCounties = topGroups.map(item => {
            return { name: item.key, value: item.value };
        });
    }

    ngOnInit() {
        this.nyDataService
            .getFacilityPointsWithPlaygrounds()
            .subscribe(response => {
                this.prepareChartData(response);
            });
    }
}
