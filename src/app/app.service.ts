import {
  Injectable
} from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }

  getCompanyInfo() {
    let headers = new Headers({
      'Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODU0MjZ9.72oq_uERtrLPT92qzy6FXNXW_L-NAiHq3VCkxG7j6iY',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/get_company_info/', {}, { headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  getSettlements() {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/get_settlements/', {'page_num': 1, 'page_size': 20}, {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
     
  }
  getTodayBill() {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/get_hot_txns/', {'page_num': 1, 'page_size': 20}, {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  getBillHistory(time) {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    const body = {
      'start_time': time.iv_start,
      'end_time': time.iv_end,
      'page_num': 1, 'page_size': 20
   };
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/query_txns_by_time/', JSON.stringify(body), {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  login() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/login/', {
          'merchantID': 'mcfAdmin',
          'username': 'admin',
          'password': 'laotie666*!',
          'version': 'v0.1'
      }, {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
