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
  getSettlements(page_num) {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/get_settlements/', {'page_num': page_num, 'page_size': 20}, {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
     
  }
  getTodayBill(page_num) {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/get_hot_txns/', {'page_num': page_num, 'page_size': 20}, {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  getBillHistory(time, page_num) {
    let headers = new Headers({
      'Auth-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInJvbGUiOjY2NiwidXNlcm5hbWUiOiJ0ZXN0QWRtaW4iLCJhY2NvdW50X2lkIjozLCJleHBpcmUiOjE1MTMyODQ3ODR9.g0p4R3Sq83wc7452ZB0v-4CKcAIGRYObqH31NK4iadA',
      'Content-Type': 'application/json'
    });
    const body = {
      'start_time': time.iv_start,
      'end_time': time.iv_end,
      'page_num': page_num,
      'page_size': 20
   };
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/api/v1/merchant/query_txns_by_time/', JSON.stringify(body), {headers: headers}
      ).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }
  login(model) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    const body ={
      'merchant_id': model.merchant_id,
      'username': model.username,
      'password': model.password,
      'version': 'v0.1'
    };
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('https://mcfpayapi.ca/login/', body, {headers: headers}
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
