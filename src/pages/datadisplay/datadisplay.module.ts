import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatadisplayPage } from './datadisplay';
import { NvD3Module } from 'angular2-nvd3'

@NgModule({
  declarations: [
    DatadisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DatadisplayPage),
    IonicPageModule,
    NvD3Module
  ],
  entryComponents: [
    DatadisplayPage
  ]
})
export class DatadisplayPageModule {

}
