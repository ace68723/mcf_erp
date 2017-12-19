import { Component, OnChanges, SimpleChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit, AfterViewInit {
  companyInfo: any = {
  };
  constructor(private _script: ScriptLoaderService, private appService: AppService) {

  }
  ngOnInit() {
   this.getCompanyInfo();
  }
  ngAfterViewInit() {

  }
  getCompanyInfo() {
    this.appService.getCompanyInfo().subscribe(
      event => {
        this.companyInfo = event.ev_data;
      }
    );
  }

}
