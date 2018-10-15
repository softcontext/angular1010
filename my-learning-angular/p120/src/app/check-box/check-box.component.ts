import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'my-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  cities = [{
    eng: 'seoul',
    han: '서울',
    checked: false
  }, {
    eng: 'busan',
    han: '부산',
    checked: true
  }, {
    eng: 'jeju',
    han: '제주',
    checked: false
  }];

  constructor() {

  }

  ngOnInit() {

  }

  confirm() {
    const checkedCities = this.cities
      .filter(c => c.checked === true)
      .map(c => c.eng)
      .join(',');

    console.log(checkedCities);
    alert(checkedCities);
  }

  submit() {

  }
}
