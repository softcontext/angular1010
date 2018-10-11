import { Injectable } from '@angular/core';
import axios from 'axios';

import { Emp } from '../domain/emp';

// 원격서버와 비동기 통신을 수행하는 기술을 선택합니다.
// 1. jQuery Ajax
// 2. 앵귤러 http
// 3. axios

@Injectable({
  providedIn: 'root'
})
export class EmpHttpService {
  URL: string = 'http://localhost:3000/employees';

  constructor() { }

  findAll() {
    return axios.get(this.URL)
      .then(function(response) { // handle success
        return response.data;
      });
  }

  findOne(id) {
    return axios.get(this.URL + '/' + id)
      .then(function(response) { // handle success
        return response.data;
      });
  }

  addOne(emp: Emp) {
    return axios.post(this.URL, emp)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }

  deleteOne(id) {
    return axios.delete(this.URL + '/' + id)
      .then(function(response) { // handle success
        return true;
      });
  }

  updateOne(emp: Emp) {
    return axios.put(this.URL + '/' + emp.id, emp)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }
}
