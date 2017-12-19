import { ScriptLoaderService } from './../../js/script-loader.service';
import { AppService } from './../app.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})

export class TransactionComponent implements OnInit, AfterViewInit {
    @ViewChild('ip') ip: ElementRef;
    @ViewChild('ipp') ipp: ElementRef;

    categories: any;
    show: any = true;
    newRank: any;
    categoryList: any;
    test: any= 123;
    time: any = [
    ];
    constructor(private _script: ScriptLoaderService, private appService: AppService) {

    }
    ngOnInit() {
    }

    ngAfterViewInit() {
        this._script.load('app-transaction',
        'assets/bootstrap-datepicker.js');
    }

    getTable() {
      this.appService.getTodayBill().subscribe(
        event => {
          this.categories = event.ev_data.txns;
          console.log(this.categories);
          this.categories.forEach(item => {
            if (item.vendor_channel == "WX") {
                  item.vendor_channel = '微信支付';
            } else {
              item.vendor_channel = '支付宝';
            }
          });
          this.categories.forEach(item => {
            const a = new Date(item.time * 1000);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const year = a.getFullYear();
            const month = months[a.getMonth()];
            const date = a.getDate();
            const hour = a.getHours();
            const min = a.getMinutes();
            const sec = a.getSeconds();
            item.time = year + ' ' + month + ' ' + date + ' ' + hour + ':' + min + ':' + sec ;
            return item.time;
          });
          this.categories.forEach(item => {
            if (item.is_refund == true) {
                  item.is_refund = '退款';
            } else {
              item.is_refund = '付款';
            }
          });
        }
      );
    }
    getBillHistory() {
        this.time.iv_start = this.ip.nativeElement.value;
        this.time.iv_end = this.ipp.nativeElement.value;
        console.log(this.time.iv_start);
        console.log(this.time.iv_end);
        this.time.iv_start = new Date(this.time.iv_start).getTime() / 1000;
        this.time.iv_end = new Date(this.time.iv_end).getTime() / 1000;

        console.log(this.time.iv_start);
        console.log(this.time.iv_end);
        this.appService.getBillHistory(this.time).subscribe(
          event => {
            console.log(event);
            this.categories = event.ev_data.txns;
            console.log(this.categories);
            this.categories.forEach(item => {
                if (item.vendor_channel == "WX") {
                      item.vendor_channel = '微信支付';
                } else {
                  item.vendor_channel = '支付宝';
                }
              });
              this.categories.forEach(item => {
                const a = new Date(item.time * 1000);
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const year = a.getFullYear();
                const month = months[a.getMonth()];
                const date = a.getDate();
                const hour = a.getHours();
                const min = a.getMinutes();
                const sec = a.getSeconds();
                item.time = year + ' ' + month + ' ' + date + ' ' + hour + ':' + min + ':' + sec ;
                return item.time;
              });
              this.categories.forEach(item => {
                if (item.is_refund == true) {
                      item.is_refund = '退款';
                } else {
                  item.is_refund = '付款';
                }
              });
          }
        );
      }
    convertTime(time) {
        Math.round(new Date('time').getTime() / 1000);
    }
}
