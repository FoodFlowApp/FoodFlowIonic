import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as d3 from 'd3';

/**
 * Generated class for the DatadisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datadisplay',
  templateUrl: 'datadisplay.html',
})
export class DatadisplayPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {   
        type: 'lineChart',
        height: 450,
        margin: 10,
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        dispatch: {},
        xAxis: {
          "axisLabel": "Time (ms)"
        },
        yAxis: {
          "axisLabel": "Voltage (v)",
          "axisLabelDistance": -10
        },
    },
    title: {   
        enable: 'true',
        text: '',
    },
    subtitle: {   
        enable: true,
        text: 'Title',
        css: {
          "text-align": "center",
          "margin": "10px 13px 0px 7px"
        }
    },
    caption: {   
        enable: true,
        html: 'Lorem ipsum',
        css: {
          "text-align": "justify",
          "margin": "10px 13px 0px 7px"
        },
    }

} 
    
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatadisplayPage');
  }

}
